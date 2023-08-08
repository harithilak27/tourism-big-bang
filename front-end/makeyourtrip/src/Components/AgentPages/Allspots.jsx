import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spots from './Spots';

const Allspots =() => {

    const [spotlist, setspotlist] = useState([]);
    const [recordForEdit, setRecordForEdit] = useState(null);

    useEffect(() => {
        refreshspotlist();
    }, []);

    const spotapi = (url = 'https://localhost:7117/api/VisitingSpots/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        };
    };

    function refreshspotlist() {
        spotapi()
            .fetchAll()
            .then(res => {
                setspotlist(res.data);
            })
            .catch(err => console.log(err));
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('spotId') == '0') {
            spotapi()
                .create(formData)
                .then(res => {
                    onSuccess();
                    refreshspotlist();
                })
                .catch(err => console.log(err));
        } else {
            spotapi()
                .update(formData.get('spotId'), formData)
                .then(res => {
                    onSuccess();
                    refreshspotlist();
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
            spotapi()
                .delete(id)
                .then(res => refreshspotlist())
                .catch(err => console.log(err));
        }
    };

    const imageCard = data => (
        <div className="card getimg" onClick={() => showRecordDetails(data)}>
            <img src={data.imageSrc} className="card-img-top" alt="default images" />
            <div className="card-body">
                <h5>{data.spotLocation}</h5>
                <p>Id:{data.spotId}</p>
                <p>siutable Places:{data.specialtyId}</p>
                <button
                    className="btn btn-danger"
                    onClick={e => onDelete(e, parseInt(data.spotId))}
                >
                    <i className="far fa-trash-alt" style={{ color: 'white' }}></i>
                </button>
            </div>
        </div>
    );

    return (
        <div className="centralized">
            <div className="addfetch">
                <Spots addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
            </div>
            <div className="editupdate">
                <table>
                    <tbody>
                        {spotlist.map((data, i) => (
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

export default Allspots