import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import ItemListCategory from '../screens/ItemListCategory';
import HomeStackNavigator from './HomeStackNavigator';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
    <HomeStackNavigator />
    </NavigationContainer>
  )
}

export default Navigator

