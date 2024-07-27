import { createAsyncThunk } from "@reduxjs/toolkit";

interface UserData {
  name: string;
  email: string;
  age: string;
  gender: string;
}

export const createUser = createAsyncThunk(
  "userDetail/createUser",
  async (data: UserData, { rejectWithValue }) => {
    const API_URL = "https://66a549205dc27a3c190b2700.mockapi.io/UsersDetails";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result = await response.json();

      return result;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Koite parlam na bhai 😭"
      );
    }
  }
);
