import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import style from '../global/style'

const Card = ({children}) => {
  return (
    <View style={style.card}>
      {children}
    </View>
  )
}

export default Card

