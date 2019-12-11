import '../_mockLocation'
import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = ({ isFocused }) => {

  const { addLocation } = useContext(LocationContext)
  const [error] = useLocation(isFocused, addLocation)

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text>TrackCreateScreen</Text>
      <Text>{error ? 'Please enable location services' : null}</Text>
      <Map />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)