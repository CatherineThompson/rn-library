import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import StyledTextInput from '../libraryComponents/StyledTextInput'

export default class StyledTextInputScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      phoneNumberText: '',
      emailText: ''
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View>
          <StyledTextInput
            placeholder="Phone Number"
            keyboardType='numeric' />
          <StyledTextInput
            placeholder="Email"
            keyboardType='email-address' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32
  }
})
