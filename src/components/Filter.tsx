import * as React from 'react';

const Filter = ({ handleSubmit, handleOnChangeDuration, handleOnChangeDistance, duration, distance }) => (
    <div className="mb-5 mt-5 shadow-sm p-3 mb-5 bg-white rounded">
        <h4 className="text-center">Filter</h4>
        <form onChange={handleSubmit} >
            <label htmlFor="duration">Duration : {duration} days</label>
            <input 
                type="range" 
                className="custom-range" 
                min="1" 
                max="30" 
                id="duration" 
                defaultValue={duration} 
                onInput={handleOnChangeDuration} 
                name="durationFilter" />
            <label htmlFor="distance">Distance : {distance} km</label>
            <input 
                type="range" 
                className="custom-range" 
                min="50" 
                max="3000" 
                step="50" 
                id="distance" 
                defaultValue={distance} 
                onInput={handleOnChangeDistance}
                name="distanceFilter" />
            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
        </form>
    </div>

);

export default Filter;