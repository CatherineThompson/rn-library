import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import PeakingDrawer from '../libraryComponents/PeakingDrawer'

export default class PeakingDrawerScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <PeakingDrawer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
