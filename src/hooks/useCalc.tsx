import {useRef, useState} from 'react';

enum Operators {
  add,
  sub,
  mult,
  div,
}

export const useCalc = () => {
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

  const calc = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOp.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.sub:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.mult:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.div:
        setNumber(`${num2 / num1}`);
        break;
    }
    setPrevNumber('0');
  };

  return {
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
  };
};
