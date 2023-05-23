import { User } from './user'
import { ContactUs } from './contactus'
import { Location } from './location'
export type Auth = {
    accountId: number,
    authData: string,
    verified: boolean,
    contact?: ContactUs,
    flags?: number,
    hideTestLocations?: boolean,
}
