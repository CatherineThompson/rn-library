import React from 'React'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native'
import Colors from '../constants/Colors'
import StyledText from '../components/StyledText'

const LoadingButton = ({title, style, onPress, status}: Object) => (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        { opacity: status && status === 'loading' ? 0.7 : 1 }
      ]}
      onPress={status && status === 'loading' ? null : onPress}>
      <StyledText style={styles.text}>{title}</StyledText>
      {
        (status === 'loading')
        ? (<View style={styles.loadingIndicatorContainer}>
            <ActivityIndicator size='small' color={Colors.primaryColor} />
          </View>)
        : null
      }
    </TouchableOpacity>
)

export default LoadingButton

const styles = StyleSheet.create({
  button: {
    padding: 16,
    alignSelf: 'center',
    width: 225,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: Colors.primaryColor,
    borderRadius: 8,
    alignItems: 'center',
    margin: 16
  },
  loadingIndicatorContainer: {
    position: 'absolute',
    right: 20,
    paddingTop: 2,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15
  }
})
