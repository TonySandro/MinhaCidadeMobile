import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Welcome from "./pages/welcome";
import Home from "./pages/Home";
import Favorite from "./pages/favorite";
import Config from "./components/PopupConfig/index.js";
import { Context } from "./Context/AuthContext";

import Profile from "./components/Profile/index.js";

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator headerMode="false" initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Tab.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#7C73E6"
      inactiveColor="#6F6F6F"
      barStyle={{ backgroundColor: "#F2F2F2", borderTopColor: "#ff0000" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cards-heart"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Config"
        component={Config}
        options={{
          tabBarLabel: "Config",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <Profile />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function routes() {
  const { user } = useContext(Context);
  return (
    <NavigationContainer>
      {user ? <TabNavigation /> : <StackNavigation />}
    </NavigationContainer>
  );
}
