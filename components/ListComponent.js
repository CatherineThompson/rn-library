/* @flow */

import React from 'react'
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Colors from '../constants/Colors'
import StyledText from '../components/StyledText'

const ListComponent = ({title, description, onPress}: Object) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <StyledText style={styles.titleText}>{title}</StyledText>
    <StyledText style={styles.descriptionText}>{description}</StyledText>
  </TouchableOpacity>
)

export default ListComponent

const styles = StyleSheet.create({
  container: {
    height: 90,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderColor: Colors.dividerGray,
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 20
  },
  descriptionText: {
    color: Colors.textGray
  }
})
