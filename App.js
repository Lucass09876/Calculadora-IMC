import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title.js';
import FormIMC from './src/components/FormIMC.js';
import Classification from './src/components/Classification'; // Importando o componente de classificação
import IdealWeight from './src/components/IdealWeight'; // Importando o componente de peso ideal
import { useState } from 'react';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setImc] = useState(null);

  // Função para calcular o IMC
  const calculateIMC = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);
    
    if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
      alert("Por favor, insira valores válidos para peso e altura.");
      return;
    }

    const imcValue = weightValue / (heightValue ** 2);
    setImc(imcValue);
  };

  return (
    <View style={styles.container}>
      <Title />
      <FormIMC setWeight={setWeight} setHeight={setHeight} calculateIMC={calculateIMC} />
      
      {imc && (
        <View>
          <Text style={styles.imcText}>IMC: {imc.toFixed(2)}</Text>
          <Classification imc={imc} />
          <IdealWeight height={height} />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#fff',
  },
  imcText: {
    fontSize: 24,
    marginVertical: 20,
  },
});