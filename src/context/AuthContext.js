import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { AsyncStorage } from 'react-native'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return { errorMessage: '', token: action.payload }
    case 'SIGNOUT':
      return { ...state, token: null }
    case 'ADD_ERROR':
      return { ...state, errorMessage: action.payload }
    case 'CLEAR_ERROR':
      return { ...state, errorMessage: '' }
    default:
      return state
  }
}

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'SIGNIN', payload: token })
    navigate('TrackList')
  } else {
    navigate('loginFlow')
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'CLEAR_ERROR' })
}

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'SIGNIN', payload: response.data.token })
    navigate('TrackList')
  } catch (err) {
    dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with signup!' })
  }
}

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'SIGNIN', payload: response.data.token })
    navigate('TrackList')
  } catch (err) {
    dispatch({ type: "ADD_ERROR", payload: 'Your email and/or password do not match!' })
  }
}

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'SIGNOUT' })
  navigate('loginFlow')
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
)