import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result.js';
import { useState } from 'react';
import Classification from './Classification.js';
import IdealWeight from './IdealWeight.js'; // Importando o componente de peso ideal

const FormIMC = ({ setImc, setHeight }) => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState(null);
    const [imc, setImcState] = useState(null);

    const calcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100; // Convertendo altura de cm para metros
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImcState(imcCalculado);
            setImc(imcCalculado); // Atualizando o IMC no componente pai
            setHeight(alturaMetros); // Atualizando a altura no componente pai
        }
    };

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} />
            {imc && <Result imc={imc} />}
            {imc && <Classification imc={imc} />} {/* Exibindo a classificação do IMC */}
            {altura && <IdealWeight height={parseFloat(altura) / 100} />} {/* Exibindo o peso ideal */}
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default FormIMC;