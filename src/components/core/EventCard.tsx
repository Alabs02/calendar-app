import { Fragment, FC, useState } from "react";
import { format, parseISO } from 'date-fns';
import clsx from "clsx";

// COMPONENTS
import { EditReminderModal } from '@/components/modals';

// UTILS
import { formatTime } from '@/utils/helpers';

// ICONS
import { CalendarDaysIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

// INTERFACES
import { IEvent } from '@/store/slices/event'; 

interface IEventCardProps  {
  className?: string;
  eventPayload: IEvent;
}

const EventCard: FC<IEventCardProps> = ({ eventPayload, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOnCloseModal = () => setIsVisible(false);

  return (
    <Fragment>
      <div className={clsx("event-card", className)}>
        <div className="event-card__media">
          <CalendarDaysIcon className="h--32 w--32 text--accent" />
        </div>

        <div className="event-card__body">
          <div className="event-card__heading has-text-weight-semibold">{eventPayload.title}</div>
          <div className="event-card__subheading">{formatTime(eventPayload.startTime)} - {formatTime(eventPayload.endTime)}</div>

          <div className="event-card__footer">
            <div className="event-card__footer-text is-uppercase">{format(parseISO(eventPayload.date), 'E')}, {format(parseISO(eventPayload.date), 'do')}</div>

            <div className="event-card__footer-text has-text-weight-bold">24</div>

            <div className="event-card__footer-text">Rainy</div>
          </div>
        </div>

        <button title={'Edit'} onClick={() => setIsVisible(!isVisible)}>
          <PencilSquareIcon className="h--24 w--24 text--primary" />
        </button>
      </div>

      {/* MODALS */}
      <EditReminderModal
        eventPayload={eventPayload}
        isVisible={isVisible}
        onCloseModal={handleOnCloseModal}
      />
    </Fragment>
  );
};

export { EventCard as default };
