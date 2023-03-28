import { IDateState } from './date';
import { IEventState } from './event';

export interface CombinedRootState {
  date: IDateState;
  event: IEventState;
}