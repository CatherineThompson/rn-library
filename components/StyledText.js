import React from 'react'
import { Text } from 'react-native'

export default class StyledText extends React.Component {
  props: {
    style: ?Object
  }

  render () {
    return (
      <Text
        {...this.props}
        style={this.props.style}
      />
    )
  }
}
