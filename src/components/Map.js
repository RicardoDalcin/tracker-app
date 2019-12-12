import React, { useContext } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {

  const { state: { currentLocation, locations } } = useContext(LocationContext)

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={3}
        strokeColor="rgba(0, 204, 102, 1.0)"
        fillColor="rgba(0, 204, 102, 0.4)"
      />
      <Polyline strokeWidth={3} strokeColor={"rgba(0, 204, 102, 0.4)"} coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

export default Map