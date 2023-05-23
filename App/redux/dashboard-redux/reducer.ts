import { Reducer } from 'redux'
import { DashboardTypes, DashboardAction } from '../dashboard-redux'
import { Error } from '../../models'

type DashboardState = {
  loading: boolean
}

const INITIAL_STATE: DashboardState = {
  loading: false,
}

const clearData = (state: DashboardState) => ({
  ...state, ...INITIAL_STATE
})

const setLoading = (state: DashboardState) => ({
  ...state, loading: true, error: null, isEmailVerified: false,
})
const getDashboardDetailsSuccess = (state: DashboardState, success: boolean) => ({
  ...state, loading: false, error: null, 
})

const failure = (state: DashboardState, error: Error) => ({
  ...state, loading: false, error: error,
})

const reducer: Reducer<DashboardState, DashboardAction> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case DashboardTypes.CLEAR_DATA:
      return clearData(state)

    case DashboardTypes.GET_DASHBOARD_DETAILS:
      return setLoading(state)
    case DashboardTypes.GET_DASHBOARD_DETAILS_SUCCESS:
      return getDashboardDetailsSuccess(state, action.payload.success)
    case DashboardTypes.GET_DASHBOARD_DETAILS_FAILURE:
      return failure(state, action.payload.error)
    default:
      return state
  }
}

export default reducer
