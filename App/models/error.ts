import { ForceAppUpdate  } from "./forceAppUpdate"

export type Error = {
    api?: string,
    genericError?: string,
    backendError?: string,
    connectionError?: string,
    connectionErrorMessage?: string,
    statusCode?: Number,
    signoutUser?: Boolean,
    forceAppUpdate?: ForceAppUpdate,
}