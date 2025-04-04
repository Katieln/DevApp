import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Register from '../screens/Register'
import Login from '../screens/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
     
    </Stack.Navigator>
  )
}

export default AuthStackNavigator

const styles = StyleSheet.create({})

//   <stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}}/>