import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
    // height: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 20,
    color: 'white',
  },
  touchable: {
    paddingHorizontal: 20,
    flex: 1,
    borderRadius: 15,
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
    padding: 10,
  },
});
