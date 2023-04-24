import React from 'react';
import { Text, View, SectionList } from 'react-native';



export default  StatesApp = () => {
  return (
<View style = {{flex: 1, paddingTop: 22}}>
  <SectionList
    sections = {[{title: 'A', data: ['Alabama', 'Alaska','Arizona', 'Arkansas', '']}


    ]}

    return item = {({item}) => <Text style = {{ padding: 10, fontSize: 20, height: 44, }}> {item.key} </Text> }
    
    />
</View>

    ); //end of return statement
  };



