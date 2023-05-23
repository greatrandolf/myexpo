import { call, put, select, takeLatest } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import AppLaunchActions, { AppLaunchTypes } from '../redux/app-launch-redux'
import { AuthSelectors } from '../redux/auth-redux'
import { Auth, } from '../models'
import Utils from '../services/shared/utils/Utils'
import { Platform, Alert  } from 'react-native'
import { strings } from '../localization/strings'
import Config from '../config/debugConfig'

function * appLaunch () {
    if (Config.useReactotron) {
        console.tron = console
    }
    const auth: Auth = yield select(AuthSelectors.auth)
    console.log('app-launch-saga')

}

export default function() {
    return [
        takeLatest(AppLaunchTypes.APP_LAUNCH, appLaunch),
    ]
}