import React from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'

import Router from '../navigation/Router'

import StyledText from '../components/StyledText'
import ListComponent from '../components/ListComponent'
import Layout from '../constants/Layout'

export default class HomeScreen extends React.Component {
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
          contentContainerStyle={styles.contentContainer}>
          <ListComponent
            title='Loading Button'
            description='This button shows a loading icon and becomes inactive when loading'
            onPress={() => this.props.navigator.push(Router.getRoute('loadingButton'))}/>
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
    padding: 16
  }
})
