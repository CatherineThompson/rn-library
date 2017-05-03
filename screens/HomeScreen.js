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
      visible: false
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
            onPress={() => this.props.navigator.push(Router.getRoute('loadingButton'))} />
          <ListComponent
            title='Checkbox and Radio Button'
            description='Platform specific checkboxes and radio buttons'
            onPress={() => this.props.navigator.push(Router.getRoute('checkboxAndRadioButton'))} />
          <ListComponent
            title='Peaking Drawer'
            description='Overlaying screen that can be opened and closed with swipe gestures'
            onPress={() => this.props.navigator.push(Router.getRoute('peakingDrawer'))} />
          <ListComponent
            title='Slider Button'
            description='Styled slider'
            onPress={() => this.props.navigator.push(Router.getRoute('sliderButton'))} />
          <ListComponent
            title='Styled Text Input'
            description='Simple styled TextInput'
            onPress={() => this.props.navigator.push(Router.getRoute('styledTextInput'))} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Layout.statusBar.height
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 30,
    padding: 16
  }
})
