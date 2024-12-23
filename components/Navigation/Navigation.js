// Navigation.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import RegisterScreen from "./RegisterScreen";
// import LoginScreen from "./LoginScreen";
// import WelcomeScreen from "./WelcomeScreen";
import HomeScreen from "../Home/HomeScreen";
import LoginScreen from "../Login/LoginScreen";
import RegisterScreen from "../Register/RegisterScreen";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
