import { Fragment, FC } from "react";

// JSON
import { _days } from "@/json";

// COMPONENTS
import { TableCell } from "@/components/core";
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns";

// INTERFACES
// TODO: Move to interface and enum folders respectively
enum ESetDateType {
  SET_TODAY = "set-today",
  SET_SELECTED_DAY = "set-selected-day",
  SET_CURRENT_MONTH = "set-current-month",
  SET_FIRST_DAY_OF_CURRENT_MONTH = "set-first-day-of-current-month",
}

interface ICalendarTableProps {
  today?: Date;
  selectedDay?: Date;
  currentMonth?: string;
  onChangeDate?: (type: string, payload: Date) => void;
}

const CalendarTable: FC<ICalendarTableProps> = ({
  today = startOfToday(),
  selectedDay = today,
  currentMonth = format(today, "MMM-yyyy"),
  onChangeDate,
}) => {
  const firstDayOfCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const daysOfMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(firstDayOfCurrentMonth)),
    end: endOfWeek(endOfMonth(firstDayOfCurrentMonth)),
  });

  return (
    <Fragment>
      <table className="calendar-table">
        <thead className="calendar-table__thead">
          <tr className="calendar-table__trow">
            {_days.map((day) => (
              <th key={day.short} className="calendar-table__th">
                {day.short}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="calendar-table__tbody">
          <tr className="calendar-table__trow">
            {daysOfMonth.map((day) => (
              <td key={day.toJSON()} className="calendar-table__td">
                <TableCell
                  key={day.toJSON()}
                  day={day}
                  events={[]}
                  isToday={isToday(day)}
                  isSameMonth={isSameMonth(day, firstDayOfCurrentMonth)}
                  isSelected={isEqual(day, selectedDay)}
                  onClick={() =>
                    onChangeDate &&
                    onChangeDate(ESetDateType.SET_SELECTED_DAY, day)
                  }
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export { CalendarTable as default };
