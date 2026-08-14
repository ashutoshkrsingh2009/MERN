import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();

    return data.users;
  }
);

const initialState = {
  users: [],
  loading: false,
  friends: [],
  blockList: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    addFriend: (state, action) => {
      const exists = state.friends.find(
        (user) => user.id === action.payload.id
      );

      if (!exists) {
        state.friends.push(action.payload);
      }
    },

    addToBlockList: (state, action) => {
      const exists = state.blockList.find(
        (user) => user.id === action.payload.id
      );

      if (exists) return;

      state.blockList.push(action.payload);

      state.friends = state.friends.filter(
        (user) => user.id !== action.payload.id
      );
    },

    removeFromBlockList: (state, action) => {
      state.blockList = state.blockList.filter(
        (user) => user.id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })

      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {
  addFriend,
  addToBlockList,
  removeFromBlockList,
} = userSlice.actions;

export default userSlice.reducer;