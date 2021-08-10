import React from 'react';
import {View, Text} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>

      <View style={styles.row}>
        <ButtonCalc txt="C" color="#9B9B9B" />
        <ButtonCalc txt="+/-" color="#9B9B9B" />
        <ButtonCalc txt="del" color="#9B9B9B" />
        <ButtonCalc txt="/" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc txt="7" />
        <ButtonCalc txt="8" />
        <ButtonCalc txt="9" />
        <ButtonCalc txt="X" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc txt="4" />
        <ButtonCalc txt="5" />
        <ButtonCalc txt="6" />
        <ButtonCalc txt="-" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc txt="1" />
        <ButtonCalc txt="2" />
        <ButtonCalc txt="3" />
        <ButtonCalc txt="+" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc txt="0" big />
        <ButtonCalc txt="." />
        <ButtonCalc txt="+" color="#FF9427" />
      </View>
    </View>
  );
};
