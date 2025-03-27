import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import ItemListCategory from '../screens/ItemListCategory';
import HomeStackNavigator from './HomeStackNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
    <BottomTabNavigator />
    </NavigationContainer>
  )
}

export default Navigator

