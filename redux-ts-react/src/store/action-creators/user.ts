import {UserAction, userActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: userActionTypes.FETCH_USERS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setTimeout(() => {
        dispatch({ type: userActionTypes.FETCH_USERS_SUCCESS, payload: response.data })
      }, 500)
    } catch (e) {
      dispatch({ type: userActionTypes.FETCH_USERS_ERROR, payload: "Fetching users error" })
    }
  }
}
