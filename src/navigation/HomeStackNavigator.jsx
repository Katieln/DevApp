import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ItemListCategory from '../screens/ItemListCategory';
import Detail from '../screens/Detail';
import { color } from '../global/color';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: color.bluebase, // Cambia el color de fondo del header
          },
        }}>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={ItemListCategory} name="ItemListCategory" />
        <Stack.Screen component={Detail} name="Detail" />
      </Stack.Navigator>
  )
}

export default HomeStackNavigator