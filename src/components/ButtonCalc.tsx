import React from 'react';
import {View, Text, ColorValue, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  txt: string;
  color?: ColorValue;
  big?: boolean;
  acction: (acction: string) => void;
}

export const ButtonCalc = ({
  txt,
  color = '#2D2D2D',
  big = false,
  acction,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => acction(txt)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: big ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.txtButton,
            color:
              color.toString().toLocaleUpperCase() === '#9B9B9B'
                ? 'black'
                : 'white',
          }}>
          {txt}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
