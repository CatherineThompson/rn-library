import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import SliderButton from '../libraryComponents/SliderButton'
import Alerts from '../constants/Alerts'

export default class SliderButtonScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <SliderButton onSlidingComplete={this._handleSlideComplete} />
      </View>
    )
  }

  _handleSlideComplete = () => {
    this.props.navigator.showLocalAlert(
      'Slide complete',
      Alerts.notice
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
