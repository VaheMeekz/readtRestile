export enum UserActionTypes {
    FATCH_USERS = "FATCH_USERS",
    FATCH_USERS_SUCCSESS = "FATCH_USERS_SUCCSESS",
    FATCH_USERS_ERROR = "FATCH_USERS_ERROR"
}

export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

interface UserActionFetchTypes {
    type: UserActionTypes.FATCH_USERS;
}

interface FetchUserSuccsessAction {
    type: UserActionTypes.FATCH_USERS_SUCCSESS;
    payload: any[];
}

interface FetchUserErrorAction {
    type: UserActionTypes.FATCH_USERS_ERROR;
    payload: string;
}

export interface IAddress {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
}

export interface IUser {
    id:number;
    name:string;
    email:string;
    phone: string;
    username: string;
    website: string;
    address:IAddress
}

export type UserAction = UserActionFetchTypes | FetchUserSuccsessAction | FetchUserErrorAction
