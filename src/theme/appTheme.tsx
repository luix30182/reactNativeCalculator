import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  base: {
    backgroundColor: 'black',
    flex: 1,
  },
  calculatorContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  smallResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  txtButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '300',
    padding: 10,
    fontSize: 30,
  },
});
