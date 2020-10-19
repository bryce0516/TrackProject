import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../RootNavigation'

const authReducer = (state, action) => {
  switch(action.type){
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signin':
      return {errorMessage:'', token: action.payload};
    case 'signup':
      return {errorMessage:'', token: action.payload};
    case 'clear_error_message':
      return { ...state, errorMessage: ''};
    case 'signout':
      return {token:null, errorMessage: ''};
    default:
      return state;
  }
}

const signup = dispatch => {
  return async ({ email, password }, callback) => {
    try {
      const response = await trackerApi.post('/signup', {email,password})
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({type:'signup', payload: response.data.token})
      navigate('main', {screen:'TrackList'})
    } catch (error){
      dispatch({type: 'add_error', payload:'Something went wrong with sign up'})
      console.log(error.message,'Problem is',error.response.data)
    }

  }
}

const signin = dispatch => {
  return async ({email, password}, callback) => {
    try{
      const response = await trackerApi.post('/signin',{email, password});
      await AsyncStorage.setItem('token',response.data.token)
      dispatch({type:'signin', payload:response.data.token})
      navigate('main', {screen:'TrackList'})
    }
    catch(error){
      dispatch({type:'add_error', payload:'Something went wrong with sign in'})
      console.log(error.message,'Problem is',error.response.data)
    }
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message'});
}

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch ({ type:'signin', payload: token})
    console.log(token)
    navigate('main', {screen:'TrackList'})
  } else {
    navigate('login', {screen:'Signup'})
  }
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('login', {screen:'Signup'})
}


export const {Provider, Context} = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage , tryLocalSignin },
  { token:null, errorMessage:''}
)