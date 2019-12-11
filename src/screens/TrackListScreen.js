import React, { useContext } from 'react'
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {

  const { state, fetchTracks } = useContext(TrackContext)

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text>TrackListScreen</Text>
      <FlatList
        data={state}
        keyExtractor={(track) => track._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
            <ListItem chevron title={item.name} />
          </TouchableOpacity>
        )}
      />
    </>
  )
}

TrackListScreen.navigationOptions = {
  title: 'Tracks'
}

const styles = StyleSheet.create({})

export default TrackListScreen