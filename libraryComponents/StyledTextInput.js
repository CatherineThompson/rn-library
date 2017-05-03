import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native'
import Colors from '../constants/Colors'

export default class StyledTextInput extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          allowFontScaling={false}
          placeholderTextColor={Colors.textGray}
          underlineColorAndroid="transparent"
          style={[styles.textInput, this.props.style]}
          selectionColor={Colors.primaryColor}
          {...this.props}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryColor
  },
  textInput: {
    backgroundColor: 'transparent',
    height: 40,
    color: Colors.primaryColor,
    fontSize: 24,
    borderBottomWidth: 1,
    margin: 16,
    textAlign: 'center'
  }
})
