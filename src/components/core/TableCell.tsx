import { Fragment, FC, MouseEventHandler } from 'react';
import { format } from 'date-fns';
import clsx from 'clsx';

// COMPONENTS
import { Badge } from '@/components/core';

// INTERFACES
interface ITableCellProps {
  day: Date;
  events: any[];
  isToday?: boolean;
  isSameMonth?: boolean;
  isSelected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const TableCell: FC<ITableCellProps> = ({
  day,
  events,
  onClick,
  isToday = false,
  isSameMonth = false,
  isSelected = false
}) => {
  const buttonClassNames = {
    "table-cell--isToday": isToday,
    "calendar-cell--isNotClickable": isToday || !isSameMonth || !onClick,
    "calendar-cell--isDisabled": !isSameMonth,
    "table-cell--isSelected": isSelected,
  };

  return (
    <Fragment>
      <button onClick={onClick && onClick} className={clsx("table-cell", buttonClassNames)}>
        <span className="table-cell__copy">{format(day, 'd')}</span>


        <div className="table-cell__container">
          {
            events.map((calendarEvent, index) => (
              <Badge key={index} text={'API Connect Walk Through Meeting'} colorVariant={'accent'} />
            ))
          }
        </div>
      </button>
    </Fragment>
  );
}

export { TableCell as default };