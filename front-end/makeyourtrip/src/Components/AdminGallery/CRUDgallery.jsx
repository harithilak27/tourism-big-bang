import React, { useState, useEffect } from 'react';
import GalleryImages from './GalleryImages';
import axios from 'axios';
import './Gallery.css';

const CRUDgallery =() => {
  const [galleryList, setgalleryList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);

  useEffect(() => {
    refreshgalleryList();
  },[]);

  const crudgalleryapi = (url = 'https://localhost:7117/api/AdminGallery/') => {
    return {
      fetchAll: () => axios.get(url),
      create: newRecord => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: id => axios.delete(url + id)
    };
  };

  function refreshgalleryList() {
    crudgalleryapi()
      .fetchAll()
      .then(res => {
        setgalleryList(res.data);
      })
      .catch(err => console.log(err));
  }

  const addOrEdit = (formData, onSuccess) => {
    if (formData.get('adminImgsId') == '0') {
      crudgalleryapi()
        .create(formData)
        .then(res => {
          console.log()

          onSuccess();
          refreshgalleryList();
        })
        .catch(err => console.log(err));
    } else {
      crudgalleryapi()
        .update(formData.get('adminImgsId'), formData)
        .then(res => {
          onSuccess();
          refreshgalleryList();
        })
        .catch(err => console.log(err));
    }
  };

  const showRecordDetails = data => {
    setRecordForEdit(data);
  };

  const onDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm('Are you sure to delete this record?')) {
      crudgalleryapi()
        .delete(id)
        .then(res => refreshgalleryList())
        .catch(err => console.log(err));
    }
  };

  const imageCard = data => (
    <div className="card getimg" onClick={() => showRecordDetails(data)}>
      <img src={data.imageSrc} className="card-img-top" alt="default images" />
      <div className="card-body">
        <h5>{data.locationName}</h5>
        <span className="locationdesc">{data.locationdescription}</span> <br />
        <button
          className="btn btn-danger"
          onClick={e => onDelete(e, parseInt(data.adminImgsId))}
        >
          <i className="far fa-trash-alt" style={{color:'white'}}></i>
        </button>
      </div>
    </div>
  );

  return (
    <div className="row">
      <div className="col-md-4">
        <GalleryImages addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
      </div>
      <div className="col">
        <table>
          <tbody>
            {galleryList.map((data, i) => (
              <tr key={i}>
                <td>{imageCard(data)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CRUDgallery;
