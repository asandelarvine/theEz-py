// App.js
import "react-native-gesture-handler"; //this should be the first import in your code
import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// import components
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import SettingsScreen from './components/SettingsScreen';
// import Login from './screens/Login';
// import Signup from './screens/Signup';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();




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
      name="Profile"
      component={ProfileScreen}
      options={{
        drawerIcon: ({ color, number, focused }) => { //set the icon for all screens
          return (
            <Image
              source={require("./assets/profile.png")}
              style={{ height: 30, width: 30 }}
            />
          );
        },
      }}
    />
    <Drawer.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        drawerIcon: ({ color, number, focused }) => {
          return (
            <Image
              source={require("./assets/global-settings.png")}
              style={{ height: 30, width: 30 }}
            />
          );
        },
      }}
    />
  </Drawer.Navigator>
  
    
</NavigationContainer>

  );
}
