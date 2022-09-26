export interface SearchResponse {
  type: string;
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  price: Price;
  links: Links;
}

export interface Links {
  flightDates: string;
  flightOffers: string;
}

export interface Price {
  total: string;
}
export interface ApiResponse {
  data: SearchResponse[];
}
