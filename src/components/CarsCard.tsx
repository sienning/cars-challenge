import * as React from 'react';

const CarsCard = ({ urlImage, brand, model, pricePerDay, pricePerKm, duration, distance }) => {
    let pDay = pricePerDay / 100;
    const pKm = pricePerKm / 100;
    const price = ((duration * pDay) + (distance * pKm)).toFixed(2);

    const calculate = (pDay) => {
        pDay = pricePerDay / 100;

        if (duration > 1 && duration < 4) {
            pDay = pDay * (1 - (10 / 100));
        } else if (duration > 4 && duration < 10) {
            pDay = pDay * (1 - (30 / 100));
        } else if (duration >= 10) {
            pDay = pDay * (1 - (50 / 100));
        }
        return pDay.toFixed(2);
    }

    return (
        <div className="col-md-3 col-sm-6 mb-5">
            <div className="card text-center shadow p-3 mb-5 bg-white rounded">
                <img src={urlImage} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{brand} - {model}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" >Price/Day : {calculate(pDay)} €</li>
                        <li className="list-group-item" id="p-km">Price/km : {pKm} €</li>
                        <li className="list-group-item" id="price">
                            <div className="card-text">
                                <b> Price : {price} €</b>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CarsCard