import { createRouter } from '@expo/ex-navigation'

import HomeScreen from '../screens/HomeScreen'
import LoadingButtonScreen from '../screens/LoadingButtonScreen'

export default createRouter(() => ({
  home: () => HomeScreen,
  loadingButton: () => LoadingButtonScreen
}))
