import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../features/shop/ShopSlice'

const CategoryItem = ({category, navigation}) => {
  
  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setCategorySelected(category));
    navigation.navigate("ItemListCategory", { category });
  }

  return (
    <Card>
        <Pressable onPress={handleNavigate}>
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