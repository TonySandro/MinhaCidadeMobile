import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";

import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Welcome from "./pages/welcome";
import Home from "./pages/home";
import Favorite from "./pages/favorite";
import Config from "./components/PopupConfig/index.js";
import { Context } from "./Context/AuthContext";

import Profile from "./components/Profile/index.js";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

function onOpen() {
  console.log("Open");
}

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

const icons = {
  Home: {
    lib: Entypo,
    name: "home",
  },
  Favorite: {
    lib: MaterialIcons,
    name: "favorite",
  },
  Configs: {
    lib: Ionicons,
    name: "settings-sharp",
  },
};

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Perfil") return <Profile />;
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#F2F2F2",
          borderTopColor: "#B8B6B6",
        },
        activeTintColor: "#7C73E6",
        inactiveTintColor: "#6F6F6F",
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: "" }} />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{ title: "" }}
      />
      <Tab.Screen
        name="Configs"
        component={Config}
        options={{
          title: "",
        }}
      />
      <Tab.Screen name="Perfil" component="#" options={{ title: "" }} />
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
