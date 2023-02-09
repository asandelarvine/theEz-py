// App.js
import "react-native-gesture-handler"; //this should be the first import in your code
import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import ContactScreen from './components/ContactScreen';
// import Login from './screens/Login';
// import Signup from './screens/Signup';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
  <Drawer.Navigator initialRouteName="Home"
  screenOptions={{ drawerActiveTintColor: "#e91e63" }}
  >
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{ //change the configuration of our screen
        drawerIcon: ({ color, number, focused }) => { //set the icon:
          return ( //the icon will be an image
            <Image
              source={require("./assets/home-ezana.png")}
              style={{ height: 30, width: 30 }}
            />
          );
        },
      }}
    />
    <Drawer.Screen
      name="About"
      component={AboutScreen}
      options={{
        drawerIcon: ({ color, number, focused }) => { //set the icon for all screens
          return (
            <Image
              source={require("./assets/about-ezana.png")}
              style={{ height: 30, width: 30 }}
            />
          );
        },
      }}
    />
    <Drawer.Screen
      name="Contact"
      component={ContactScreen}
      options={{
        drawerIcon: ({ color, number, focused }) => {
          return (
            <Image
              source={require("./assets/contacts-ezana.png")}
              style={{ height: 30, width: 30 }}
            />
          );
        },
      }}
    />
  </Drawer.Navigator>
  {/* <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
     

    </Stack.Navigator>
     */}
</NavigationContainer>

  );
}