import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CURRENT_LOCATION':
      return { ...state, currentLocation: action.payload }
    default:
      return state
  }
}

const startRecording = dispatch => () => { }

const stopRecording = dispatch => () => { }

const addLocation = dispatch => (location) => {
  dispatch({ type: 'ADD_CURRENT_LOCATION', payload: location })
}

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
)