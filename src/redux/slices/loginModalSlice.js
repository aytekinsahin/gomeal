import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  loginModalVisible : false
}

const loginModalSlice = createSlice({
  name : 'loginModal',
  initialState,
  reducers:{
    handleLoginModal:(state) =>{
      console.log("handleLoginModal");
      state.loginModalVisible = !state.loginModalVisible;
      return state
    }
  }

})

export const {handleLoginModal} = loginModalSlice.actions;
export default loginModalSlice.reducer;
