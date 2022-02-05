import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import SafeAreaViewAndroid from "../Components/SafeAreaViewAndroid";

const Main = ({ navigation, title }) => {
  return (
    <View style={{ backgroundColor: "red" }}>
      <Text>title</Text>
      <Button
        color="white"
        style={{ backgroundColor: "blue", margin: 30, borderRadius: 30 }}
        onPress={() => navigation.navigate("Screen1")}
        // onLongPress =  {()=> console.log("long pressed")}
      >
        Screen 1
      </Button>
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <SafeAreaViewAndroid Component={Main} navigation={navigation} title={abc} />
  );
};

export default Home;

//we pass navigation as a element in fat arrow function
