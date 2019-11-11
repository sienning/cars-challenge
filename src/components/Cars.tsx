import * as React from 'react';
import ListCars from './ListCars';

interface IProps {
}

interface IState {
    cars?: [];
    isLoading?: boolean;
}

class Cars extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            cars: [],
            isLoading: true,
        }
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

    render() {
        const { cars, isLoading } = this.state;

        return (
            <div>
                {console.log("hello")}
                {console.log(cars)}
                {isLoading ? (
                    console.log("load")
                ) : (
                        <div className="card-deck">
                            {isLoading ? console.log("loading") : <ListCars cars={cars} ></ListCars>}
                        </div>
                    )
                }


            </div>
        )
    }
}
export default Cars;