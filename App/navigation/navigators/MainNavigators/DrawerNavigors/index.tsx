import * as React from 'react'
import { useWindowDimensions, Platform, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';
import TabNavigators from './TabNavigators'
import Home from '../../../../screens/Dashboard'
import Menu from '../../../../screens/Menu'

import { Screen } from '../../../routes/drawerRoutes'

import Apps from '../../../../../Apps'
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const DrawerNavigator = () => {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    const isWeb = Platform.OS === 'web'
    // const isDrawerOpened = useDrawerStatus() === 'open'

    return (
        <Drawer.Navigator drawerContent={props => <Menu route={null} {...props} />}
            screenOptions={{    headerShown: false, 
                                drawerType: isLargeScreen ? 'permanent' : 'front',
                                 }}
            // screenOptions={isWeb ? {
            //     headerShown: false, 
            //     drawerType: isLargeScreen ? 'permanent' : isWeb ? 'back' : 'front',
            //     drawerStyle: isLargeScreen && isWeb ? null : { width: isWeb ? '100%' : '70%' },
            //     overlayColor: 'transparent',
            //   }: {
            //     headerShown: false, 
            //     drawerType: isLargeScreen ? 'permanent' : isWeb ? 'back' : 'front',
            //     drawerStyle: isLargeScreen && isWeb ? null : { width: isWeb ? 270 : '70%' },
            //   }}
                                >

            <Drawer.Screen name={Screen.Contests} component={TabNavigators} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
//https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da
