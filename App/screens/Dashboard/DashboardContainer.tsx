import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Alert, Platform, AppState, Linking } from 'react-native'
import { connect, ConnectedProps, } from 'react-redux'
import { RootState, RootDispatch } from '../../redux'
import {StackActions ,useNavigation, DrawerActions, CommonActions, useFocusEffect } from '@react-navigation/native'
import DashboardActions, { DashboardSelectors } from '../../redux/dashboard-redux'
import { AuthSelectors } from '../../redux/auth-redux'
import MenuActions, { MenuSelectors } from '../../redux/menu-redux'
import { AppStateSelectors } from '../../redux/app-state-redux'
import Toast from 'react-native-toast-message';
import { Screen as MainScreen } from '../../navigation/routes/mainRoutes'
import { Screen as RootScreen } from '../../navigation/routes/rootRoutes'
import Dashboard from './Dashboard'

const DashboardContainer = (props: Props) =>  {
    const navigation = useNavigation()

    const toggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer())
    }

    const onLogin = () => {
        navigation.dispatch(StackActions.push(MainScreen.Login))
    }

    return (
        <Dashboard  toggleDrawer={toggleDrawer} 
                    onLogin={onLogin}
                    { ...props } />
    )
}

const mapStateToProps = (state: RootState) => ({
    isConnected: state.network.isConnected,
    auth: AuthSelectors.auth(state),
})
const mapDispatchToProps = (dispatch: RootDispatch) => ({
    
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type Props = ConnectedProps<typeof connector>

export default connector(DashboardContainer)
