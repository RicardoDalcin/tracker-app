import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { AsyncStorage } from 'react-native'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return { errorMessage: '', token: action.payload }
    case 'ADD_ERROR':
      return { ...state, errorMessage: action.payload }
    default:
      return state
  }
}

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'SIGNUP', payload: response.data.token })
    navigate('TrackList')
  } catch (err) {
    dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with signup!' })
  }
}

const signin = (dispatch) => ({ email, password }) => {

}

const signout = (dispatch) => () => {

}

export const { Provider, Context } = createDataContext(authReducer, { signup, signin, signout }, { token: null, errorMessage: '' })