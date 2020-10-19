import { CommonActions } from '@react-navigation/native'
import React from 'react'

let navigationRef

export const setNavigator = (nav) => {
  navigationRef = nav
  console.log('navigaref',navigationRef)
}


export const navigate = (routeName, params) => {
  navigationRef.dispatch(
    CommonActions.navigate({
      routeName,
      params
    })
  )
}


