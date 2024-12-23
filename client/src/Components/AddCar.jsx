import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCarAction } from "../Config/Actions";
import axios from "axios";

function AddCar() {
    const [car, setCar] = useState({
        brand: "",
        model: "",
        year: "",
        color: "",
        price: ""
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = useSelector(state => state.cars.length + 1)

    const handleChange = (e) => {
        const {name, value} = e.target
        setCar({...car, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newCar = {...car, id: id.toString()}

        axios.post("http://localhost:3000/cars", newCar)
        .then(()=>{
            dispatch(addCarAction(newCar))
        })
        navigate('/')
    }

    return (
       
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <form className="w-50 my-5 p-5 border shadow rounded p-5" onSubmit={handleSubmit}>

                <div class="mb-3">
                    <label class="form-label">brand</label>
                    <input type="text" name="brand" class="form-control" onChange={handleChange}/>
                </div>

                <div class="mb-3">
                    <label class="form-label">model</label>
                    <input type="text" name="model" class="form-control" onChange={handleChange}/>
                </div>

                <div class="mb-3">
                    <label class="form-label">year</label>
                    <input type="number" name="year" class="form-control" onChange={handleChange}/>
                </div>

                <div class="mb-3">
                    <label class="form-label">color</label>
                    <input type="text" name="color" class="form-control" onChange={handleChange}/>
                </div>

                <div class="mb-3">
                    <label class="form-label">price</label>
                    <input type="number" name="price" class="form-control" onChange={handleChange}/>
                </div>

                <button type="submit" class="btn btn-primary">Add car</button>
            </form>
        </div>
    );
}

export default AddCar;