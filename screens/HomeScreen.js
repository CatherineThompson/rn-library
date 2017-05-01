/* @flow */

import React from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'

import StyledText from '../components/StyledText'
import ListComponent from '../components/ListComponent'
import Layout from '../constants/Layout'

export default class HomeScreen extends React.Component {
  props: {
    name: ?string
  }

  static route = {
    navigationBar: {
      visible: false,
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <StyledText style={styles.titleText}>Components Library</StyledText>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <ListComponent title='testing' description='this is a component'/>
          <ListComponent title='testing1' />
          <ListComponent title='testing2' />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Layout.statusBar.height
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 30,
    padding: 10
  },
  contentContainer: {
  }
})
