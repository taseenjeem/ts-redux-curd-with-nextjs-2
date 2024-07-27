import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserDetailState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserDetailState = {
  users: [],
  loading: false,
  error: null,
};

export const userDetail = createSlice({
  name: "userDetail",
  initialState,
  reducers: {},
});

export default userDetail.reducer;
