import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from "react-redux";

const Header = ({ route }) => {
  const { user } = useSelector((state) => state.auth.value); 

  return (
    <View style={styles.container}>
      {user && <Text style={styles.userText}>Bienvenido, {user}</Text>} 
      <Text style={styles.title}>{route.name}</Text>
    </View>
  );
};

export default Header



const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  userText: {
    color: "white",
    fontSize: 14,
    position: "absolute",
    left: 20,
    top: 30,
  },
});