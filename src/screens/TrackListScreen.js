import React, { useContext } from 'react'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { ListItem, Text } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'
import Spacer from '../components/Spacer'

const TrackListScreen = ({ navigation }) => {

  const { state, fetchTracks } = useContext(TrackContext)

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Spacer>
        <FlatList
          data={state}
          keyExtractor={(track) => track._id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
              <ListItem
                chevron
                title={item.name}
                bottomDivider
              />
            </TouchableOpacity>
          )}
        />
      </Spacer>
    </>
  )
}

TrackListScreen.navigationOptions = {
  title: 'Tracks'
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center'
  }
})

export default TrackListScreen