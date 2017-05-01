import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Animated
} from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'
import StyledText from '../components/StyledText'

export default class PeakingDrawer extends Component {
  state = {
    anim: new Animated.Value(Layout.window.height - Layout.navBar.height - 90)
  }

  render () {
    return (
      <Animated.View style={[styles.container, {top: this.state.anim}]}>
        <GestureRecognizer
          onSwipe={(direction, state) => this.onSwipe(direction, state)}
          config={{velocityThreshold: 0.3, directionalOffsetThreshold: 80}}
          style={styles.innerContainer} >

          <View style={styles.peakingContainer}>
            <StyledText style={styles.drawerText}>Swipe up to open drawer</StyledText>
          </View>

          <View style={styles.peakingContainer}>
            <StyledText style={styles.drawerText}>Drawer is open</StyledText>
            <StyledText style={styles.drawerText}>Swipe down to close drawer</StyledText>
          </View>
        </GestureRecognizer>
      </Animated.View>
    )
  }

  onSwipe (gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN} = swipeDirections
    this.setState({gestureName: gestureName})
    switch (gestureName) {
      case SWIPE_UP:
        Animated.timing(this.state.anim, {toValue: 100 - Layout.navBar.height, duration: 250}).start()
        break
      case SWIPE_DOWN:
        Animated.timing(this.state.anim, {toValue: Layout.window.height - Layout.navBar.height - 90, duration: 250}).start()
        break
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: Layout.window.height - 100,
    width: Layout.window.width,
    position: 'absolute',
    backgroundColor: 'white',
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 8,
    paddingBottom: 80
  },
  peakingContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  drawerText: {
    fontSize: 20
  }
})
