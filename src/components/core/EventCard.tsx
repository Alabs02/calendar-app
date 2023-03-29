import { Fragment, FC, useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { toast } from "material-react-toastify";
import clsx from "clsx";

// AXIOS
import { AxiosResponse } from "axios";

// COMPONENTS
import { EditReminderModal } from "@/components/modals";

// UTILS
import { formatTime } from "@/utils/helpers";

// ICONS
import {
  CalendarDaysIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

// API CLIENT
import { $api } from "@/services";

// API ROUTES
import { apiRoutes } from "@/utils/constants";

// INTERFACES
import { IEvent } from "@/store/slices/event";
import { IComponent } from '@/interfaces';




const EventCard: FC<IComponent.IEventCardProps> = ({ eventPayload, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dailyForecast, setDailyForecast] = useState<IComponent.IDailyForecast>(
    {} as IComponent.IDailyForecast,
  );

  const handleOnCloseModal = () => setIsVisible(false);

  const getLocationKey = async (): Promise<string | undefined> => {
    const locationKeyResponse = await $api
      .service()
      .prependBaseURL(process.env.REACT_APP_ACC_BASE_API_URL || "")
      .get<IComponent.ILocationKeyResponse[]>({
        params: {
          apikey: process.env.REACT_APP_ACCU_WAETHER_API_KEY,
          q: eventPayload.city,
          details: false,
          language: "en-us",
        },
        url: apiRoutes.LOCATION_KEY,
      });

    return !!locationKeyResponse.length
      ? locationKeyResponse[0]["Key"]
      : undefined;
  };

  const getDailyForecast = async () => {
    setIsLoading(true);

    let locationKey = await getLocationKey();

    if (!locationKey) {
      setIsLoading(false);
      toast.error("Event City is invalid!");
    }

    const dailyForecastResponse = await $api
      .service()
      .prependBaseURL(process.env.REACT_APP_ACC_BASE_API_URL || "")
      .get<IComponent.IDailyForecast>({
        params: {
          apikey: process.env.REACT_APP_ACCU_WAETHER_API_KEY,
          metric: false,
          details: false,
          language: "en-us",
        },
        url: `${apiRoutes.DAILY_FORECAST}${locationKey}`,
      });

    setDailyForecast(dailyForecastResponse);

    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  };

  const getCategory = () => {
    if (!dailyForecast?.Headline?.Category) return "Nil";
    return `A ${dailyForecast?.Headline?.Category} ${format(
      parseISO(eventPayload.date),
      "EEEE",
    )}`;
  };

  const getTemperature = () => {
    const minimumTemperature = (!!dailyForecast?.DailyForecasts)
      ? dailyForecast?.DailyForecasts[0].Temperature.Minimum
      : {} as IComponent.IMinMax;

    if (!Object.keys(minimumTemperature).length)
      return {
        content: "Nil",
        unit: "",
      };

    return {
      content: `${minimumTemperature?.Value}`,
      unit: minimumTemperature?.Unit === "F" ? <>&#8457;</> : <>&#x2109;</>,
    };
  };

  useEffect(() => {
    getDailyForecast();
  }, []);

  return (
    <Fragment>
      <div className={clsx("event-card", className)}>
        <div className="event-card__media">
          <CalendarDaysIcon className="h--32 w--32 text--accent" />
        </div>

        <div className="event-card__body">
          <div className="event-card__heading has-text-weight-semibold">
            {eventPayload.title}
          </div>
          <div className="event-card__subheading">
            {formatTime(eventPayload.startTime)} -{" "}
            {formatTime(eventPayload.endTime)}
          </div>

          <div className="event-card__footer">
            <div className="event-card__footer-text is-uppercase">
              {format(parseISO(eventPayload.date), "E")},{" "}
              {format(parseISO(eventPayload.date), "do")}
            </div>

            {isLoading ? (
              <div className="ssc-line  wf--20"></div>
            ) : (
              <div className="event-card__footer-text has-text-weight-bold">
                {getTemperature().content} {getTemperature().unit}
              </div>
            )}

            {isLoading ? (
              <div className="ssc-line wf--40"></div>
            ) : (
              <div className="event-card__footer-text is-capitalized">
                {getCategory()}
              </div>
            )}
          </div>
        </div>

        <button title={"Edit"} onClick={() => setIsVisible(!isVisible)}>
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
