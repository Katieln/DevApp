import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import style from '../global/style'
import CategoryItem from '../components/CategoryItem'
import Counter from '../components/Counter'
import { useGetCategoriesQuery } from '../services/ShopService'


const Home = ({ navigation}) => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery()
  return (
    <View style={style.containerList}>
      <Counter/>
      <FlatList 
      
        data={categories}
        keyExtractor={element => element}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=> <CategoryItem category= {item} 
        navigation={navigation}/>}
        
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})