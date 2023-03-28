import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// TYPES
import { IEventState, IEvent } from './event.model';

const initialState: IEventState = {
  events: []
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEvent: (state, { payload }: PayloadAction<IEvent>) => {
      state.events = [...state.events, payload];
    },

    updateEvent: (state, { payload }: PayloadAction<IEvent[]>) => {
      state.events = payload;
    }
  }
});

export const eventReducer = eventSlice.reducer;

export const {
  setEvent,
  updateEvent
} = eventSlice.actions;