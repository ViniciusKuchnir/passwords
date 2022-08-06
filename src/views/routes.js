import React from "react";
import {Feather} from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Main from "./Main";
import List from "./List";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Main"
        screenOptions={{
            tabBarActiveTintColor: "#232323",
            tabBarInactiveTintColor: "#FFF",
            tabBarStyle:{
                backgroundColor: "#FFAC33",
                borderTopWidth: 0,
                elevation: 0,
                height: 64,
            }
        }}
      >
        <Tab.Screen
          name="Senha"
          component={Main}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) =>{
                return <Feather name="lock" size={24} color={color} />  
            }
          }}
        />
        <Tab.Screen
          name="Lista"
          component={List}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) =>{
                return <Feather name="list" size={24} color={color} />
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
