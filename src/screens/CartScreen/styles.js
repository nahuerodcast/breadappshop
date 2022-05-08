import {StyleSheet} from 'react-native';
import {colors} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  list: {
    flex: 0.85,
  },
  footer: {
    flex: 1,
    flexGrow: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
  },
  total: {
    fontSize: 20,
    padding: 8,
    color: '#212121',
  },
  totalPrice: {
    fontSize: 18,
    color: colors.primaryColor,
  },
  button: {
    backgroundColor: '#006494',
    borderRadius: 10,
    margin: 5,
    marginHorizontal: 15,
    borderColor: 'gray',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  desc: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
