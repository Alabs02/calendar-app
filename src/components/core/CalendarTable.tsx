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
import { ESetDateType } from '@/enums';
import { IComponent } from '@/interfaces';



const CalendarTable: FC<IComponent.ICalendarTableProps> = ({
  events,
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
                  events={events}
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
