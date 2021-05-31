import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Welcome from './pages/welcome';
import Home from './pages/Home';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function routes() {

    return (
        <NavigationContainer >
            <Tab.Navigator initialRouteName="Welcome">
                <Tab.Screen name="Welcome" component={Welcome} />
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Cadastro" component={Cadastro} />
                <Tab.Screen name="Home" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default routes;