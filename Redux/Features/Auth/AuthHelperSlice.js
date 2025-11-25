import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessionId: null,
  time: 0,
  prevSend: false,
};

export const authHelperSlice = createSlice({
  name: "authHelper",
  initialState,
  reducers: {
    setTime: (state, action) => {
      const { sessionId, time, prevSend } = action.payload;
      state.sessionId = sessionId;
      state.time = time;
      state.prevSend = prevSend;
    },
  },
});

export const { setTime } = authHelperSlice.actions;
export default authHelperSlice.reducer;
