import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    color: '#13293D',
    fontSize: 12,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '60%',
  },
  image: {
    width: 100,
    height: 90,
    borderRadius: 12,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchable: {
    width: '100%',
    maxWidth: '100%',
  },
});
