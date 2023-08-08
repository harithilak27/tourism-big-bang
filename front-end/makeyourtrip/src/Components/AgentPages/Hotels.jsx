import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultImageSrc = '/Images/hoteldeafult.png'
const initialFieldValues = {
    hotelId: 0,
    hotelName: '',
    hotelDescription: '',
    ratings:'',
    pricePerPerson:'',
    hotelRoomsAvailable:'',
    foodType:'',
    hotelLocation:'',
    imageName: '',
    imageSrc: defaultImageSrc,
    imageFile: null
}

export default function Hotels(props) {
    const { addOrEdit, recordForEdit } = props

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})


    useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
    }, [recordForEdit])

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc
            })
        }
    }

    const validate = () => {
        let temp = {}
        temp.hotelName = values.hotelName === "" ? false : true;
        temp.hotelDescription = values.hotelDescription === "" ? false : true;
        temp.ratings = values.ratings === "" ? false : true;
        temp.pricePerPerson = values.pricePerPerson === "" ? false : true;
        temp.hotelRoomsAvailable = values.hotelRoomsAvailable === "" ? false : true;
        temp.foodType = values.foodType === "" ? false : true;
        temp.hotelLocation = values.hotelLocation === "" ? false : true;
        temp.imageSrc = values.imageSrc === defaultImageSrc ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x === true)
    }

    const resetForm = () => {
        setValues(initialFieldValues)
        document.getElementById('image-uploader').value = null;
        setErrors({})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData()
            formData.append('hotelId', values.hotelId)
            formData.append('hotelName', values.hotelName)
            formData.append('hotelDescription', values.hotelDescription)
            formData.append('ratings', values.ratings)
            formData.append('pricePerPerson', values.pricePerPerson)
            formData.append('hotelRoomsAvailable', values.hotelRoomsAvailable)
            formData.append('foodType', values.foodType)
            formData.append('hotelLocation', values.hotelLocation)
            formData.append('imageFile', values.imageFile)
            addOrEdit(formData, resetForm)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' invalid-field' : '')

    return (
        <div>

            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>

                <div className="card postimg">
                    <div className="container text-center">
                        <p className="lead">Hotel Details</p>
                    </div>
                    <img src={values.imageSrc} className="card-img-top" style={{ width: '200px', height: '200px', margin: '0 auto' }} alt='imagehere' />
                    <div className="card-body">
                        <div className="form-group">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('imageSrc')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('hotelName')} placeholder="Hotel Name" name="hotelName"
                                value={values.hotelName}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                placeholder="Hotel Description"
                                name="hotelDescription"
                                value={values.hotelDescription}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('ratings')} placeholder="Hotel Ratings" name="ratings"
                                value={values.ratings}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('pricePerPerson')} placeholder="pricePerPerson " name="pricePerPerson"
                                value={values.pricePerPerson}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('hotelRoomsAvailable')} placeholder="hotelRoomsAvailable" name="hotelRoomsAvailable"
                                value={values.hotelRoomsAvailable}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('foodType')} placeholder="foodType" name="foodType"
                                value={values.foodType}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('hotelLocation')} placeholder="Hotel Location" name="hotelLocation"
                                value={values.hotelLocation}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn submitimage">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}