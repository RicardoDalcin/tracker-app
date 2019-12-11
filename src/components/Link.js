import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'

const Link = ({ text, action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <Text style={styles.linkText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  linkText: {
    color: '#4286f4'
  }
})

export default Link