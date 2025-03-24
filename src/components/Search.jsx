import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { color } from '../global/color';
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
    const [keyword, setKeyword] = useState("");
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={keyword}
          onChangeText={setKeyword}
        />
        <Pressable onPress={() => onSearch(keyword)}>
          <FontAwesome name="search" size={24} color="white" />
        </Pressable>
        <Pressable onPress={() => setKeyword("")}>
          <FontAwesome5 name="eraser" size={24} color="white" />
        </Pressable>
        <Pressable onPress={goBack}>
          <AntDesign name="back" size={24} color="white" />
        </Pressable>
        {error ? <Text>{error}</Text> : null}
      </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 18,
      margin: 10,
    },
    input: {
      width: 250,
      padding: 8,
      margin: 10,
      fontSize: 18,
      backgroundColor: <color className="blue2"></color>,
      color: color.blue3,
      borderRadius: 10,
    },
  });