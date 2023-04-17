import { React } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function Student(props) {
  return (
    <View>
      <Text>Hi, My name is {props.name}. I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style = {{
        flex:1, 
        justifyContent: 'Center', 
        alignItems: 'Center'
    }}> 
      <Text>Welcome to CIS340 </Text>
      <Student name = "Abby Gerber" />
      <Student name = "Ashley Slater" />
      <Student name = "Sierra Belezos" />
      <Student name = "Taylor Lee" />
      </View>
  )

}
