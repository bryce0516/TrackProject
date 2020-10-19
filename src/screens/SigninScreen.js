import React, {useContext,useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = ({navigation}) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur',clearErrorMessage);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm 
        headerText="Sign in to Your Account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      /> 
      <NavLink 
        content="Don't have an Account? Sign up instead"
        routeName="Signup"
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

export default SigninScreen

