import React from 'react';


const IdealWeight = ({ height }) => {
    const calculateIdealWeight = (height) => {
        const minWeight = 18.5 * (height ** 2);
        const maxWeight = 24.9 * (height ** 2);
        return { minWeight, maxWeight };
    };

    const { minWeight, maxWeight } = calculateIdealWeight(height);

    return (
        <div>
            <h3>Peso Ideal:</h3>
            <p>Peso mínimo ideal: {minWeight.toFixed(2)} kg</p>
            <p>Peso máximo ideal: {maxWeight.toFixed(2)} kg</p>
        </div>
    );
};

export default IdealWeight;