import * as React from 'react';
import '../Cars.css'
import ListCars from './ListCars';
import Filter from './Filter';
import Spinner from './Spinner';

interface IState {
    cars?: [];
    isLoading?: boolean;
    valueDuration?: number;
    valueDistance?: number;
}

class Cars extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            cars: [],
            isLoading: true,
            valueDuration: 1,
            valueDistance: 50,
        };
        this.carsFilter = this.carsFilter.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChangeDuration = this.handleOnChangeDuration.bind(this);
        this.handleOnChangeDistance = this.handleOnChangeDistance.bind(this);
    }





    async componentDidMount() {
        this.setState({ isLoading: true })

        try {
            const res = await fetch('http://localhost:3001/cars.json');
            const data = await res.json();
            this.setState({ cars: data, isLoading: false })
        } catch (err) {
            this.setState({ isLoading: true })

            console.log(err.msg);
            throw err;
        }
    }

    async carsFilter(dur, dist) {
        const res = await fetch('http://localhost:3001/cars.json?duration=' + dur + '&distance=' + dist);
        const data = await res.json();
        return data;
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const dur = e.currentTarget.durationFilter.value;
        const dist = e.currentTarget.distanceFilter.value;
        const data = this.carsFilter(dur, dist);
        data.then(value => { this.setState({ cars: value }) });

    };

    handleOnChangeDuration = () => {
        const val = document.getElementById("duration").value;
        this.setState({ valueDuration: val });

    };

    handleOnChangeDistance = () => {
        const val = document.getElementById("distance").value;
        this.setState({ valueDistance: val });

    };



    render() {
        const { cars, isLoading, valueDuration, valueDistance } = this.state;

        return (
            <div>
                <div className="jumbotron h-50 shadow rounded-0">
                    <h1 className="display-4 text-center">Car rental</h1>
                    <p className="lead text-center">Rent a car</p>
                    {/* <hr className="my-4" /> */}
                    <div className="lead">
                        <div className="w-50 mx-auto">
                            <Filter handleSubmit={this.handleOnSubmit} handleOnChangeDuration={this.handleOnChangeDuration} handleOnChangeDistance={this.handleOnChangeDistance} duration={valueDuration} distance={valueDistance} />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h4 className="text-center mb-4 text-white">Cars available</h4>
                    {isLoading ? (
                        <Spinner />
                    ) : (
                            <div className="card-group">
                                <ListCars cars={cars} duration={valueDuration} distance={valueDistance}></ListCars>
                            </div>
                        )
                    }
                </div>




            </div>
        )
    }
}
export default Cars;