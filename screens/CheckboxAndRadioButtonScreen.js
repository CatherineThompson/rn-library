import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import Checkbox from '../libraryComponents/Checkbox'
import RadioButton from '../libraryComponents/RadioButton'
import StyledText from '../components/StyledText'
import Strings from '../assets/resources/Strings'

export default class CheckboxAndRadioButtonScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checkboxSelected: false,
      radioButtonSelected: false
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <StyledText style={styles.infoText}>{Strings.screen_descriptions.CheckboxAndRadioButton}</StyledText>
        <View>
          <Checkbox
            title='Checkbox title'
            selected={this.state.checkboxSelected}
            onPress={this._handlePressCheckbox} />
          <RadioButton
            title='Radio button title'
            selected={this.state.radioButtonSelected}
            onPress={this._handlePressRadioButton} />
        </View>
      </View>
    )
  }

  _handlePressCheckbox = () => {
    this.setState({checkboxSelected: !this.state.checkboxSelected})
  }

  _handlePressRadioButton = () => {
    this.setState({radioButtonSelected: !this.state.radioButtonSelected})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 32,
    paddingVertical: 64,
    alignItems: 'center'
  },
  infoText: {
    fontSize: 16
  }
})
