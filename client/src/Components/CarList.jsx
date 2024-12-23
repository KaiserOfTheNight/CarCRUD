import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { deleteCarAction, fetchCarAction } from "../Config/Actions";

function CarList() {

    const cars = useSelector(state => state.cars)

    const dispatch = useDispatch()

    useEffect(()=>{
        axios.get("http://localhost:3000/cars")
        .then(res => dispatch(fetchCarAction(res.data)))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/cars/${id}`)
        .then(() => dispatch(deleteCarAction(id)))
    }

    return (
       <div className="container m-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="text-center">List of Cars</h1>
                <Link className="btn btn-success" to="/add">Add New Car</Link>
            </div>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>brand</th>
                        <th>model</th>
                        <th>year</th>
                        <th>color</th>
                        <th>price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map(car => (
                            <tr key={car.id}>
                                <td>{car.id}</td>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                                <td>{car.color}</td>
                                <td>{car.price}</td>
                                <td>
                                    <div class="btn-group">
                                        <Link className="btn btn-primary" to={`/show/${car.id}`}>Show</Link>
                                        <Link className="btn btn-warning" to={`/update/${car.id}`}>Update</Link>
                                        <button className="btn btn-danger" onClick={() => handleDelete(car.id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
       </div>
    );
}

export default CarList;