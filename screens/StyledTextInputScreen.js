import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'
import StyledTextInput from '../libraryComponents/StyledTextInput'
import { InfoText } from '../components/StyledText'
import Strings from '../assets/resources/Strings'

export default class StyledTextInputScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nameText: '',
      emailText: ''
    }
  }

  _handleFocusNextField = (nextField) => {
    this.refs[nextField].refs.TextInput.focus()
  }

  render () {
    return (
      <View style={styles.container}>
        <InfoText>{Strings.screen_descriptions.StyledTextInput}</InfoText>
        <KeyboardAvoidingView behavior='padding' style={styles.itemsContainer}>
          <StyledTextInput
            ref="1"
            placeholder="Name"
            blurOnSubmit={false}
            onSubmitEditing={this._handleFocusNextField.bind(this, '2')}
          />
          <StyledTextInput
            ref="2"
            placeholder="Email"
            keyboardType='email-address'
            blurOnSubmit={false}
            onSubmitEditing={this._handleFocusNextField.bind(this, '1')}
          />
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
  }
})
