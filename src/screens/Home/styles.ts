import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213d',
    padding: 24,

  },
  eventName: {
    color: '#faf9f9',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#e5e5e5',
    fontSize: 16,
    paddingBottom: 16,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#e9edc9',
    borderRadius: 5,
    color: "#000000",
    padding: 16,
    fontSize: 16,
    marginRight: 5,

  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: "center",
    justifyContent: 'center'
  },

  form:{
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20
  },
  listEmptyText:{
    color:'#fff',
    fontSize: 14,
    textAlign: 'center'


  }

})
