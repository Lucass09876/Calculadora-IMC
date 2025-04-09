import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const IdealWeight = ({ height }) => {
    const calculateIdealWeight = (height) => {
        const minWeight = 18.5 * (height ** 2);
        const maxWeight = 24.9 * (height ** 2);
        return { minWeight, maxWeight };
    };

    const { minWeight, maxWeight } = calculateIdealWeight(height);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Peso Ideal:</Text>
            <Text style={styles.text}>Peso mínimo ideal: {minWeight.toFixed(2)} kg</Text>
            <Text style={styles.text}>Peso máximo ideal: {maxWeight.toFixed(2)} kg</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        margin: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
    },
});

export default IdealWeight;
