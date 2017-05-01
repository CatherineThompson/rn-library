import React, { Component } from 'React'
import {
  StyleSheet,
  View,
  Animated
} from 'react-native'

// The slider currently needs react-addons-shallow-compare for newer versions of react
// npm i --save react-addons-shallow-compare
import Slider from 'react-native-slider'
import Colors from '../constants/Colors'

const Constants = {
  ANIMATION_DURATION: 1000,
  ANIMATION_OPACITY_INITIAL: 0.3,
  ANIMATION_OPACITY_COMPLETED: 1,
  SLIDER_COMPLETION_VALUE: 89
}

export default class SliderButton extends Component {
  state = {
    timestamp: Date.now(),
    textAlphaValue1: new Animated.Value(Constants.ANIMATION_OPACITY_INITIAL),
    textAlphaValue2: new Animated.Value(Constants.ANIMATION_OPACITY_INITIAL),
    textAlphaValue3: new Animated.Value(Constants.ANIMATION_OPACITY_INITIAL),
  }

  componentDidMount () {
    this.kickOffAnimation()
  }

  kickOffAnimation = () => {
    Animated.stagger(500, [
      Animated.sequence([
        Animated.timing(this.state.textAlphaValue1, {
          toValue: Constants.ANIMATION_OPACITY_COMPLETED,
          duration: Constants.ANIMATION_DURATION
        }),
        Animated.timing(this.state.textAlphaValue1, {
          toValue: Constants.ANIMATION_OPACITY_INITIAL,
          duration: Constants.ANIMATION_DURATION
        })
      ]),
      Animated.sequence([
        Animated.timing(this.state.textAlphaValue2, {
          toValue: Constants.ANIMATION_OPACITY_COMPLETED,
          duration: Constants.ANIMATION_DURATION
        }),
        Animated.timing(this.state.textAlphaValue2, {
          toValue: Constants.ANIMATION_OPACITY_INITIAL,
          duration: Constants.ANIMATION_DURATION
        })
      ]),
      Animated.sequence([
        Animated.timing(this.state.textAlphaValue3, {
          toValue: Constants.ANIMATION_OPACITY_COMPLETED,
          duration: Constants.ANIMATION_DURATION
        }),
        Animated.timing(this.state.textAlphaValue3, {
          toValue: Constants.ANIMATION_OPACITY_INITIAL,
          duration: Constants.ANIMATION_DURATION
        })
      ])
    ]).start((callbackObject) => {
      if (callbackObject.finished === true) {
        this.kickOffAnimation()
      }
    })
  }

  render () {
    return (
      <View style={[styles.container, {backgroundColor: Colors.primaryColor}]}>
        <View style={{position: 'absolute', left: 46, top: 12, flexDirection: 'row'}}>
          <Animated.Text style={[styles.text, {opacity: this.state.textAlphaValue1}]}>SLIDE</Animated.Text>
          <Animated.Text style={[styles.text, {opacity: this.state.textAlphaValue2}]}> TO </Animated.Text>
          <Animated.Text style={[styles.text, {opacity: this.state.textAlphaValue3}]}>REDEEM</Animated.Text>
        </View>
        <Slider
          key={this.state.timestamp}
          onSlidingComplete={(newValue) => {
            this.onSliderValueChanged(newValue)
            if (newValue > 0.95) {
              this.props.onSlidingComplete(newValue)
            }
          }}
          thumbTintColor='white'
          thumbStyle={{borderWidth: 2, borderColor: Colors.primaryColor, height: 44, width: 44, borderRadius: 22, top: 21}}
          trackStyle={{opacity: 0}}
        />
      </View>
    )
  }

  onSliderValueChanged = (newValue) => {
    if (newValue > 0.95) {
      this.setState({ timestamp: Date.now() })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 260,
    height: 50,
    borderRadius: 25
  },
  text: {
    color: 'white',
    fontSize: 20
  }
})
