import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Result = ({ imc, classification }) => {
    return (
        <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Seu IMC é:</Text>
            <Text style={styles.imcValue}>{imc}</Text>
            <Text style={styles.classificationText}>Classificação: {classification}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    resultContainer: {
        backgroundColor: '#e0f7fa', // Cor de fundo suave
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center', // Centraliza o conteúdo
        shadowColor: '#000', // Sombra para dar profundidade
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // Para Android
    },
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00796b', // Cor do texto
    },
    imcValue: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#d32f2f', // Cor do IMC
        marginVertical: 10,
    },
    classificationText: {
        fontSize: 18,
        color: '#455a64', // Cor da classificação
    },
});

export default Result;