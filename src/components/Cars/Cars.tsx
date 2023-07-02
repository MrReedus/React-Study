import React from 'react';


type CarsType = {
    topCars: Array<topCarsType>
}


type topCarsType = {
    manufacturer: string
    model: string
}

const Cars = (props: CarsType) => {

    return (
        <div>
            <h2>CARS</h2>
            <ul>
                {props.topCars.map((car, i) => {
                        return (
                            <li key={i}><b>{++i} </b><span>{car.manufacturer}</span> {car.model} </li>
                        )
                    }
                )}
            </ul>
        </div>
    );
};

export default Cars;