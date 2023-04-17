import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, view } from 'react-native';

export default function MyApp() {
  return (
    <View>
      <Text>
        {"\n\n\n\n\n\n"}
        Hello! I am a student in CIS340 {"\n"}
      </Text>
      <TextInput 
      style = {{
        height: 40, 
        borderColor: "gray", 
        borderWidth: 1
      }}
      defualtValue = "Enter Your Input" />

      </View>
    

    
  );
}

