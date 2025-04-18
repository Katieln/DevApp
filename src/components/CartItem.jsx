import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "../global/color";
import { Entypo } from "@expo/vector-icons";

const CartItem = ({ cartItem }) => {
  return (
    <View style={styles.card} onPress={() => {}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {cartItem.title} ({cartItem.quantity})
        </Text>
        <Text style={styles.text2}>{cartItem.brand}</Text>
        <Text style={styles.text2}>${cartItem.price}</Text>
      </View>
      <Entypo name="trash" size={30} color="black" />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: color.blue4,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {

    color: color.blue3,
  },
  text2: {

    color: color.white,
  },
});