import { React } from 'react';
import { Text, Image, View } from 'react-native';

export default function MyDog() {

      let pic = {
        uri: 'https://raw.githubusercontent.com/abdunabiRamadan/CIS340/master/images/dog2.png'}; 

  return (
    <View style = {{
      flex:1, 
      justifyContent: 'Center', 
      alignItems: 'Center'
  }} >
      <Image source = {pic}
      style = {{width: 200, height: 200 }}
      />
      <Text> Hello, this is my dog!</Text>
    </View>
  );
}

