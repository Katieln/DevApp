import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './BottomTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { useDB } from '../hooks/useDB';


const Stack = createNativeStackNavigator();

const Navigator = () => {

  const dispatch = useDispatch()
  const {user} = useSelector(state => state.auth.value)
  const {getSession} = useDB()

  // obtener la session
useEffect(()=>{
  (async ()=> {
    try{
      const response = await getSession()
      if(response) {
        const user = response;
        dispatch(
          setUser({
            email: user.email,
            localId: user.localId,
            idToken: user.token
        }))
      }
    } catch (err){
      console.log(err)
    }
  })()
},)

  return (
    <NavigationContainer>
      {user? <BottomTabNavigator />: <AuthStackNavigator/>}
    </NavigationContainer>
  )
}

export default Navigator

