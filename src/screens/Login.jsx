import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import InputForm from '../components/InputForm';
import SubmitButton from '../components/SubmitButton';
import { useSignInMutation } from '../services/AuthService';
import { setUser } from '../features/user/UserSlice';
import { color } from '../global/color';
import { useDB } from '../hooks/useDB';

const Login = ({navigation}) => {
    const dispatch = useDispatch();
    const [triggerSignIn, result] = useSignInMutation()

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginError, setLoginError] = useState(null);

    const {insertSession} = useDB();

    useEffect(() => {
        if (result?.isSuccess && result.data) {
          (async () => {
            try {
              const response = await insertSession({
                email: result.data.email,
                localId: result.data.localId,
                token: result.data.idToken
              });
              dispatch(
                setUser({
                  email: result.data.email,
                  idToken: result.data.idToken,
                  localId: result.data.localId,
                })
              );
              setLoginError(null); // limpia error si fue exitoso
            } catch (err) {
              setLoginError("Error al guardar sesión");
            }
          })();
        } else if (result?.isError) {
          setLoginError("Email o contraseña incorrectos"); // o lo que venga del backend
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
          {loginError && (
  <Text style={styles.errorText}>{loginError}</Text>
)}
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
      errorText: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
        paddingHorizontal: 10,
      },
      
})