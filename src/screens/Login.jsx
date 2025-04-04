import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import InputForm from '../components/InputForm';
import SubmitButton from '../components/SubmitButton';
import { useSignInMutation } from '../services/AuthService';
import { setUser } from '../features/user/UserSlice';
import { color } from '../global/color';

const Login = ({navigation}) => {
    const dispatch = useDispatch();
    const [triggerSignIn, result] = useSignInMutation()

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    useEffect(()=> {
        console.log("result", result); 
        if(result.isSuccess){
          dispatch(
            setUser({
              email: result.data.email,
              token: result.data.idToken,
              localId: result.data.localId
            })
          )
        }
    }, [result])

    useEffect(() => {
        if (result.isError) {
          console.log("ERROR DE LOGIN:", result.error);
          alert("Email o contraseña incorrectos");
        }
      }, [result]);
      


    const onSubmit = () => {
    triggerSignIn({ email, password });
    };

    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>Login to start</Text>
          <InputForm label={"email"} onChange={setEmail} error={""} />
          <InputForm
            label={"password"}
            onChange={setPassword}
            error={""}
            isSecure={true}
          />
          <SubmitButton onPress={onSubmit} title="Ingresar" />
          <Text style={styles.sub}>No tienes cuenta?</Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.subLink}>Registrate como nuevo usuario!</Text>
          </Pressable>
        </View>
      </View>
    );
}

export default Login

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
      container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.blue6,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
      },
      title: {
        fontSize: 22,
        fontFamily: "Josefin",
      },
      sub: {
        fontSize: 14,
        color: "black",
      },
      subLink: {
        fontSize: 14,
        color: "blue",
      },
})