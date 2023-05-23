import {all, call, put, select, take, takeLatest, takeEvery, delay, putResolve} from 'redux-saga/effects'
import {Platform} from "react-native";
import { eventChannel, END } from 'redux-saga'
import { ApiAction, ApiDashboard } from '../services'
import AuthActions, { AuthSelectors } from '../redux/auth-redux'
import DashboardActions, { DashboardTypes } from '../redux/dashboard-redux'
import api from '../services/shared/dashboard-service'

function * getDashboardDetails (api: ApiDashboard, action: ApiAction): Event {
    const auth = yield select(AuthSelectors.auth)
    const response = yield call(api.getDashboardDetails, "", auth)

    yield put(
        response.matchWith({
            Ok: ({ value }: { value: any }) => DashboardActions.getDashboardDetailsSuccess(value),
            Error: ({ value }: { value: any }) => DashboardActions.getDashboardDetailsFailure(value)
        })
    )
}

export default function() {
    return [
        takeLatest(DashboardTypes.GET_DASHBOARD_DETAILS, getDashboardDetails, api),
    ]
}
