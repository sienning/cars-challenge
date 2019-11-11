import * as React from 'react';
import CarsCard from './CarsCard';

const ListCars = ({ cars }) => (
    <div className="row">
        {
            cars.map((i) =>
                <CarsCard urlImage={i.picturePath} brand={i.brand} model={i.model} pricePerDay={i.pricePerDay} pricePerKm={i.pricePerKm} maxDuration={i.availability.maxDuration} maxDistance={i.availability.maxDistance} />
            )}
    </div>

);
export default ListCars;