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
const TrackCreateScreen = ({isFocused}) => {
  const { state, addLocation } = useContext(LocationContext)
  const callback = useCallback(location => {
    addLocation(location, state.recording)
  }, [state.recording])
  const [err] = useLocation(isFocused,callback)

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

