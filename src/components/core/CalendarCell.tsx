import { Fragment, FC, PropsWithChildren, MouseEventHandler } from "react";
import clsx from "clsx";

// INTERFACES
import { IComponent } from '@/interfaces';

const CalendarCell: FC<IComponent.ICalendarCellProps> = ({
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
