import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({category, navigation}) => {
  return (
    <Card>
        <Pressable onPress={() => navigation.navigate('ItemListCategory', {category})}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 15,
}
})