import { configureStore } from "@reduxjs/toolkit";
import userDetails from "./features/user/userDetailsSlice";

export const store = configureStore({
  reducer: { users: userDetails },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
