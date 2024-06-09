import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  user: User | null;
};

const initialState: InitialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserProfile } = userSlice.actions;

export default userSlice.reducer;
