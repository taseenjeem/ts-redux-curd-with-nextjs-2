import { createSlice } from "@reduxjs/toolkit";

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
});

export default userDetail.reducer;
