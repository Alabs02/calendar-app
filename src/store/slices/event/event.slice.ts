import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// TYPES
import { IEventState, IEvent } from "./event.model";

const initialState: IEventState = {
  events: [
    {
      city: "Lagos",
      date: "2023-03-30T23:00:00.000Z",
      description: "Jobsity Developer's Meetup",
      endTime: "13:00",
      id: "1",
      startTime: "10:00",
      title: "Jobsity Dev Meetup",
    },
  ],
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvent: (state, { payload }: PayloadAction<IEvent>) => {
      state.events = [...state.events, payload];
    },

    updateEvent: (state, { payload }: PayloadAction<IEvent[]>) => {
      state.events = payload;
    },
  },
});

export const eventReducer = eventSlice.reducer;

export const { setEvent, updateEvent } = eventSlice.actions;
