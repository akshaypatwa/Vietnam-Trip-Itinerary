

export interface TourOverview {
  provider: string;
  name: string;
  type: string;
  travelDate: string;
  duration: string;
  mealKey: string;
}

export interface GuestDetails {
  guestName: string;
  numberOfGuests: string;
  nationality: string;
  transferVehicle: string;
}

export interface DayPlan {
  day: number;
  title: string;
  destination: string;
  meals: string;
  activities: string[];
  inclusions: string[];
  imageUrl: string;
  coords: [number, number];
  outfitSuggestion?: {
    title: string;
    points: string[];
  };
}

export interface Accommodation {
  category: string;
  hotels: {
    city: string;
    name: string;
    roomType: string;
  }[];
}

export interface TourCost {
  category: string;
  costs: {
    description: string;
    price: string;
  }[];
}

export interface InclusionsExclusions {
  inclusions: string[];
  exclusions: string[];
}

export interface TermsAndConditions {
  paymentTerm: {
    deposit: string;
    balance: string;
  };
  cancellationPolicy: {
    title: string;
    policies: string[];
  };
  importantNotes: string[];
}

export interface FlightTicket {
  passengers: string;
  url: string;
}

export interface FlightRoute {
  route: string;
  tickets: FlightTicket[];
}

export type FlightData = FlightRoute[];

export interface VisaInfo {
  name: string;
  url: string;
}

export interface TripData {
  tourOverview: TourOverview;
  guestDetails: GuestDetails;
  dayByDay: DayPlan[];
  accommodation: Accommodation;
  tourCost: TourCost;
  generalInclusionsExclusions: InclusionsExclusions;
  termsAndConditions: TermsAndConditions;
  flightData: FlightData;
  visaData: VisaInfo[];
}