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
import Alerts from '../constants/Alerts'

export default class BubbleButtonsScreen extends Component {

  _handleGroupPress = () => {
    this.props.navigator.showLocalAlert(
      'Group selected',
      Alerts.notice
    )
  }

  _handleContactPress = () => {
    this.props.navigator.showLocalAlert(
      'Contact selected',
      Alerts.notice
    )
  }

  _handleAddContactPress = () => {
    this.props.navigator.showLocalAlert(
      'Add contact',
      Alerts.notice
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <InfoText style={{paddingHorizontal: 32}}>
          {Strings.screen_descriptions.BubbleButtons}
        </InfoText>
        <View style={styles.itemsContainer}>
          <GroupBubble onPress={this._handleGroupPress} />
          <ContactBubble
            image={require('../assets/images/cathy-profile.jpg')}
            onPress={this._handleContactPress}/>
          <ContactBubble
            image={require('../assets/images/sterling-profile.jpg')}
            onPress={this._handleContactPress}/>
          <ContactBubble
            image={require('../assets/images/gabriel-profile.jpg')}
            onPress={this._handleContactPress}/>
          <AddContact onPress={this._handleAddContactPress} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
