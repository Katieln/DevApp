import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import style from '../global/style'


const Header = ({title="Hola!"}) => {
  return (
    <View style={style.containerHeader}>
      <Text>{title}</Text>
    </View>
  )
}

export default Header



// //     container: {
//     marginTop: 40,
//     height: 100,
//     width:'100%',
//     backgroundColor: color.lila,
//     justifyContent: 'center',
//     alignItems: 'center'
// }//