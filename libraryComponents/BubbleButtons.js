import React from 'react'
import {
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Colors from '../constants/Colors'
import { FontAwesome } from '@expo/vector-icons'

export const ContactBubble = ({image, onPress}) => (
  <TouchableOpacity
    style={styles.profileImageContainer}
    onPress={onPress}>
    <Image
      style={styles.profileImage}
      source={image} />
  </TouchableOpacity>
)

export const GroupBubble = ({onPress}) => (
  <TouchableOpacity
    style={styles.groupIconContainer}
    onPress={onPress}>
    <FontAwesome
      name='group'
      size={38}
      style={styles.icons}/>
  </TouchableOpacity>
)

export const AddContact = ({onPress}) => (
  <TouchableOpacity
    style={styles.plusIconContainer}
    onPress={onPress}>
    <FontAwesome
      name='plus'
      size={34}
      style={styles.icons} />
  </TouchableOpacity>
)

export default ContactBubble

const styles = StyleSheet.create({
  profileImageContainer: {
    marginRight: 4,
    marginBottom: 16,
  },
  profileImage: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 30,
  },
  groupIconContainer: {
    height: 60,
    width: 60,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
    marginBottom: 16,
  },
  icons: {
    backgroundColor: 'transparent',
    color: Colors.primaryColor
  },
  plusIconContainer: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16
  }
})
