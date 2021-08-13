import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

enum Operators {
  add,
  sub,
  mult,
  div,
}

export const CalculatorScreen = () => {
  const [prevNumber, setPrevNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOp = useRef<Operators>();

  const clear = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const buildNumber = (numbetTxt: string) => {
    if (number.includes('.') && numbetTxt === '.') return;
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numbetTxt === '.') {
        setNumber(number + numbetTxt);
      } else if (numbetTxt === '0' && number.includes('.')) {
        setNumber(number + numbetTxt);
      } else if (numbetTxt !== '0' && !number.includes('.')) {
        setNumber(numbetTxt);
      } else if (numbetTxt === '0' && number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numbetTxt);
      }
    } else {
      setNumber(number + numbetTxt);
    }
  };

  const del = () => {
    let negative = '';
    let tmpNumber = number;
    if (number.includes('-')) {
      negative = '-';
      tmpNumber = number.substr(1);
    }

    if (tmpNumber.length > 1) {
      setNumber(negative + tmpNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const changeNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const btnDivite = () => {
    changeNumber();
    lastOp.current = Operators.div;
  };
  const btnMult = () => {
    changeNumber();
    lastOp.current = Operators.mult;
  };
  const btnSub = () => {
    changeNumber();
    lastOp.current = Operators.sub;
  };
  const btnAdd = () => {
    changeNumber();
    lastOp.current = Operators.add;
  };

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
        <ButtonCalc txt="=" color="#FF9427" acction={clear} />
      </View>
    </View>
  );
};
