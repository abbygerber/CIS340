import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker' // import 


export default function App() {

  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync(); 

    if(permissionResult.granted === false){

      alert("Permission is Required!"); 
      return; 
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync(); 
    console.log(pickerResult); 
  }

  //end of the code

  return (
    <View style={styles.container}>
        <Image source = {{uri: 'https://github.com/AbdunabiRamadan/CIS340-Images'}}
                style = {styles.logo} />

        <Text style = {styles.insts}> 
          Press the button below to select an image on your phone! 

        </Text>

      <TouchableOpacity style = {styles.button} onPress = {openImagePickerAsync}>

        <Text> Touch Me </Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#ADD8E6" 
  },

  button: {
    
    backgroundColor: "#FFB6C1", 
    padding: 20, 
    borderRadius: 5

  },

  insts: {
    fontSize: 18, 
    color: "#87CEFA", 
    marginHorizontal: 15, 
    marginBottom: 10,

  },

  logo: {
      width: 310, 
      height: 300, 
      marginBottom: 20
  },

  buttonText:{
    fontSize: 20,
    color: "#fff"
  }

});

