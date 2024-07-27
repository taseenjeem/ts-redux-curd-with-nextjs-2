import { createAsyncThunk } from "@reduxjs/toolkit";

interface UserData {
  id: string;
  name: string;
  email: string;
  age: string;
  gender: string;
}

const API_URL = "https://66a549205dc27a3c190b2700.mockapi.io/UsersDetails";

export const createUser = createAsyncThunk(
  "userDetail/createUser",
  async (data: UserData, { rejectWithValue }) => {
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

export const showUsers = createAsyncThunk(
  "userDetails/showUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);

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

export const deleteUser = createAsyncThunk(
  "userDetail/deleteUser",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${userId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return userId;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Koite parlam na bhai 😭"
      );
    }
  }
);

export const editUser = createAsyncThunk(
  "userDetail/editUser",
  async (data: UserData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${data.id}`, {
        method: "PUT",
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
