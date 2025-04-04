import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/ShopService";


const Cart = () => {


    const{items: CartData=[], total} = useSelector((state) => state.cart.value);
    const { user } = useSelector((state) => state.auth.value); //
    const [triggerPostOrder, result] = usePostOrderMutation()

  
    const onConfirmOrder = () => {
      if (!user) {
        alert("Debes iniciar sesión para hacer un pedido.");
        return;
      }
  
      triggerPostOrder({
        items: CartData,
        user,    
        total,
      });
    };
 
  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        keyExtractor={(k) => k.id}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />;
        }}
      />
      <View style={styles.totalContainer}>
        <Pressable style={styles.button} onPress={onConfirmOrder}>
          <Text style={styles.buttonText}>Confirmar Orden </Text>
        </Pressable>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 120,
  },
  totalContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007BFF", // Color azul
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#0056b3",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF", // Texto en blanco
    fontSize: 16,
    fontWeight: "bold",
  },
});