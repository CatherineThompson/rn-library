import {
  Dimensions,
  Platform,
  StatusBar
} from 'react-native'
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : (global.__exponent ? 25 : 0)
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 55

export default {
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  statusBar: {
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
  },
  navBar: {
    height: STATUSBAR_HEIGHT + APPBAR_HEIGHT
  }
}
