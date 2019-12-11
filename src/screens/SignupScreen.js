import React, { useState, useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { Feather } from '@expo/vector-icons'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import Link from '../components/Link'

const SignupScreen = ({ navigation }) => {

  const { state, signup } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={styles.title}>Sign Up</Text>
      </Spacer>
      <Spacer>
        <Input
          value={email}
          onChangeText={setEmail}
          label="Your Email Address"
          placeholder="email@address.com"
          style={styles.input}
          leftIcon={
            <Feather style={styles.icon} name="mail" />
          }
          keyboardType="email-address"
          autoCapitalize='none'
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          value={password}
          onChangeText={setPassword}
          label="Password"
          placeholder="Password"
          style={styles.input}
          leftIcon={
            <Feather style={styles.icon} name="lock" />
          }
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry
        />
      </Spacer>
      {
        state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null
      }
      <Spacer>
        <Button title="Sign Up" style={styles.button} onPress={() => signup({ email, password })} />
      </Spacer>
      <Spacer>
        <Link text="Already have an account? Sign in here!" action={() => navigation.navigate('Signin')} />
      </Spacer>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
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
  },
  errorMessage: {
    fontSize: 16,
    color: '#ed4337',
    marginLeft: 15,
  }
})

export default SignupScreen