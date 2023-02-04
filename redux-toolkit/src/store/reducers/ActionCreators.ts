import axios, {AxiosError} from "axios";
import {IUser} from "../models/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";

 export const fetchUsers: any = createAsyncThunk(
   'user/fetchAll',
   async (_, thunkApi) => {
     try {
       const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
       return response.data
     } catch (e) {
       const error = e as AxiosError
       return thunkApi.rejectWithValue(error.message)
     }
   }
 )
