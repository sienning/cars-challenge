import * as React from 'react';
import '../Filter.css';

const Filter = ({ handleSubmit, handleOnChangeDuration, handleOnChangeDistance, duration, distance }) => {
    const calcPercent = (dur) => {
        let percent = 10;
        const offer = document.getElementById("offer");

        if(dur > 1 && dur < 4){
            offer.style.visibility = "visible";
            percent = 10;
        } else if(dur > 4 && dur < 10) {
            offer.style.visibility = "visible";
            percent = 30;
        } else if(dur >= 10) {
            offer.style.visibility = "visible";
            percent = 50;
        } else if(dur == 1){
            percent = 0
        }
        return percent;
    }
    return (
        <div className="filter shadow p-3 mb-5 bg-white mt-5 rounded">
            <h4 className="text-center">Plan your car rental</h4>
            <h6 className="text-center" id="offer" >Special offer : Price per Day <span className="badge badge-success">-{calcPercent(duration)}%</span></h6>
            
            <form onChange={handleSubmit} >
                <label htmlFor="duration"><b>Duration :</b> {duration} days</label>
                <input
                    type="range"
                    className="custom-range"
                    min="1"
                    max="30"
                    id="duration"
                    defaultValue={duration}
                    onInput={handleOnChangeDuration}
                    name="durationFilter" />
                <label htmlFor="distance"><b>Distance :</b> {distance} km</label>
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
            </form>
        </div>
    );
};

export default Filter;