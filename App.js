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
import { Provider as LocationProvider} from './src/context/LocationContext'
import { Provider as TrackProvider} from './src/context/TrackContext'
import { setNavigator } from './src/navigationRef';
import { navigationRef } from './src/RootNavigation'
import { withNavigation, createSwitchNavigator, createCompatNavigatorFactory } from '@react-navigation/compat';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import {FontAwesome} from 'react-native-vector-icons'
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
  },
  {
    navigationOptions:{
      title: 'Tracks',
      tabBarIcon:() => (<FontAwesome name="list" size={20} />)
    }
  } 
)
const TrackCreateFlow = createCompatNavigatorFactory(createStackNavigator)(
  {
    TrackCreate: { screen:TrackCreateScreen}
  },
  {
    navigationOptions:{
      title: 'Add Track',
      tabBarIcon:() => (<FontAwesome name="plus" size={20} />)
    }
  }
)
const AccountFlow = createCompatNavigatorFactory(createStackNavigator)(
  {
    Account: {screen:AccountScreen}
  },
  {
    navigationOptions:{
      title: 'Account',
      tabBarIcon:() => (<FontAwesome name="gear" size={20} />)
    }
  }
)

const mainFlow = createCompatNavigatorFactory(createBottomTabNavigator)(
  {
    trackListFlow,
    TrackCreateFlow,
    AccountFlow
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
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <NavigationContainer ref={navigationRef} >
            <App />
          </NavigationContainer>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
}