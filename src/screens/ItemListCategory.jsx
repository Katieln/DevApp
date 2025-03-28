import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

import ProductItem from '../components/ProductItem'
import Search from '../components/Search'
import { color } from '../global/color'
import { useGetProductsByCategoryQuery } from '../services/ShopService'


const ItemListCategory = ({
    route,
    navigation
  }) => {
    const [keyWord, setKeyword] = useState("");
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [error, setError] = useState("");
  
    const {category: categorySelected} = route.params;

    const { data: productsFetched, error: errorProducts, isLoading } = useGetProductsByCategoryQuery(categorySelected)
  
    useEffect(() => {
      regex = /\d/;
      const hasDigit = regex.test(keyWord);

      if (hasDigit) {
        setError("No se permiten números en la búsqueda");
        return;
      }
  
      if(!isLoading){
      // Product filtered by name
      const productsFilter = productsFetched.filter((product) =>
        product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
      );
      setProductsFiltered(productsFilter);
      setError("");
    }
    }, [keyWord, categorySelected, productsFetched, isLoading]);
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