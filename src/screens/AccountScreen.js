import React, {useContext} from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext'
const AccountScreen = () => {
  const { signout} = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top:'always'}}>
      <Text style={{ fontSize: 48}}>AccountScreen</Text>
      <Button title="Sign Out" onPress={signout}/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom: 250
  },
})

export default AccountScreen

