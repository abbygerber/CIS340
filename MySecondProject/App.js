import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, view } from 'react-native';

function MyApp() {
  return (
    <View>
      <Text>
        {"\n\n\n\n\n\n"}
        Hello! I am a student in CIS340 {"\n"}
      </Text>
      </View>
    

    
  );
}

export default function MultiComp(){
  return(
    <View style = {{
      flex: 1, 
      justifyContent: 'Center', 
      alignItems: 'Center'

    }}>
      <Text>{"\n\n\n\n\n\\n"} Welcome to my class!</Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />
    </View>
  )

}

