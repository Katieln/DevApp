import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { color, colors } from '../global/color';

import HomeStackNavigator from './HomeStackNavigator';
import CartStackNavigator from './CartStackNavigator';
import OrderStackNavigator from './OrderStackNavigator';

import Header from '../components/Header';

import CartTemp from '../screens/CartTemp';
import OrderTemp from '../screens/OrdersTemp';

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route})=>({
        tabBar: ()=> {
          return <Header route={route} />
        }, 
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="Ecomerce"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="store"
                  size={24}
                  color={focused ? "black" : color.blue5}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome6
                  name="cart-shopping"
                  size={24}
                  color={focused ? "black" : color.blue5}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen 
      name="Orders" 
      component={OrderStackNavigator} 
              options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <FontAwesome5
                  name="receipt"
                  size={24}
                  color={focused ? "black" : color.blue5}
                />
              </View>
            );
          }
        }}  
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: color.blue2,
    shadowColor: "black",
    elevation: 4,
    borderRadius: 15,
    height: 60,
  },
});