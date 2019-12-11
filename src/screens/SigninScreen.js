import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { Feather } from '@expo/vector-icons'
import Spacer from '../components/Spacer'

const SigninScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={styles.title}>Sign In</Text>
      </Spacer>
      <Spacer>
        <Input
          style={styles.input}
          label="Your Email Address"
          placeholder="email@address.com"
          leftIcon={
            <Feather style={styles.icon} name="mail" />
          }
          autoCapitalize='none'
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          style={styles.input}
          label="Password"
          placeholder="Password"
          leftIcon={
            <Feather style={styles.icon} name="lock" />
          }
          autoCapitalize='none'
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Button title="Sign In" style={styles.button} />
      </Spacer>
      <Spacer>
        <Button title="SignUP PAGE" type="clear" onPress={() => navigation.navigate('Signup')} />
      </Spacer>
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#262626'
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
    color: '#86939e'
  },
  input: {
    paddingHorizontal: 10
  },
  button: {

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
})

export default SigninScreen