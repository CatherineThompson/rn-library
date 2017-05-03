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
import Strings from '../assets/resources/Strings'

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
          {
            Strings.components.map((comp, i) => (
              <ListComponent
                key={i}
                title={comp.title}
                description={comp.description}
                onPress={() => this.props.navigator.push(Router.getRoute(comp.navigation))} />
            ))
          }
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
