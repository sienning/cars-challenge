import * as React from 'react';
import CarsCard from './CarsCard';

const ListCars = ({ cars }) => (
    <div className="row">
        {
            cars.map((i, index) =>
                <CarsCard key={'i'+index} urlImage={i.picturePath} brand={i.brand} model={i.model} pricePerDay={i.pricePerDay} pricePerKm={i.pricePerKm}/>
            )}
    </div>

);
export default ListCars;