import React from "react";
import { View, Text, StyleSheet } from "react-native";
 
// Função para determinar a classificação do IMC
const getIMCClassification = (imc) => {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Sobrepeso";
  if (imc < 35) return "Obesidade grau 1";
  if (imc < 40) return "Obesidade grau 2";
  return "Obesidade grau 3 (mórbida)";
};
 
const Classification = ({ imc }) => {
  if (!imc) return null; // Se o IMC ainda não foi calculado, não exibe nada.
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Classificação: {getIMCClassification(imc)}</Text>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
 
export default Classification;
 