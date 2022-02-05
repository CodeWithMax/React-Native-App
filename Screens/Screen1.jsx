import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const Screen1 = ({navigation}) => {
  return (
    <View style ={ { backgroundColor:"gray"}}>
      <Text>Screen 1</Text>
      <Button   
        color = "white"
        style = {{backgroundColor: "blue" , margin:30, borderRadius:30}}
        onPress  =  { ()=> navigation.navigate("Home")}
        // onLongPress =  {()=> console.log("long pressed")}
        >
            Home
        </Button>
    </View>
  );
};

export default Screen1;
//short form is rnfe 
 
