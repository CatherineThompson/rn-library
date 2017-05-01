import { createRouter } from '@expo/ex-navigation'

import HomeScreen from '../screens/HomeScreen'
import LoadingButtonScreen from '../screens/LoadingButtonScreen'
import CheckboxAndRadioButtonScreen from '../screens/CheckboxAndRadioButtonScreen'

export default createRouter(() => ({
  home: () => HomeScreen,
  loadingButton: () => LoadingButtonScreen,
  checkboxAndRadioButton: () => CheckboxAndRadioButtonScreen
}))
