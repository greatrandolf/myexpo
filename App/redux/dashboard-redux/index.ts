import { Action as ReduxAction } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '..'
import { Error } from '../../models'

export const DashboardSelectors = {
  isLoading : (state: RootState) => state.dashboard.loading
}

export enum DashboardTypes {
  CLEAR_DATA = 'CLEAR_DATA',
  GET_DASHBOARD_DETAILS = 'GET_DASHBOARD_DETAILS',
  GET_DASHBOARD_DETAILS_SUCCESS = 'GET_DASHBOARD_DETAILS_SUCCESS',
  GET_DASHBOARD_DETAILS_FAILURE = 'GET_DASHBOARD_DETAILS_FAILURE',
}

export type DashboardAction =
  | ClearData
  | GetDashboardDetails
  | GetDashboardDetailsSuccess
  | GetDashboardDetailsFailure

type ClearData = ReduxAction<DashboardTypes.CLEAR_DATA>

interface GetDashboardDetails
  extends ReduxAction<DashboardTypes.GET_DASHBOARD_DETAILS> {
}

interface GetDashboardDetailsSuccess
  extends ReduxAction<DashboardTypes.GET_DASHBOARD_DETAILS_SUCCESS> {
  payload: {
    success: boolean
  }
}

interface GetDashboardDetailsFailure
  extends ReduxAction<DashboardTypes.GET_DASHBOARD_DETAILS_FAILURE> {
  payload: {
    error: Error
  }
}

const clearData = (): ClearData => ({
  type: DashboardTypes.CLEAR_DATA,
})

const getDashboardDetails = (): GetDashboardDetails => ({
  type: DashboardTypes.GET_DASHBOARD_DETAILS,
})

const getDashboardDetailsSuccess = (success: boolean): GetDashboardDetailsSuccess => ({
  type: DashboardTypes.GET_DASHBOARD_DETAILS_SUCCESS,
  payload: { success }
})

const getDashboardDetailsFailure = (error: Error): GetDashboardDetailsFailure => ({
  type: DashboardTypes.GET_DASHBOARD_DETAILS_FAILURE,
  payload: { error }
})

export default {
  clearData,
  
  getDashboardDetails,
  getDashboardDetailsSuccess,
  getDashboardDetailsFailure,
}
