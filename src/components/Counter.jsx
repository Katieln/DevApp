import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import { color, colors } from '../global/color'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, incrementByAmount } from "../features/counter/CounterSlice";

const Counter = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  const [inputToAdd, setInputToAdd] = useState(null);
 



  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={()=> dispatch(decrement())} >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.span}>{count}</Text>
        <Pressable style={styles.button} onPress={()=> dispatch(increment())}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <TextInput
          placeholder="Cantidad a aumentar"
          style={styles.spanInput}
          onChangeText={setInputToAdd}
          value={inputToAdd}
        />
        <Pressable
          style={styles.button}
          onPress={() => dispatch(incrementByAmount(Number(inputToAdd)))}
        >
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <Pressable style={styles.button} onPress={()=> dispatch(reset())}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: color.blue3,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: color.blue6,
  },
  span: {
    backgroundColor: color.blue2,
    width: "60%",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    color: color.white,
  },
  spanInput: {
    backgroundColor: color.lila,
    width: "60%",
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    color: color.white,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Josefin",
  },
});