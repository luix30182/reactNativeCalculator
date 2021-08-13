import React from 'react';
import {View, Text} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';
import {useCalc} from '../hooks/useCalc';

export const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    clear,
    positiveNegative,
    del,
    btnDivite,
    buildNumber,
    btnMult,
    btnSub,
    btnAdd,
    calc,
  } = useCalc();

  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.smallResult}>{prevNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc txt="C" color="#9B9B9B" acction={clear} />
        <ButtonCalc txt="+/-" color="#9B9B9B" acction={positiveNegative} />
        <ButtonCalc txt="del" color="#9B9B9B" acction={del} />
        <ButtonCalc txt="/" color="#FF9427" acction={btnDivite} />
      </View>
      <View style={styles.row}>
        <ButtonCalc txt="7" acction={buildNumber} />
        <ButtonCalc txt="8" acction={buildNumber} />
        <ButtonCalc txt="9" acction={buildNumber} />
        <ButtonCalc txt="X" color="#FF9427" acction={btnMult} />
      </View>
      <View style={styles.row}>
        <ButtonCalc txt="4" acction={buildNumber} />
        <ButtonCalc txt="5" acction={buildNumber} />
        <ButtonCalc txt="6" acction={buildNumber} />
        <ButtonCalc txt="-" color="#FF9427" acction={btnSub} />
      </View>
      <View style={styles.row}>
        <ButtonCalc txt="1" acction={buildNumber} />
        <ButtonCalc txt="2" acction={buildNumber} />
        <ButtonCalc txt="3" acction={buildNumber} />
        <ButtonCalc txt="+" color="#FF9427" acction={btnAdd} />
      </View>
      <View style={styles.row}>
        <ButtonCalc txt="0" big acction={buildNumber} />
        <ButtonCalc txt="." acction={buildNumber} />
        <ButtonCalc txt="=" color="#FF9427" acction={calc} />
      </View>
    </View>
  );
};
