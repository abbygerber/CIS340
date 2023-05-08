import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
        <Image source = {{uri: 'https://github.com/AbdunabiRamadan/CIS340-Images'}}
                style = {styles.logo}
        
        />

      <TouchableOpacity style = {styles.button} onPress = {onTap}>

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

