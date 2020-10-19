import { NavigationActions } from '@react-navigation/compat'
import React from 'react'

export const navigationRef = React.createRef();

export function navigate(name, params) {
  // navigationRef.current.dispatch(
  //   NavigationActions.navigate({
  //     name,
  //     params,
  //   })
  // )
  // navigationRef.current.navigate(name,params)
  navigationRef.current && navigationRef.current.navigate(name, params);
}