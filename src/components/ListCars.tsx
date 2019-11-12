import * as React from 'react';
import CarsCard from './CarsCard';

const ListCars = ({ cars, duration, distance }) => (
    <div className="row">
        {
            cars.map((i, index) =>
                <CarsCard 
                    key={'i'+index} 
                    urlImage={i.picturePath} 
                    brand={i.brand} 
                    model={i.model} 
                    pricePerDay={i.pricePerDay} 
                    pricePerKm={i.pricePerKm} 
                    duration={duration} 
                    distance={distance} />
            )}
    </div>

);
export default ListCars;