import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  onboarding: {
    status: false,
    checked: false,
    createTest: false
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
    clearUserProfile: () => initialState,
    completeOnboarding: (state, action) => {
      state.onboarding.status = true;
      state.onboarding.createTest = action.payload;
    }
  },
});

export const userActions = userSlice.actions;
export default userSlice;
