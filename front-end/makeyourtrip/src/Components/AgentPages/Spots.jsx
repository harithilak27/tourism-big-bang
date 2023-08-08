import React, { useState, useEffect } from 'react'

const defaultImageSrc = '/Images/hoteldeafult.png'
const initialFieldValues = {
    spotId: 0,
    spotLocation: '',
    specialtyId: '',
    imageName: '',
    imageSrc: defaultImageSrc,
    imageFile: null
}
export default function Spots(props) {

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
        temp.spotLocation = values.spotLocation === "" ? false : true;
        temp.specialtyId = values.specialtyId === "" ? false : true;
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
            formData.append('spotId', values.spotId)
            formData.append('spotLocation', values.spotLocation)
            formData.append('specialtyId', values.specialtyId)
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
                        <p className="lead">Locations</p>
                    </div>
                    <img src={values.imageSrc} className="card-img-top" style={{ width: '200px', height: '200px', margin: '0 auto' }} alt='imagehere' />
                    <div className="card-body">
                        <div className="form-group">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('imageSrc')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('spotLocation')} placeholder="spotLocation Name" name="spotLocation"
                                value={values.spotLocation}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input type='textarea' className="form-control" placeholder="specialtyId " name="specialtyId"
                                value={values.specialtyId}
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

