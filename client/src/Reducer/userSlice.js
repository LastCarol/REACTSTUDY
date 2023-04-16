import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: "",
  uid: "",
  accessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.value += 1;
    },
    clearUser: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
