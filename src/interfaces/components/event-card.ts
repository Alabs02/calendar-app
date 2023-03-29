import { IEvent } from "@/store/slices/event";

export interface IStateDetail {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
}

export interface IAdministrativeArea extends IStateDetail {
  Level: number;
  LocalizedType: string;
  EnglishType: string;
  CountryID: string;
}

export interface ITimeZone {
  Code: string;
  Name: string;
  GmtOffset: number;
  IsDaylightSaving: boolean;
  NextOffsetChange: null;
}

export interface ILocationKeyResponse {
  version: number;
  Key: string;
  LocalizedName: string;
  EnglishName: string;
  Region: IStateDetail;
  Country: IStateDetail;
  AdministrativeArea: IAdministrativeArea;
  TimeZone: ITimeZone;
}

export interface IHeadline {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: string;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
}

export interface IMinMax {
  Unit: string;
  Value: number;
  UnitType: number;
}

export interface ITemperature {
  Minimum: IMinMax;
  Maximum: IMinMax;
}

export interface IDetail {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: string;
  PrecipitationType: string;
  PrecipitationIntensity: string;
}

export interface IForecast {
  Date: string;
  EpochDate: string;
  Temperature: ITemperature;
  Day: IDetail;
  Night: IDetail;
}

export interface IDailyForecast {
  Headline: IHeadline;
  DailyForecasts: IForecast[];
}

export interface IEventCardProps {
  className?: string;
  eventPayload: IEvent;
}