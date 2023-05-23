import React from 'react';
import { 
    View,
    Text 
} from 'react-native';
import styles from './Styles'

type Props = {
    style?: any,
    title?: string,
    titleStyle?: any,
    left?: any,
    leftContainerStyle?: any,
    center?: any,
    centerContainerStyle?: any,
    right?: any,
    rightContainerStyle?: any,
}

const Header = ({
    style,
    title,
    titleStyle,
    left,
    leftContainerStyle,
    center,
    centerContainerStyle,
    right,
    rightContainerStyle,
}: Props) => {
    
    const titleValue = (!title && right) ? " " : title
    const defaultColor = titleValue ?  { } : { color: 'transparent' }
    const flexLeftRight = titleValue && !center ? { flex: left || right ? 0.25 : 0.75 } : { flex: left || right ? 0.8 : 0.2 }
    const shouldPaddingTop = (titleValue && !center) || (center && !titleValue)
    return (
        <View style={[styles.container, { paddingTop: shouldPaddingTop ? 3 : 23 ,...style, }]}>
            <View style={[ flexLeftRight, leftContainerStyle, ]}>
                {left}
            </View>
            {/* {titleValue && !center &&  */}
                <Text style={{ ...styles.title, ...titleStyle, ...defaultColor}}>
                    {titleValue ? titleValue : 'Title'}
                </Text> 
            {/* } */}
            {center && !titleValue && 
                <View style={[ { flex: center ? 4 : 0.5 }, centerContainerStyle, ]}>
                    {center}
                </View>
            }
            <View style={[ styles.defaultRightStyle, flexLeftRight, rightContainerStyle, ]}>
                {right}
            </View>
        </View>
    )
}

export default Header;

