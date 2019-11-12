import * as React from 'react';

const CarsCard = ({ urlImage, brand, model, pricePerDay, pricePerKm }) => (
    <div className="col-md-3 col-sm-6 mb-5">
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img src={urlImage} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{brand} - {model}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price/Day : {pricePerDay/100} €</li>
                    <li className="list-group-item">Price/km : {pricePerKm/100} €</li>
                </ul>
            </div>
        </div>
    </div>

);

export default CarsCard