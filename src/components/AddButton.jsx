import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { color } from "../global/color";



const AddButton = ({
    title = "",
    onPress = () => {},
  }) => {
    return (
      <Pressable
        style={{ ...styles.button, backgroundColor: color }}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
  };
  

export default AddButton;

const styles = StyleSheet.create({
  button: {
    width: "80%",
    borderWidth: 1,
    backgroundColor: color.blue4,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  text: {
    fontFamily: "Josefin",
    fontSize: 18,
    color: color.blue3,
  },
});