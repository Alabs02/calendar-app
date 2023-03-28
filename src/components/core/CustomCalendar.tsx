import { Fragment, FC } from "react";
import clsx from "clsx";
import {
  startOfToday,
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  startOfWeek,
  isToday,
  isSameMonth,
  isEqual,
  parse,
  add,
  sub,
  parseISO,
  isSameDay,
} from "date-fns";

// COMPONENTS
import { CalendarCell } from "@/components/core";

// ICONS
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

// JSON
import { _days } from "@/json";

// TODO: Move to interface and enum folders respectively
enum ESetDateType {
  SET_TODAY = "set-today",
  SET_SELECTED_DAY = "set-selected-day",
  SET_CURRENT_MONTH = "set-current-month",
  SET_FIRST_DAY_OF_CURRENT_MONTH = "set-first-day-of-current-month",
}

interface ICustomCalendarProps {
  today?: Date;
  className?: string;
  selectedDay?: Date;
  currentMonth?: string;
  events?: any[];
  onChangeDate?: (type: string, payload: Date) => void;
}

const CustomCalendar: FC<ICustomCalendarProps> = ({
  today = startOfToday(),
  selectedDay = today,
  currentMonth = format(today, "MMM-yyyy"),
  className = "",
  events = [],
  onChangeDate,
}) => {
  const firstDayOfCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const daysOfMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(firstDayOfCurrentMonth)),
    end: endOfWeek(endOfMonth(firstDayOfCurrentMonth)),
  });

  const nextMonth = (): void => {
    const firstDayOfNextMonth = add(firstDayOfCurrentMonth, { months: 1 });
    onChangeDate &&
      onChangeDate(ESetDateType.SET_CURRENT_MONTH, firstDayOfNextMonth);
  };

  const nextYear = (): void => {
    const firstDayOfNextMonth = add(firstDayOfCurrentMonth, { years: 1 });
    onChangeDate &&
      onChangeDate(ESetDateType.SET_CURRENT_MONTH, firstDayOfNextMonth);
  };

  const previousMonth = (): void => {
    const firstDayOfNextMonth = sub(firstDayOfCurrentMonth, { months: 1 });
    onChangeDate &&
      onChangeDate(ESetDateType.SET_CURRENT_MONTH, firstDayOfNextMonth);
  };

  const previousYear = (): void => {
    const firstDayOfNextMonth = sub(firstDayOfCurrentMonth, { years: 1 });
    onChangeDate &&
      onChangeDate(ESetDateType.SET_CURRENT_MONTH, firstDayOfNextMonth);
  };

  return (
    <Fragment>
      <div className={clsx("custom-calendar", className)}>
        <div className="custom-calendar__header">
          <button
            title={"Previous Year"}
            className="custom-calendar__icon-btn col-span-1"
            onClick={previousYear}
          >
            <ChevronDoubleLeftIcon />
          </button>

          <button
            title={"Previous Month"}
            className="custom-calendar__icon-btn col-span-1"
            onClick={previousMonth}
          >
            <ChevronLeftIcon />
          </button>

          <div className="custom-calendar__heading col-span-3">
            {format(firstDayOfCurrentMonth, "MMMM yyyy")}
          </div>

          <button
            title={"Next Month"}
            className="custom-calendar__icon-btn col-span-1"
            onClick={nextMonth}
          >
            <ChevronRightIcon />
          </button>

          <button
            title={"Next Year"}
            className="custom-calendar__icon-btn col-span-1"
            onClick={nextYear}
          >
            <ChevronDoubleRightIcon />
          </button>
        </div>

        <div className="custom-calendar__panel">
          {_days.map((day) => (
            <CalendarCell
              key={day.short}
              isSameMonth={true}
              className="custom-calendar__panel-item"
            >
              {day.short}
            </CalendarCell>
          ))}
        </div>

        <div className="custom-calendar__content">
          {daysOfMonth.map((day) => (
            <CalendarCell
              key={day.toJSON()}
              isToday={isToday(day)}
              isSelected={isEqual(day, selectedDay)}
              isSameMonth={isSameMonth(day, firstDayOfCurrentMonth)}
              title={format(day, "d MMMM, yyyy")}
              onClick={() =>
                onChangeDate && onChangeDate(ESetDateType.SET_SELECTED_DAY, day)
              }
            >
              <div className="grid place-items-center">
                {format(day, "d")}

                {events.some((_event) =>
                  isSameDay(parseISO(_event.date), day),
                ) && <div className="calendar-page__indicator mt-1"></div>}
              </div>
            </CalendarCell>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export { CustomCalendar as default };
