import {
  Dimensions,
  Platform,
  StatusBar
} from 'react-native'

export default {
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  statusBar: {
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
  }
}
