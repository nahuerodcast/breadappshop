import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 29,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    width: '100%',
    height: 150,
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    borderColor: 'gray',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
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
  button: {
    marginTop: 10,
    color: 'white',
    backgroundColor: '#E8F1F2',
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  orderButton: {
    marginTop: 20,
    color: 'white',
    backgroundColor: '#247BA0',
    borderRadius: 15,
    paddingHorizontal: 10,
  },
});
