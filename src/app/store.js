import { configureStore } from "@reduxjs/toolkit";

//acá van importados todos los reducers
import userReducer from '../reducers/users/userSlice'

export const store = configureStore({
  reducer: {user: userReducer},
});
