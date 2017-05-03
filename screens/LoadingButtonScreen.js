import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import LoadingButton from '../libraryComponents/LoadingButton'
import Alerts from '../constants/Alerts'
import StyledText from '../components/StyledText'
import Strings from '../assets/resources/Strings'

export default class LoadingButtonScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StyledText style={styles.infoText}>{Strings.screen_descriptions.LoadingButton}</StyledText>
        <View>
          <LoadingButton
            title='Active Button'
            onPress={this._handlePressButton} />
          <LoadingButton
            title='Inactive Button'
            status='loading'
            onPress={this._handlePressButton} />
        </View>
      </View>
    )
  }

  _handlePressButton = () => {
    this.props.navigator.showLocalAlert(
      'Active Button Pressed',
      Alerts.notice
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  infoText: {
    padding: 32,
    fontSize: 16
  }
})
