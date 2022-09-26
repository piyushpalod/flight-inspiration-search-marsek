export interface SearchViewModel {
  origin: string;
  departureDate: string;
  oneWay: boolean;
  duration: string;
  nonStop: boolean;
  maxPrice: number;
  viewBy?: ViewType;
}
export enum ViewType {
  COUNTRY,
  DATE,
  DESTINATION,
  DURATION,
  WEEK,
}
