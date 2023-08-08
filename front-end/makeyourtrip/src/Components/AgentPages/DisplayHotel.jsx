import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hotels from './Hotels';
import './Hotel.css'

const DisplayHotel = () => {

    const [hotellist, sethotellist] = useState([]);
    const [recordForEdit, setRecordForEdit] = useState(null);

    useEffect(() => {
        refreshhotellist();
    }, []);

    const hotelapi = (url = 'https://localhost:7117/api/Hotel/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        };
    };

    function refreshhotellist() {
        hotelapi()
            .fetchAll()
            .then(res => {
                sethotellist(res.data);
            })
            .catch(err => console.log(err));
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('hotelId') == '0') {
            hotelapi()
                .create(formData)
                .then(res => {
                    onSuccess();
                    refreshhotellist();
                })
                .catch(err => console.log(err));
        } else {
            hotelapi()
                .update(formData.get('hotelId'), formData)
                .then(res => {
                    onSuccess();
                    refreshhotellist();
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
            hotelapi()
                .delete(id)
                .then(res => refreshhotellist())
                .catch(err => console.log(err));
        }
    };

    const imageCard = data => (
        <div className="card getimg" onClick={() => showRecordDetails(data)}>
            <img src={data.imageSrc} className="card-img-top" alt="default images" />
            <div className="card-body">
                <h5>{data.hotelName}</h5>
                <p>Id:{data.hotelId}</p>
                <span className="locationdesc">{data.hotelDescription}</span> <br />
                <p>Ratings:{data.ratings}</p>
                <p>Per Person:₹{data.pricePerPerson}</p>
                <p>Total rooms:{data.hotelRoomsAvailable}</p>
                <p>Food Type:{data.foodType}</p>
                <p>Location:{data.hotelLocation}</p>
                <button
                    className="btn btn-danger"
                    onClick={e => onDelete(e, parseInt(data.hotelId))}
                >
                    <i className="far fa-trash-alt" style={{ color: 'white' }}></i>
                </button>
            </div>
        </div>
    );

    return (
        <div className="centralized">
            <div className="addfetch">
                <Hotels addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
            </div>
            <div className="editupdate">
                <table>
                    <tbody>
                        {hotellist.map((data, i) => (
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

export default DisplayHotel