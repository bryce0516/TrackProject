import React, {useEffect, useState, useContext, useCallback} from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location'
// import '../_mockLocation';
import { Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import { withNavigationFocus} from '@react-navigation/compat';
import TrackForm from '../components/TrackForm'
import {FontAwesome} from 'react-native-vector-icons'
const TrackCreateScreen = ({isFocused, navigation}) => {

  const { state: {recording}, addLocation } = useContext(LocationContext)
  const callback = useCallback(location => {
    addLocation(location, recording)
  }, [recording])
  const [err] = useLocation(isFocused || recording,callback)

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h3>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>Please enable location services</Text>: null}
      <TrackForm />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)

