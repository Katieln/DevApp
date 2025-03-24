import { Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import style from '../global/style'
import Card from './Card'
import { color } from '../global/color';


const ProductItem = ({
    product,
    navigation
  }) => {
  
    return (
      <Card style={styles.additionalStylesCard}>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate('Detail', {productId: product.id})}
        >
          <Text style={styles.textCategory}>{product.title}</Text>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{ uri: product.images[0] }}
          />
        </Pressable>
      </Card>
    );
  };
  
  export default ProductItem;
  
  const styles = StyleSheet.create({
    image: {
      height: 120,
      width: 100,
      borderRadius: 8,
    },
    additionalStylesCard: {
      height: 120,
      width: 300,
      margin: 10,
    },
    textCategory: {
      color: color.white,
      width: "70%",
    },
    pressable: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 10,
    },
  });