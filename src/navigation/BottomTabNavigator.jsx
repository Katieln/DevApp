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
import { useSelector } from 'react-redux';
import MyProfileStackNavigator from './MyProfileStackNavigator';



const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  const { user } = useSelector((state) => state.auth.value);
  return (
    <Tab.Navigator 
      screenOptions={({route})=>({
        tabBar: ()=> {
          return <Header route={route} />
        }, 
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
      })}
    >
      
      <Tab.Screen 
        name="My Profile"
        component={MyProfileStackNavigator}
        options={{
          headerStyle: {
            backgroundColor: color.blue5, 
          },
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Text style={styles.leftText}>Profile</Text>
              <Text style={styles.rightText}>{user}</Text>
            </View>
          ),
          tabBarIcon: ({focused})=> {
            return (
              <View>
                <Ionicons
                  name="person-circle"
                  size={24}
                  color={focused ? "black" : color.white}
                />
              </View>
            );
          }
        }}
      />

      <Tab.Screen
        name="Ecommerce"
        component={HomeStackNavigator}
        options={{
          headerStyle: {
            backgroundColor: color.blue5, 
          },
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Text style={styles.leftText}>Ecommerce</Text>
              <Text style={styles.rightText}>{user}</Text>
            </View>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="store"
                  size={24}
                  color={focused ? "black" : color.blue3}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name= "Cart"
        component={CartStackNavigator}
        options={{
          headerStyle: {
            backgroundColor: color.blue5, 
          },
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Text style={styles.leftText}>Cart</Text>
              <Text style={styles.rightText}>{user}</Text>
            </View>
          ),
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
                headerStyle: {
                  backgroundColor: color.blue5, 
                },
                headerTitle: () => (
                  <View style={styles.headerContainer}>
                    <Text style={styles.leftText}>Orders</Text>
                    <Text style={styles.rightText}>{user}</Text>
                  </View>
                ),
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

  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    
  },
  leftText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  rightText: {
    fontSize: 16,
    color: 'black',
  },
});