import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import products from '../data/products.json'

import ProductItem from '../components/ProductItem'
import style from '../global/style'
import Search from '../components/Search'
import { color } from '../global/color'

const ItemListCategory = ({
    route,
    navigation
  }) => {
    const [keyWord, setKeyword] = useState("");
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [error, setError] = useState("");
  
    const {category: categorySelected} = route.params;
    //console.log(category)
    console.log(categorySelected)
  
    useEffect(() => {
      regex = /\d/;
      const hasDigit = regex.test(keyWord);
      //console.log(hasDigit);
      if (hasDigit) {
        setError("No se permiten números en la búsqueda");
        return;
      }
  
      const productsPrefiltered = products.filter(
        (product) => product.category === categorySelected
      );
      // Product filtered by name
      const productsFilter = productsPrefiltered.filter((product) =>
        product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
      );
      setProductsFiltered(productsFilter);
      setError("");
    }, [keyWord, categorySelected]);
    return (
      <View style={styles.flatListContainer}>
        <Search
          error={error}
          onSearch={setKeyword}
          goBack={() => navigation.goBack()}
        />
        <FlatList
          data={productsFiltered}
          renderItem={({ item }) => <ProductItem 
            product={item} 
            navigation={navigation}
            />}
          keyExtractor={(producto) => producto.id}
        />
      </View>
    );
  };
  
  export default ItemListCategory
  
  const styles = StyleSheet.create({
    flatListContainer: {
      width: "100%",
      backgroundColor: color.blue4,
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    },
  });