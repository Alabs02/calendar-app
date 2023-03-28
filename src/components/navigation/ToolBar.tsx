import { Fragment } from "react";
import { format, parse, startOfToday } from "date-fns";

// COMPONENTS
import { OutlinedButton } from '@/components/core';

// STATIC ASSEST
import { staticImg } from "@/assets";

// ICONS
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

// STORE
import { useAppSelector, useAppDispatch } from '@/store';
import { setCurrentMonth } from '@/store/slices/date';

const ToolBar = () => {
  const dispatch = useAppDispatch();

  const { currentMonth } = useAppSelector((state) => state.date);
  
  const currentDate = parse(currentMonth, "MMM-yyyy", new Date());

  return (
    <Fragment>
      <div className="tool-bar">
        <div className="tool-bar__brand-logo">
          <div className="tool-bar__media">
            <img
              src={staticImg.BRAND_LOGO}
              alt="Jobsity Calendar App Brand Logo"
              className="tool-bar__img"
              draggable={false}
            />
          </div>

          <div className="tool-bar__title">Jobsity Calendar</div>
        </div>

        <OutlinedButton
          size={'sm'}
          copy={'Today'}
          onClick={() => dispatch(setCurrentMonth(format(startOfToday(), 'MMM-yyyy')))}
          colorVariant={'secondary'}
          prependChildren={<CalendarDaysIcon className="w--16 h--16" />}
        />

        <div className="tool-bar__heading">{format(currentDate, 'MMMM yyyy')}</div>
      </div>
    </Fragment>
  );
};

export { ToolBar as default };
