import { Fragment, FC, PropsWithChildren, MouseEventHandler } from "react";
import clsx from "clsx";

interface ICalendarCellProps extends PropsWithChildren {
  className?: string;
  title?: string;
  isToday?: boolean;
  isSameMonth?: boolean;
  isSelected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CalendarCell: FC<ICalendarCellProps> = ({
  children,
  title,
  onClick,
  isToday = false,
  isSameMonth = false,
  isSelected = false,
  className = "",
}) => {
  const buttonClassNames = {
    "calendar-cell--isToday": isToday,
    "calendar-cell--isNotClickable": isToday || !isSameMonth || !onClick,
    "calendar-cell--isDisabled": !isSameMonth,
    "calendar-cell--isSelected": isSelected,
  };

  return (
    <Fragment>
      <button
        onClick={onClick && onClick}
        title={title}
        className={clsx("calendar-cell", buttonClassNames, className)}
      >
        {children}
      </button>
    </Fragment>
  );
};

export { CalendarCell as default };
