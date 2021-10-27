import { StyleSheet } from "react-native"

export default StyleSheet.create({
    text_big: {
      fontWeight: 'bold',
      fontSize: 23,
      alignItems: "center",
      color: "white",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    gambar: {
      width: 300,
      height: 200,
      resizeMode: "contain",
      marginHorizontal: 50,
    },
    buatHeader: {
      height: 60,
      backgroundColor: "blue",
      justifyContent: "center",
      alignItems: "center",
    },
    textContent:{
      fontFamily: "poppins",
      fontSize: 28,
      color: "black",
      textAlign: "center",
  
    },
    footer: {
      height:40,
      backgroundColor: 'gray',
    },
    button: {
      marginBottom: 30,
      alignItems: 'center',
      backgroundColor: '#2196F3',
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white',
      fontSize: 20,
    },
    gambarMovie: {
      width: 400,
      height:490,
      resizeMode:'contain',
    },
    headerWoLogo: {
      flex:1,
      width:'auto',
      flexDirection: 'row',
      marginLeft:-15,
      paddingLeft: 0,
    },
    kataKunci: {
      width: '66%', 
      height: 40, 
      backgroundColor: 'white', 
      marginTop: 5, 
      marginLeft:10, 
      marginRight:10,
    },
    gambarsisip: {
      width: 50,
      height: 50,
      
    }

  })