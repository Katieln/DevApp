import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import style from "../global/style";
import { color } from "../global/color";
import { useGetProductByIdQuery } from "../services/ShopService";

const Detail = ({route, navigation}) => {


  const [orientation, setHorientation] = useState('portrait');
  const { width, height } = useWindowDimensions();

  const {productId: idSelected} = route.params

 const { data: product, error, isLoading } = useGetProductByIdQuery(idSelected);

  useEffect(() => {
    if(width > height) setHorientation("landscape")
    else setHorientation("portrait")
    }, [width, height]);



  // useEffect(()=>{
  //   const productSelected = allProducts.find(
  //     (product) => product.id === idSelected
  //   );
  //   setProduct(productSelected);
  // }, [idSelected])

  return (
    <View style={style.detail}>
      <Button onPress={() => navigation.goBack()} title="Go back" />
      {product ? (
        <View
          style={
            orientation === "portrait"
              ? styles.mainContainer
              : styles.mainContainerLandscape
          }
        >
          <Image
            source={{ uri: product.images[0] }}
            resizeMode="cover"
            style={orientation === 'portrait' ? styles.image : styles.imageLandscape}
          />
          <View style={orientation === 'portrait' ? styles.textContainer : styles.textContainerLandscape}> 
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
          </View>
        </View>
      ) : null} 
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  image: {
    height: 400,
    width: "100%",
  },
  imageLandscape: {

    width: "45%",
    height: 200,
  },
  textContainer: {
    marginTop: 20,
    flexDirection: "column",
    backgroundColor: color.blue6,
    padding: 10,
  },

  textContainerLandscape: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: 10,
  },
  price: {
    textAlign: "right",
    width: "100%",
  },
});