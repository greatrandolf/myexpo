import * as React from 'react'
import { 
    SafeAreaView, 
    ScrollView, 
    View, 
    Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../../styles'
import LinearGradient from 'react-native-linear-gradient';

type Props = {
    children?: any,
    header?: () => any,
    backgroundImage?: any,
    statusBarStyle?: string,
    safeAreaViewTopStyle?: any,
    safeAreaViewBottomStyle?: any,
    scrollViewEnable?: boolean,
    keyboardShouldPersistTaps?: any,
    style?: any,
}



const Container = ({
    children, 
    header, 
    backgroundImage,
    statusBarStyle = '',
    safeAreaViewTopStyle,
    safeAreaViewBottomStyle,
    scrollViewEnable,
    keyboardShouldPersistTaps = 'handled',
    style, 
}: Props) => {

    const { backgroundColor } = style
    const Content = scrollViewEnable ? ScrollView : View
    const statusBarColor = safeAreaViewTopStyle && safeAreaViewTopStyle.backgroundColor ? safeAreaViewTopStyle.backgroundColor : null

    return  (
        <View style={{ flex: 1, }}>
            {header && header()}

            <Content style={[{ },style]} keyboardShouldPersistTaps={keyboardShouldPersistTaps} keyboardDismissMode="interactive">
                    { children }
            </Content>
        </View>
    )
};

export default Container;