import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux"
import * as UseerActionCreators from "../../store/actions/userAction"
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UseerActionCreators,dispatch)
}