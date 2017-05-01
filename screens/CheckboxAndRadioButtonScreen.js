import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import Checkbox from '../libraryComponents/Checkbox'
import RadioButton from '../libraryComponents/RadioButton'
import StyledText from '../components/StyledText'

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
        <StyledText style={styles.infoText}>Click on both buttons. Only the active button will trigger an alert. The inactive button is disabled when the status is 'loading'.</StyledText>
        <View style={styles.itemsContainer}>
          <Checkbox
            title='checkbox title'
            selected={this.state.checkboxSelected}
            onPress={this._handlePressCheckbox} />
          <RadioButton
            title='radio button title'
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
    padding: 32
  },
  infoText: {
    fontSize: 16
  },
  itemsContainer: {

  }
})
