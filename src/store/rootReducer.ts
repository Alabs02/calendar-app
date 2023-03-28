import { combineReducers } from '@reduxjs/toolkit';

// COMBINED STATE
import { CombinedRootState } from './slices';

// REDUCERS
import { dateReducer } from './slices/date';
import { eventReducer } from './slices/event';

const rootReducer = combineReducers<CombinedRootState>({
  date: dateReducer,
  event: eventReducer
});


export { rootReducer as default };