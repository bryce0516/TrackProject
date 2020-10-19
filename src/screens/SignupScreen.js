import React, {useContext,useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
const SignupScreen = ({navigation}) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur',clearErrorMessage);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm 
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={({email, password}) => {
          signup({email, password})
        }}
      />
      <NavLink 
        content="Already have an account? Sign in instead"
        routeName="Signin"
      />

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom:250
  },
})

export default SignupScreen

