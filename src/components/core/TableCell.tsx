import { Fragment, FC, MouseEventHandler } from 'react';
import { format, isSameDay, parseISO } from 'date-fns';
import clsx from 'clsx';

// COMPONENTS
import { Badge } from '@/components/core';
import { IEvent } from '@/store/slices/event';

// INTERFACES
import { IComponent } from '@/interfaces'


const TableCell: FC<IComponent.ITableCellProps> = ({
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

  const filteredEvent: IEvent[] = events.filter((_event) =>
    isSameDay(parseISO(_event.date), day),
  );

  return (
    <Fragment>
      <button onClick={onClick && onClick} className={clsx("table-cell", buttonClassNames)}>
        <span className="table-cell__copy">{format(day, 'd')}</span>


        <div className="table-cell__container">
          {
            filteredEvent.map((calendarEvent) => (
              <Badge key={calendarEvent.id} text={calendarEvent.description} colorVariant={'accent'} />
            ))
          }
        </div>
      </button>
    </Fragment>
  );
}

export { TableCell as default };