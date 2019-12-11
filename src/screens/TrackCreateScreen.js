import '../_mockLocation'
import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'

const TrackCreateScreen = () => {

  const { addLocation } = useContext(LocationContext)

  const [error, setError] = useState(null)

  const startWatching = async () => {
    try {
      await requestPermissionsAsync()
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      }, (location) => {
        addLocation(location)
      })
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    startWatching()
  }, [])

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text>TrackCreateScreen</Text>
      <Text>{error ? 'Please enable location services' : null}</Text>
      <Map />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen