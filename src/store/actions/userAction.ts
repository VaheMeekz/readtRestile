import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FATCH_USERS})
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setTimeout(()=>{

                dispatch({type:UserActionTypes.FATCH_USERS_SUCCSESS,payload:response.data})
            },500)
        } catch (e) {
            dispatch({
                type: UserActionTypes.FATCH_USERS_ERROR,
                payload: "error:something is wrong!"
            })
        }
    }
}