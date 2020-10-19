import React, {useEffect, useState} from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { requestPermissionsAsync} from 'expo-location'

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  
  const startWatching = async() => {
    try {
      await requestPermissionsAsync();
      
    } catch (e) {
      setErr(e);
    }
  }

  useEffect (() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h3>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>Please enable location services</Text>: null}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})

export default TrackCreateScreen

