import React from 'react'
import { Text } from 'react-native'
import Colors from '../constants/Colors'

export default class StyledText extends React.Component {
  props: {
    style: ?Object
  }

  render () {
    return (
      <Text
        {...this.props}
        style={[{color: Colors.primaryColor}, this.props.style]}
      />
    )
  }
}
