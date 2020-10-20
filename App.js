import React, { useState,forwardRef } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import {Provider as AuthProvider} from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef';
import { navigationRef } from './src/RootNavigation'
import { withNavigation, createSwitchNavigator, createCompatNavigatorFactory } from '@react-navigation/compat';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import { Provider as LocationProvider} from './src/context/LocationContext'

const loginFlow = createCompatNavigatorFactory(createStackNavigator)(
  {
    Signup: { screen: SignupScreen },
    Signin: { screen: SigninScreen },
  }
);

const trackListFlow = createCompatNavigatorFactory(createStackNavigator)(
  {
    TrackList:{ screen: TrackListScreen },
    TrackDetail:{ screen: TrackDetailScreen },
  }
)

const mainFlow = createCompatNavigatorFactory(createBottomTabNavigator)(
  {
    tracklist:trackListFlow,
    TrackCreate: {screen:TrackCreateScreen},
    Account: {screen:AccountScreen}
  }
)

const App = createSwitchNavigator(
  {
    ResolveAuth: {screen: ResolveAuthScreen},
    login:loginFlow,
    main: mainFlow
  }
)

export default () => {

  return (
    <LocationProvider>
      <AuthProvider>
        <NavigationContainer ref={navigationRef} >
          <App />
        </NavigationContainer>
      </AuthProvider>
    </LocationProvider>
  )
}