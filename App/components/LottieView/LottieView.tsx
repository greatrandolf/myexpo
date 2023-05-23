import React, { useEffect, useState} from 'react';
import { 
  Modal, 
  View, 
  Text,
  ActivityIndicator, 
  Button,
  Platform,
  Dimensions,
} from 'react-native';
import styles from './Styles'
// import LottieView from 'lottie-react-native'
import { Colors } from '../../styles'
  
interface Props {
  animate?: boolean
}

const CustomPLottieView = (props: Props) => {

  let animationLottie: any = null

  useEffect(() => {
      if (props.animate && animationLottie)
          animationLottie.play()

  }, [props.animate, animationLottie])

  return (
    <View />
    // <LottieView
    //               ref={animation => {
    //                   animationLottie = animation;
    //               }}
    //               autoPlay={false}
    //               loop={props.animate}
    //               style={{ opacity: 0.9}}
    //               { ...props }
    //           />
  )
}
  
export default CustomPLottieView