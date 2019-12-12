// import '../_mockLocation'
import React, { useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import { FontAwesome } from '@expo/vector-icons'
import Spacer from '../components/Spacer'

const TrackCreateScreen = ({ isFocused }) => {

  const { addLocation, state: { recording } } = useContext(LocationContext)
  const callback = useCallback(location => {
    addLocation(location, recording)
  }, [recording])
  const [error] = useLocation(isFocused || recording, callback)

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer>
        <Text h4 style={styles.header}>New Track</Text>
      </Spacer>
      <Text>{error ? 'Please enable location services' : null}</Text>
      <Map />
      <TrackForm />
    </SafeAreaView>
  )
}

TrackCreateScreen.navigationOptions = {
  title: 'New Track',
  tabBarIcon: <FontAwesome name="plus" size={20} />
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center'
  }
})

export default withNavigationFocus(TrackCreateScreen)