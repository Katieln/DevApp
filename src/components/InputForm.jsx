import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { color } from "../global/color";

const InputForm = ({ label, onChange, value, error = "", isSecure = false }) => {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.subtitle}>{label}</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          secureTextEntry={isSecure}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    );
  };
  

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  subtitle: {
    width: "90%",
    fontSize: 16,

    color: color.blue3,
  },
  error: {
    paddintTop: 2,
    fontSize: 16,
    color: "red",

  },
  input: {
    width: "90%",
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: color.blue5,
    color: 'white',
    padding: 2,
    fontSize: 14,
  },
});