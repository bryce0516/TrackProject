import React, {useState} from 'react'
import { Text, Button, Input } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'
import Spacer from './Spacer'
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input 
        label='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Input 
        secureTextEntry={true}
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? <Text style={styles.errorMessage }>{errorMessage}</Text> : null}
      <Button 
        title={submitButtonText} 
        onPress={() => onSubmit({email, password})}
      />
    </>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom:250
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft:15,
    marginBottom:15
  },
})
export default AuthForm