import type { TripData } from './types';

export const CURRENCY_RATES = {
  USD_TO_INR: 83.50,
  USD_TO_VND: 25450,
};

export const TRIP_DATA: TripData = {
  tourOverview: {
    provider: "The Wandering Souls",
    name: "AMAZING VIETNAM 9 DAYS 8 NIGHTS",
    type: "PRIVATE TOUR",
    travelDate: "Nov 2025",
    duration: "9 Days / 8 Nights",
    mealKey: "B = Breakfast, L = Lunch, D = Dinner",
  },
  guestDetails: {
    guestName: "Valued Guest",
    numberOfGuests: "6 Adults",
    nationality: "India",
    transferVehicle: "6 SEATS",
  },
  dayByDay: [
    {
      day: 1,
      title: "HO CHI MINH ARRIVAL - CITY TOUR - DINNER CRUISE - FLIGHT TO DANANG",
      destination: "Ho Chi Minh & Danang",
      meals: "None",
      activities: [
        "Private car pickup from airport and transfer to hotel for early check-in.",
        "13:00: Private car pickup for city tour.",
        "Visit Thien Hau Pagoda in China Town.",
        "Visit Bach Dang harbor for a water bus trip on the Saigon River.",
        "View city buildings including Vin homes Central Park, Landmark 81 tower, and Bitexco Financial Tower.",
        "15:30-18:00: Enjoy Bui Vien walking street.",
        "Proceed to the harbor for a Dinner cruise.",
        "21:30: Driver (no guide) provides pickup for the flight to Da Nang.",
        "Upon arrival in Da Nang, private transfer to the hotel and check-in.",
      ],
      inclusions: ["Private airport transfer", "Early check-in (Ho Chi Minh)", "Hotel in Danang", "Private Car", "Dinner cruise", "Entrance fee", "English speaking guide (city tour)"],
      imageUrl: "https://images.pexels.com/photos/13884824/pexels-photo-13884824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [10.7769, 106.7009],
      outfitSuggestion: {
        title: "City Chic & Airport Comfort",
        points: [
            "Wear lightweight, breathable fabrics like cotton or linen for the city tour.",
            "Comfortable walking shoes are a must for exploring.",
            "Consider bringing a change of clothes or layers for the evening flight to Da Nang."
        ]
      }
    },
    {
      day: 2,
      title: "MARBLE MOUNTAIN – MY SON SANCTUARY",
      destination: "Danang",
      meals: "B",
      activities: [
        "12:00: Pickup. Visit Non Nuoc Village (stone sculptures/handicrafts) at the foot of Marble Mountains.",
        "Explore temples and caves at Marble Mountains.",
        "13:00: Depart for My Son Sanctuary (World Heritage Site).",
        "14:45: Arrive at My Son Sanctuary. An electric car transfers you to the site.",
        "Enjoy a 2-hour walking tour to see Champa structures (4th-14th century).",
        "Watch Champa's traditional performance (Aspara Dance).",
        "16:30: Return to Danang city.",
      ],
      inclusions: ["Private Car", "Local English-speaking guide", "Entrance fee", "Hotel in Danang"],
      imageUrl: "https://images.pexels.com/photos/10047385/pexels-photo-10047385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [16.0545, 108.2022],
      outfitSuggestion: {
          title: "Explorer's Gear",
          points: [
              "Modest clothing (shoulders and knees covered) is recommended for visiting sacred sites.",
              "Sturdy, non-slip shoes are essential for climbing the steps at Marble Mountains.",
              "Bring a hat and sunglasses for sun protection during the outdoor tours."
          ]
      }
    },
    {
      day: 3,
      title: "DA NANG - BANA HILLS - HOI AN",
      destination: "Hoi An",
      meals: "B",
      activities: [
        "08:30: Meet guide and driver, head to Ba Na Hills.",
        "Take a Cable Car ride. Stop at By Night station to visit Vong Nguyet hills, Linh Ung pagoda, and The Old Villas of French.",
        "Continue via cable car to Nui Chua Mountain (top of Ba Na range).",
        "Visit Nghinh Phong top, Le Nim Villas, Orchid Garden.",
        "Experience the hill climbing train (funicular).",
        "Visit Debay Ancient Wine Cellar and Le Jardin D'amour (flower garden).",
        "Walk on the Golden Bridge.",
        "Afternoon: Free time for games in Fantasy Park.",
        "17:00: Transfer to Hoi An hotel.",
      ],
      inclusions: ["Private Car", "Local English-speaking guide", "Entrance fee", "Cable car", "Hotel in Hoian"],
      imageUrl: "https://images.pexels.com/photos/15600183/pexels-photo-15600183/free-photo-of-the-golden-bridge-in-ba-na-hills-vietnam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [15.8801, 108.338],
      outfitSuggestion: {
          title: "Mountain Layers",
          points: [
              "Ba Na Hills is at a high altitude and can be cool. Bring a light jacket or cardigan.",
              "Wear your most comfortable shoes, as this day involves a lot of walking.",
              "The weather can change quickly, so layering is the best strategy."
          ]
      }
    },
    {
      day: 4,
      title: "HOI AN ANCIENT TOWN - COCONUT FOREST",
      destination: "Hoi An",
      meals: "B",
      activities: [
        "Morning free for leisure.",
        "10:00-12:00: Tour Hoian ancient town. Visit Fukian Assembly Hall and the Japanese Covered Bridge. Time for shopping.",
        "13:00-16:00: Transfer to Cam Thanh Village to visit the Coconut Forest.",
        "Explore the forest via basket boats.",
        "Activities: Catching crabs and snails, making toys from coconut leaf.",
        "Join a basket boat race.",
        "Overnight in Hoian.",
      ],
      inclusions: ["Private Car", "Local English-speaking guide", "Entrance fee", "Hotel in Hoi An"],
      imageUrl: "https://images.pexels.com/photos/3620234/pexels-photo-3620234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [15.8801, 108.338],
      outfitSuggestion: {
          title: "Riverside Casual",
          points: [
              "A casual, cool outfit is perfect for the warm weather in Hoi An.",
              "A sun hat is highly recommended for both the town walk and the boat trip.",
              "You might get splashed during the basket boat ride, so wear quick-drying clothes."
          ]
      }
    },
    {
      day: 5,
      title: "FLIGHT TO HA NOI - HALF DAY CITY TOUR - SAPA",
      destination: "Hanoi & Sapa",
      meals: "B",
      activities: [
        "Driver (no guide) picks up 2.5 hours before flight to Hanoi.",
        "Arrive in Hanoi, private transfer to hotel (Check-in time: 14:00 PM).",
        "15:00 PM: Pickup for Hanoi city tour.",
        "Visit Tran Quoc Pagoda and West Lake (view sunset).",
        "Visit Dong Xuan Market for shopping and explore the Old Quarter.",
        "18:50: Visit Train Street (train passes at 19:00 PM). (Coffee/beer at own charge).",
        "20:00 PM: Return to hotel to rest and check out.",
        "21:00-21:30: Sapa night bus (VIP cabin bus) picks up from hotel (approx. 6-hour trip).",
      ],
      inclusions: ["Private Airport Transfer", "Private Car", "Hotel in Sapa", "Vip cabin bus"],
      imageUrl: "https://images.pexels.com/photos/13015488/pexels-photo-13015488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [21.0285, 105.8542],
      outfitSuggestion: {
          title: "City to Cabin Comfort",
          points: [
              "Lightweight attire for the Hanoi city tour.",
              "Change into very comfortable, loose-fitting clothes (like joggers and a hoodie) for the overnight bus to Sapa.",
              "Keep a scarf or light jacket handy on the bus as A/C can be strong."
          ]
      }
    },
    {
      day: 6,
      title: "SAPA - FANSIPAN PEAK - HANOI",
      destination: "Sapa & Hanoi",
      meals: "B",
      activities: [
        "~02:00 AM: Arrive in Sapa. Sleep on the bus until 6:00 AM.",
        "06:00: Private Car picks up and transfers to Sun World park to freshen up.",
        "07:00-08:30: Arrive at Fansipan cable car. Take the cable car to Fansipan peak (highest in Indochina).",
        "12:00: Lunch at a local restaurant (Guest's own charge).",
        "14:00: Get the bus to return to Ha Noi.",
        "21:00-22:00: Bus arrives in Ha Noi, drop off at hotel.",
      ],
      inclusions: ["English-speaking guide", "Entrance fee", "Cable car", "Hotel in Hanoi", "VIP Sleeper Bus"],
      imageUrl: "https://images.pexels.com/photos/11182849/pexels-photo-11182849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [22.3365, 103.8448],
      outfitSuggestion: {
          title: "Peak Performance Layers",
          points: [
              "Fansipan Peak is very high and can be cold and windy. Warm layers are essential.",
              "A windbreaker or waterproof jacket is highly recommended.",
              "Wear sturdy walking shoes with good grip."
          ]
      }
    },
    {
      day: 7,
      title: "HA NOI - NINH BINH – HOA LU - TAM COC - MUA CAVE",
      destination: "Ninh Binh",
      meals: "B, L",
      activities: [
        "07:25-08:00: Pickup from Hanoi Old Quarter/Opera House for Ninh Binh.",
        "09:15: Short 15-20 minute break.",
        "10:15: Visit Hoa Lu ancient capital.",
        "Go cycling around the village.",
        "12:00: Buffet lunch at NinhBinh Excursion Restaurant (includes local food like goat meat; vegetarian options available).",
        "13:30: Visit Tam Coc via a 1.5-hour bamboo boat trip.",
        "15:30: Transfer to Mua Cave (Dragon Peak).",
        "Walk up ~500 steps to Lying Dragon Mountain for a panoramic view of Tam Coc.",
        "17:00: Get on the bus to return to Hanoi.",
        "19:00: Dropped off at hotel in Hanoi.",
      ],
      inclusions: ["Shuttle transfer", "Local English-speaking guide", "Entrance fee", "Hotel in Ha Noi"],
      imageUrl: "https://images.pexels.com/photos/14838575/pexels-photo-14838575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [20.2550, 105.9745],
      outfitSuggestion: {
          title: "Active Adventurer",
          points: [
              "Sporty, breathable clothes are ideal for this active day of cycling and climbing.",
              "Wear excellent walking shoes for the ~500 steps up Mua Cave.",
              "Don't forget sun protection: a hat, sunglasses, and sunscreen are a must."
          ]
      }
    },
    {
      day: 8,
      title: "HANOI - HALONG BAY LUXURY DAY CRUISE",
      destination: "Halong Bay",
      meals: "B, L",
      activities: [
        "08:00 AM: Pickup from hotel after breakfast; leave for Ha Long Bay.",
        "12:00: Arrive at Tuan Chau Harbor and board the boat.",
        "12:30: Enjoy a set menu lunch while cruising past Fighting Chicken and Incense Burner Islets.",
        "14:00: Arrive at Bo Hon Island and visit Sung Sot Cave (Surprising Cave).",
        "14:45: Go kayaking or take a bamboo boat through Luon Cave.",
        "15:15: Visit TiTop Island for swimming or trekking to the top for sightseeing.",
        "16:00: Return to the boat for a sunset party (wine, fruits, biscuits).",
        "17:45: Arrive back at the harbor. Get on the bus to return to Hanoi.",
        "20:30: Dropped off at the hotel.",
      ],
      inclusions: ["Hotel in Hanoi", "Shuttle transfer (Halong Bay - Hanoi)", "Local English-speaking guide (on cruise)", "Entrance fee", "Kayaking", "Sunset party"],
      imageUrl: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [20.9101, 107.0760],
      outfitSuggestion: {
          title: "Nautical Style",
          points: [
              "Bring your swimsuit if you plan to swim at TiTop Island.",
              "Wear comfortable boat-friendly shoes (non-slip sandals or sneakers).",
              "A light jacket or wrap is great for the evening breeze during the sunset party."
          ]
      }
    },
    {
      day: 9,
      title: "HANOI DEPARTURE",
      destination: "Hanoi",
      meals: "B",
      activities: [
        "Breakfast at the hotel.",
        "Free time and check-out (standard check-out 12:00 PM ).",
        "Driver picks up 3.5 hours before the international departure flight.",
        "Transfer to the airport for the flight from HANOI to India.",
      ],
      inclusions: ["Private airport transfer"],
      imageUrl: "https://images.pexels.com/photos/1048238/pexels-photo-1048238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [21.0285, 105.8542],
      outfitSuggestion: {
          title: "Homeward Bound Comfort",
          points: [
              "Choose a comfortable outfit for your flight back home.",
              "Depending on your plans before checkout, wear something suitable for last-minute souvenir shopping or a final Vietnamese coffee."
          ]
      }
    },
  ],
  accommodation: {
    category: "3 STAR Hotel",
    hotels: [
      { city: "HANOI", name: "Golden Rooster / Sono hotel", roomType: "Superior Window" },
      { city: "DA NANG", name: "Nguyen Gia Hotel", roomType: "Superior city view" },
      { city: "HOI AN", name: "Kim An Hotel", roomType: "Superior room" },
      { city: "HO CHI MINH CITY", name: "Prague Hotel / Duc Vuong hotel", roomType: "Superior Window" },
    ],
  },
  tourCost: {
    category: "06 Adults",
    costs: [
      { description: "Hotel 3 star + Land tour (Mixed tour)", price: "636 USD / Person" },
      { description: "Land tour only", price: "460 USD / Person" },
    ],
  },
  generalInclusionsExclusions: {
    inclusions: [
      "Hotel accommodation (double/twin/triple sharing) with daily breakfast.",
      "Private airport transfers with A/C.",
      "A/C shuttle bus for joining group tours (if mentioned as SIC).",
      "Private transfers for private tours.",
      "Meals as indicated in the program (B/L/D).",
      "Complimentary Mineral Water (01-02 bottles/guest/day).",
      "Entrance fees, boat trips, and excursions.",
      "Excellent local English-speaking guide on-site for group tours.",
    ],
    exclusions: [
      "Visa Service.",
      "GST and TCS tax.",
      "International flights and airport tax.",
      "Meals not mentioned in the program.",
      "Beverages and personal expenses.",
      "Travel Insurance.",
      "Tipping for tour guide, driver, servers, porters.",
      "Single Supplement, early check-in/late check-out, and hotel/room upgrades (unless mentioned).",
      "Surcharges for Peak season: Xmas, New Year, Tet Holiday, and National Holidays.",
      "Any other items not specified.",
    ],
  },
  termsAndConditions: {
    paymentTerm: {
      deposit: "50% of tour cost required after booking confirmation.",
      balance: "To be collected at the hotel on the arrival day.",
    },
    cancellationPolicy: {
      title: "Cancellation Policy",
      policies: [
        "Flights: All flights are non-refundable.",
        "60 days prior to arrival: No cancellation charge (100% Money Back Guarantee, excluding non-refundable flights).",
        "59 - 30 days prior to arrival: 10% cancellation charge.",
        "29 - 15 days prior to arrival: 20% cancellation charge.",
        "14 - 8 days prior to arrival: 50% cancellation charge.",
        "7 days prior to arrival: 100% cancellation charge.",
        "No show: 100% cancellation charge.",
      ]
    },
    importantNotes: [
      "Visa: Vietnam Online Visa is required to be done in advance.",
      "International Flights: To be booked by the clients.",
      "Availability: Prices are subject to availability at the time of booking. Services are not booked until confirmation is received.",
      "Surcharges: Supplementary charges may apply during peak times.",
      "Hotel Check-in: 14:00 PM.",
      "Hotel Check-out: 12:00 PM. (Surcharges apply for early check-in or late check-out).",
    ],
  },
  flightData: [
    {
      route: "Mumbai to Ho Chi Minh",
      tickets: [
        { passengers: "Kunjan", url: "https://drive.google.com/file/d/1IO9-Yqm1nbSFy9OnAV0V5tq6ObL-szS7/view?usp=drive_link" },
        { passengers: "Sneha, Shilpa & Raj", url: "https://drive.google.com/file/d/1t8PV0ztFboR6xncE8DUZxerUK7tmoGRh/view?usp=drive_link" },
      ]
    },
    {
      route: "Hanoi to Mumbai",
      tickets: [
        { passengers: "Akshay, Kunjan & Rahul", url: "https://drive.google.com/file/d/1KKAvEuYenBA0LCaqCaxl5vjnjWLeT1VA/view?usp=drive_link" },
        { passengers: "Sneha, Shilpa & Raj", url: "https://drive.google.com/file/d/1KKAvEuYenBA0LCaqCaxl5vjnjWLeT1VA/view?usp=drive_link" },
      ]
    }
  ],
  visaData: [
    { name: "Kunjan", url: "#" },
    { name: "Akshay", url: "#" },
    { name: "Rahul", url: "#" },
    { name: "Sneha", url: "#" },
    { name: "Raj", url: "#" },
  ],
};