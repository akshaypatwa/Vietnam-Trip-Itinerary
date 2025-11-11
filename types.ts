

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
  tourCode: string;
  phone: string;
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
  isHighlight?: boolean;
  bannerSummary?: string;
  outfitSuggestion?: {
    title: string;
    points: string[];
  };
}

export interface HotelStay {
    city: string;
    name: string;
    bookingUrl: string;
    dates: string;
    nights: string;
    rooms: string;
    coversDays: string;
    notes?: string;
}

export interface Accommodation {
  category: string;
  hotels: HotelStay[];
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

export interface FlightInfo {
  route: string;
  url: string;
}

export type FlightData = FlightInfo[];

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