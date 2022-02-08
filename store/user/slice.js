import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  onboarding: {
    status: false,
    checked: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserProfile: (state, action) => {
      state.profile = action.payload.profile;
      state.onboarding = {
        status: action.payload.hasOnboarded,
        checked: true,
      };
    },
    clearUserProfile: () => initialState
    // ({
    //   ...initialState,
    //   onboarding: {
    //     ...initialState.onboarding,
    //     checked: true,
    //   },
    // }),
  },
});

export const userActions = userSlice.actions;
export default userSlice;
