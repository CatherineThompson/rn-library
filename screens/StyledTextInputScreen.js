import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'
import StyledTextInput from '../libraryComponents/StyledTextInput'
import StyledText from '../components/StyledText'
import Strings from '../assets/resources/Strings'

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
        <StyledText style={styles.infoText}>{Strings.screen_descriptions.StyledTextInput}</StyledText>
        <KeyboardAvoidingView behavior='padding' style={styles.itemsContainer}>
          <StyledTextInput
            placeholder="Phone Number"
            keyboardType='numeric' />
          <StyledTextInput
            placeholder="Email"
            keyboardType='email-address' />
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32
  },
  itemsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoText: {
    fontSize: 16
  }
})
