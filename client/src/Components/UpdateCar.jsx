import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateCarAction } from "../Config/Actions";
import axios from "axios";

function UpdateCar() {
    const {id} = useParams()
    const [car, setCar] = useState(null)

    useEffect(()=>{
        axios.get(`http://localhost:3000/cars/${id}`)
        .then((res)=>{
            console.log(res.data)  
            setCar(res.data)
        })
    }, [])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target
        setCar({...car, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3000/cars/${id}`, car)
        .then(()=>{
            dispatch(updateCarAction(car))
        })
        navigate('/')
    }


    if (!car) {
        return <div>Loading...</div>
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <form className="w-50 my-5 p-5 border shadow rounded p-5" onSubmit={handleSubmit}>

                <div class="mb-3">
                    <label class="form-label">brand</label>
                    <input type="text" name="brand" value={car.brand} class="form-control" onChange={handleChange}/>
                </div>

                <div class="mb-3">
                    <label class="form-label">model</label>
                    <input type="text" name="model" value={car.model} class="form-control" onChange={handleChange}/>
                </div>

                <div class="mb-3">
                    <label class="form-label">year</label>
                    <input type="number" name="year" value={car.year} class="form-control" onChange={handleChange}/>
                </div>

                <div class="mb-3">
                    <label class="form-label">color</label>
                    <input type="text" name="color" value={car.color} class="form-control" onChange={handleChange}/>
                </div>

                <div class="mb-3">
                    <label class="form-label">price</label>
                    <input type="number" name="price" value={car.price} class="form-control" onChange={handleChange}/>
                </div>

                <button type="submit" class="btn btn-primary">Update car</button>
                <Link className="btn btn-secondary ms-2" to="/">Back to List</Link>
            </form>
        </div>
    );
}

export default UpdateCar;











