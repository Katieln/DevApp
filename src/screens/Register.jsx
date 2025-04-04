import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { color } from '../global/color'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../services/AuthService'
import { setUser } from '../features/user/UserSlice'

const Register = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMail, setErrorMail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

    const dispatch = useDispatch();

    const [triggerSignUp, result] = useSignUpMutation();

    useEffect(() => {
        if(result.isSuccess) {
            dispatch( setUser({
                email: result.data.email,
                token: result.data.idToken
            })
        )}
    }, [result])

    
  
    const onSubmit = async () => {
        try {
            setErrorMail('');
            setErrorPassword('');
            setErrorConfirmPassword('');
        
            if (!email.includes('@')) {
              setErrorMail('Email inválido');
              return;
            }
        
            if (password.length < 6) {
              setErrorPassword('La contraseña debe tener al menos 6 caracteres');
              return;
            }
        
            if (password !== confirmPassword) {
              setErrorConfirmPassword('Las contraseñas no coinciden');
              return;
            }
        
            const res = await triggerSignUp({ email, password, returnSecureToken: true });
        
            if (res.error) {
              console.log('❌ Error en el registro:', res.error);
              setErrorMail('No se pudo registrar. Email ya en uso u otro error.');
              return;
            }
        
            // Usuario creado correctamente
            dispatch(
              setUser({
                email: res.data.email,
                token: res.data.idToken,
              })
            );
        
            // Limpiar campos
            setEmail('');
            setPassword('');
            setConfirmPassword('');
          } catch (err) {
            console.log('Error inesperado:', err);
          }
    }

    
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>Registro</Text>
          <InputForm 
          label={"email"} 
          onChange={setEmail} 
          error={errorMail} />
          <InputForm
            label={"password"}
            onChange={setPassword}
            error={errorPassword}
            isSecure={true}
          />
          <InputForm
            label={"confirm password"}
            onChange={setConfirmPassword}
            value={confirmPassword}
            error={errorConfirmPassword}
            isSecure={true}
          />
          <SubmitButton onPress={onSubmit} title="Crear Usuario" />
          <Text style={styles.sub}>Ya tienes una cuenta? ingresa a Login!</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.subLink}>Login</Text>
          </Pressable>
        </View>
      </View>
    );
}


export default Register

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
        fontFamily: "Josefin",
        color: "black",
      },
      subLink: {
        fontSize: 14,
        fontFamily: "Josefin",
        color: "blue",
      },
})