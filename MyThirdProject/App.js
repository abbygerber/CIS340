import React, {useState} from 'react';
import { Text, Button, View, ProgressViewIOSComponent } from 'react-native';

function TV(props) {
  const[isOff, setIsOff] = useState(true); 

  return (
  <View>
    <Text>
    {"\n\n\n\n"}
      This is {props.name} TV, and it is {isOff ? "OFF" : "TURNED ME ON"}
    </Text>
    <Button
    onPress = {() => {
        setIsOff(false); 
    }}
    disabled = {!isOff}
    title = {isOff ? "TURN ME ON" : "Thank you!"}
    />

    
  </View>

  ); 
}

export default function MultiTVs(){
  return(
    <View> 
      <TV name = "LG" />
      <TV name = "Sony" />
      </View>
  )

  }
