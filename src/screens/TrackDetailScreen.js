import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'
import Spacer from '../components/Spacer'

const TrackDetailScreen = ({ navigation }) => {

  const { state } = useContext(TrackContext)

  const _id = navigation.getParam('_id')

  const track = state.find(t => t._id === _id)

  const initialCoords = track.locations[0].coords

  return (
    <>
      <Spacer>
        <Text h4 style={styles.header}>{track.name}</Text>
      </Spacer>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.001,
          latitudeDelta: 0.001,
          ...initialCoords
        }}
      >
        <Polyline strokeWidth={3} strokeColor={"rgba(0, 204, 102, 0.4)"} coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>

    </>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300
  },
  header: {
    textAlign: 'center',

  }
})

export default TrackDetailScreen