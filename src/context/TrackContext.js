import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const fetchTracks = dispatch => () => {

}

const createTrack = dispatch => async (name, locations) => {
  const response = trackerApi.post('/tracks', { name, locations })
}

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
)