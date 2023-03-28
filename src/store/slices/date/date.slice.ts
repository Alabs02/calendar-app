import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { format, parse, startOfToday } from 'date-fns';
// import { dateReducer } from './date.reducer';

// TYPES
import { IDateState } from './date.model';

const initialState: IDateState = {
  today: startOfToday().toISOString(),
  selectedDay: startOfToday().toISOString(),
  currentMonth: format(startOfToday(), 'MMM-yyyy')
};

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setToday: (state, { payload }: PayloadAction<string>) => {
      state.today = payload;
    },
  
    setSelectedDay: (state, { payload }: PayloadAction<string>) => {
      state.selectedDay = payload;
    },
  
    setCurrentMonth: (state, { payload }: PayloadAction<string>) => {
      state.currentMonth = payload;
    }
  }
});

export const dateReducer = dateSlice.reducer;

export const {
  setToday,
  setSelectedDay,
  setCurrentMonth  
}  = dateSlice.actions;