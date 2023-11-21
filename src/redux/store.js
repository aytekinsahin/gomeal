import {configureStore} from "@reduxjs/toolkit";
import loginModalSlice from "@/redux/slices/loginModalSlice";

export const store = configureStore({
  reducer : {
    loginModal:loginModalSlice
  }
})
