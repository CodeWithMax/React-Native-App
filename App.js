import {
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
  Button,
  Switch,
} from "react-native";
// import React, { useState } from "react";
import Home from "./Screens/Home";
import Screen1 from "./Screens/Screen1";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  // const [active, setActive] = useState(false);
  // console.log(active);
  return (
    // <View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <SafeAreaView>
          <ScrollView> */}
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{ headerStyle: { backgroundColor: "red" } }}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ headerShown: false }}
        />
        {/* <Screen1> */}
        {/* <Home />
          <Image
            source={require("./assets/icon.png")}
            style={{
              width: 200,
              height: 200,
            }}
          />
          <TextInput
            style={{ backgroundColor: "red", padding: 20, color: "white" }}
          />

          <Button
            title="click me"
            onpress={() => {
              console.log("btn pressed");
            }}
          />

          <Switch value={active} onChange={() => setActive((prev) => !prev)} /> */}
        {/* </Screen1> */}
        {/* </ScrollView>
        </SafeAreaView> */}

        {/* </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
