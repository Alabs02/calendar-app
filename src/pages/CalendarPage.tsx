import { Fragment, useState } from "react";
import { format, isSameDay, parse, parseISO } from "date-fns";

// COMPONENTS
import {
  OutlinedButton,
  CustomCalendar,
  CalendarTable,
  EventCard,
} from "@/components/core";
import { Toolbar } from "@/components/navigation";
import { AddReminderModal } from "@/components/modals";

// ICONS
import { PlusSmallIcon } from "@heroicons/react/24/outline";

// STORE HOOKS
import { useAppDispatch, useAppSelector } from "@/store";
import { setCurrentMonth, setSelectedDay, setToday } from "@/store/slices/date";
import { IEvent } from "@/store/slices/event";

// TODO: Move to interface and enum folders respectively
enum ESetDateType {
  SET_TODAY = "set-today",
  SET_SELECTED_DAY = "set-selected-day",
  SET_CURRENT_MONTH = "set-current-month",
}

const CalendarPage = () => {
  const dispatch = useAppDispatch();
  const { today, currentMonth, selectedDay } = useAppSelector(
    (state) => state.date,
  );

  const { events } = useAppSelector((state) => state.event);

  const [isVisible, setIsVisible] = useState(false);

  const currentDate = parseISO(selectedDay);

  const handleOnChangeDate = (type: ESetDateType | string, payload: Date) => {
    switch (type) {
      case ESetDateType.SET_TODAY:
        dispatch(setToday(payload.toISOString()));
        break;
      case ESetDateType.SET_SELECTED_DAY:
        dispatch(setSelectedDay(payload.toISOString()));
        break;
      case ESetDateType.SET_CURRENT_MONTH:
        dispatch(setCurrentMonth(format(payload, "MMM-yyyy")));
        break;
      default:
        undefined;
        break;
    }
  };

  const handleOnCloseModal = () => setIsVisible(false);

  const filteredEvent: IEvent[] = events.filter((_event) =>
    isSameDay(parseISO(_event.date), parseISO(selectedDay)),
  );

  return (
    <Fragment>
      <div className="calendar-page">
        <Toolbar />

        <section className="calendar-page__layout">
          <div className="calendar-page__sidebar">
            <OutlinedButton
              onClick={() => setIsVisible(!isVisible)}
              copy={"Add Reminder"}
              colorVariant={"primary"}
              prependChildren={<PlusSmallIcon className=" h--24 w--24" />}
            />

            <div className="calendar-page__calendar">
              <CustomCalendar
                today={parseISO(today)}
                events={events}
                selectedDay={parseISO(selectedDay)}
                currentMonth={currentMonth}
                onChangeDate={handleOnChangeDate}
              />
            </div>

            <div className="calendar-page__section">
              <div className="calendar-page__heading mb-8">
                Schedule for {format(currentDate, "MMMM d, yyyy")}
              </div>
              {filteredEvent.map((_event) => (
                <EventCard key={_event.id} eventPayload={_event} />
              ))}

              {!filteredEvent.length && (
                <div className="mt-4 is-size-5">No events for this day!</div>
              )}
            </div>
          </div>

          <div className="calendar-page__main">
            <CalendarTable
              today={parseISO(today)}
              selectedDay={parseISO(selectedDay)}
              currentMonth={currentMonth}
              onChangeDate={handleOnChangeDate}
            />
          </div>
        </section>
      </div>

      {/* MODALS */}
      <AddReminderModal
        isVisible={isVisible}
        onCloseModal={handleOnCloseModal}
      />
    </Fragment>
  );
};

export { CalendarPage as default };
