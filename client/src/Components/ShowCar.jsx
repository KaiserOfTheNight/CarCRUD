import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CarShow() {
    const { id } = useParams();
    const [car, setCar] = useState(); 

    useEffect(() => {
        axios.get(`http://localhost:3000/cars/${id}`)
            .then(res => setCar(res.data))
    }, [id]);

    if (!car) return <div>Loading...</div>;

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Car Details</h1>
            <div className="card" style={{ width: "24rem", margin: "0 auto" }}>
                <div className="card-body">
                    <h5 className="card-title">{car.brand} - {car.model}</h5>
                    <h6 className="card-subtitle mb-3 text-muted">ID: {car.id}</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Year:</strong> {car.year}</li>
                        <li className="list-group-item"><strong>Color:</strong> {car.color}</li>
                        <li className="list-group-item"><strong>Price:</strong> {car.price} $</li>
                    </ul>
                    <Link className="btn btn-secondary mt-3" to="/">Back to List</Link>
                </div>
            </div>
        </div>
    );
}

export default CarShow;
