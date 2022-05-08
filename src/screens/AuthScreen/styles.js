import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants/theme';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCard: {
    height: height / 2,
    width: width * 0.7,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    flex: 1,
  },
  label: {
    fontSize: 13,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  linkText: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  linkButton: {
    backgroundColor: '#006494',
    borderRadius: 20,
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
  linkButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});
