import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUser } from "./actions";

interface User {
  id: string;
  name: string;
  email: string;
  age: string;
  gender: string;
}

interface UserDetailState {
  users: User[];
  loading: boolean;
  error: string | null;
  age: string | null;
  gender: string | null;
}

const initialState: UserDetailState = {
  users: [],
  loading: false,
  error: null,
  age: null,
  gender: null,
};

export const userDetail = createSlice({
  name: "userDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userDetail.reducer;
