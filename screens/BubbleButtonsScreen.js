import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  ContactBubble,
  GroupBubble,
  AddContact
} from '../libraryComponents/BubbleButtons'
import { InfoText } from '../components/StyledText'
import Strings from '../assets/resources/Strings'

export default class BubbleButtonsScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <InfoText>{Strings.screen_descriptions.CheckboxAndRadioButton}</InfoText>
        <View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
