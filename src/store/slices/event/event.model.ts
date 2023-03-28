export interface IEventPayload {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  city: string;
  description: string;
}

export interface IEvent extends IEventPayload {
  id: string;
}

export interface IEventState {
  events: IEvent[];
}