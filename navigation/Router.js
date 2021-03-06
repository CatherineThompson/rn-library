import { createRouter } from '@expo/ex-navigation'

import HomeScreen from '../screens/HomeScreen'
import LoadingButtonScreen from '../screens/LoadingButtonScreen'
import CheckboxAndRadioButtonScreen from '../screens/CheckboxAndRadioButtonScreen'
import PeakingDrawerScreen from '../screens/PeakingDrawerScreen'
import SliderButtonScreen from '../screens/SliderButtonScreen'
import StyledTextInputScreen from '../screens/StyledTextInputScreen'
import BubbleButtonsScreen from '../screens/BubbleButtonsScreen'

export default createRouter(() => ({
  home: () => HomeScreen,
  loadingButton: () => LoadingButtonScreen,
  checkboxAndRadioButton: () => CheckboxAndRadioButtonScreen,
  peakingDrawer: () => PeakingDrawerScreen,
  sliderButton: () => SliderButtonScreen,
  styledTextInput: () => StyledTextInputScreen,
  bubbleButtons: () => BubbleButtonsScreen
}))
