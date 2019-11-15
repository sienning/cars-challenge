import * as React from 'react';
import '../CarsCard.css'

const CarsCard = ({ urlImage, brand, model, pricePerDay, pricePerKm, duration, distance }) => {
    let pDay = pricePerDay / 100;
    let pKm = pricePerKm / 100;

    const calculatePDay = (pDay) => {
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

    const calcPrice = (pD, pK, duration, distance) => {
        const pDay = calculatePDay(pD);
        const price = ((duration * pDay) + (distance * pK)).toFixed(2);
        return price;
    };

    return (
        <div className="col-md-3 col-md-4 mb-5">
            <div className="card border-0 text-center shadow mb-5 bg-white rounded">
                
                <div className="card-body">
                <img src={urlImage} className="card-img-top rounded" />
                    <h5 className="card-title mt-4">{brand} {model}</h5>
                    <p className="card-text">
                        <b>{calcPrice(pDay, pKm, duration, distance)} €</b>
                    </p>
                </div>

                <div className="card-footer text-muted clearfix" >
                    <span className="prices float-left"><small>Price/Day : {calculatePDay(pDay)} €</small></span>
                    <span className="prices float-right"><small >Price/km : {pKm} €</small></span>
                </div>
            </div>
        </div>
    );
};

export default CarsCard