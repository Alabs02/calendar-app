
import {  PropsWithChildren, MouseEventHandler, ReactNode } from 'react';
import { EColorVariant, EButtonSize } from '@/enums';

import { IEvent } from "@/store/slices/event";

export * from './event-card';

export interface IBadgeProps {
  text: string;
  className?: string;
  colorVariant?: EColorVariant | string;
}

export interface ICalendarCellProps extends PropsWithChildren {
  className?: string;
  title?: string;
  isToday?: boolean;
  isSameMonth?: boolean;
  isSelected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ICalendarTableProps {
  today?: Date;
  events: IEvent[];
  selectedDay?: Date;
  currentMonth?: string;
  onChangeDate?: (type: string, payload: Date) => void;
}

export interface ICustomCalendarProps {
  today?: Date;
  className?: string;
  selectedDay?: Date;
  currentMonth?: string;
  events?: any[];
  onChangeDate?: (type: string, payload: Date) => void;
}

export interface IOutlinedButtonProps {
  copy: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  appendChildren?: ReactNode;
  prependChildren?: ReactNode;
  size?: EButtonSize | string;
  colorVariant?: EColorVariant | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ITableCellProps {
  day: Date;
  events: IEvent[];
  isToday?: boolean;
  isSameMonth?: boolean;
  isSelected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface IErrorMsgProps {
  name: string
}

export interface IAddReminderModalProps {
  isVisible: boolean;
  onCloseModal: () => void;
}

export interface IEditReminderModalProps {
  isVisible: boolean;
  eventPayload: IEvent;
  onCloseModal: () => void;
}