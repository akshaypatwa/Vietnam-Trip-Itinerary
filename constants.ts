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
    guestName: "Raj Pawar",
    numberOfGuests: "6 Adults",
    nationality: "India",
    transferVehicle: "6 SEATS",
    tourCode: "NA",
    phone: "N/A",
  },
  dayByDay: [
    {
      day: 1,
      title: "HO CHI MINH ARRIVAL - CITY TOUR - DINNER CRUISE - FLIGHT TO DANANG",
      destination: "Ho Chi Minh & Danang",
      meals: "None",
      bannerSummary: "City Tour, Dinner Cruise & Flight to Danang",
      activities: [
        "05:30 AM: Arrive at Ho Chi Minh Airport, complete immigration.",
        "07:00 AM: Private transfer to KT MERAKI BOUTIQUE hotel for day use.",
        "Take a quick nap until noon. Check out at 12:00 PM and store luggage at the hotel.",
        "12:00 PM - 17:00 PM: Private car pickup for city tour.",
        "Visit Thien Hau Pagoda in China Town.",
        "Visit Bach Dang harbor for a water bus trip on the Saigon River.",
        "18:00 PM - 21:30 PM: Enjoy a Dinner cruise and explore the vibrant Bui Vien Walking Street.",
        "21:30 PM: Driver provides pickup for the flight to Da Nang (Flight cost approx. 18K INR for 6 people).",
        "Upon arrival in Da Nang, private transfer to the hotel and check-in for the night.",
      ],
      inclusions: ["Private airport transfer", "Day use hotel in Ho Chi Minh", "Hotel in Danang", "Private Car", "Dinner cruise", "Entrance fee", "English speaking guide (city tour)"],
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
      bannerSummary: "Marble Mountains & My Son Sanctuary",
      activities: [
        "12:00 PM - 17:00 PM: Pickup. Visit Non Nuoc Village (stone sculptures/handicrafts) at the foot of Marble Mountains.",
        "Explore temples and caves at Marble Mountains, then depart for My Son Sanctuary (World Heritage Site).",
        "Enjoy a 2-hour walking tour to see Champa structures and watch a traditional Aspara Dance.",
        "17:00 PM - 19:00 PM: Relax at My Khen or Phan Man Thai Beach.",
        "19:00 PM onwards: Visit the famous Dragon Bridge and explore the city's nightlife.",
        "Return to hotel to sleep early.",
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
      bannerSummary: "Ba Na Hills with Golden Bridge",
      activities: [
        "08:00 AM: Check out from hotel and head to Ba Na Hills.",
        "09:00 AM - 17:00 PM: Full day of activities at Ba Na Hills (Entrance/activities approx. 19k INR for 6 people).",
        "Take a Cable Car ride, visit Vong Nguyet hills, Linh Ung pagoda, and The Old Villas of French.",
        "Experience the hill climbing train (funicular) and walk on the Golden Bridge.",
        "Afternoon: Free time for games in Fantasy Park.",
        "18:00 PM - 20:00 PM: Transfer to Hoi An and check into the hotel.",
        "Evening: Relax at a café in the Lantern City.",
      ],
      inclusions: ["Private Car", "Local English-speaking guide", "Entrance fee", "Cable car", "Hotel in Hoian"],
      imageUrl: "https://images.pexels.com/photos/15600183/pexels-photo-15600183/free-photo-of-the-golden-bridge-in-ba-na-hills-vietnam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [15.8851, 108.338],
      isHighlight: true,
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
      bannerSummary: "Ancient Town & Coconut Forest Boat Trip",
      activities: [
        "10:00 AM - 12:00 PM: Tour Hoian ancient town. Visit Fukian Assembly Hall and the Japanese Covered Bridge.",
        "13:00 PM - 16:00 PM: Transfer to Cam Thanh Village to visit the Coconut Forest.",
        "Explore the forest via basket boats, catch crabs, and join a basket boat race.",
        "Evening: Enjoy some café hopping by the lake side.",
        "Overnight in Hoian.",
      ],
      inclusions: ["Private Car", "Local English-speaking guide", "Entrance fee", "Hotel in Hoi An"],
      imageUrl: "https://images.pexels.com/photos/3620234/pexels-photo-3620234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [15.8801, 108.348],
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
      bannerSummary: "Hanoi City Tour & Overnight Bus to Sapa",
      activities: [
        "07:30 AM: Transfer to Da Nang Airport.",
        "10:00 AM - 12:00 PM: Flight from Da Nang to Hanoi (Flight cost approx. 30k INR for 6 people).",
        "13:00 PM: Arrive in Hanoi, private transfer to hotel and check-in.",
        "14:00 PM - 20:00 PM: Hanoi city tour. Visit Tran Quoc Pagoda, West Lake, Dong Xuan Market, and the Old Quarter.",
        "Visit the famous Train Street and try egg coffee at a trackside café.",
        "21:30 PM: Sapa night bus (VIP cabin bus) picks up from hotel for an overnight trip to Sapa.",
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
      bannerSummary: "Conquer Fansipan Peak, the 'Roof of Indochina'",
      activities: [
        "05:00 AM: Arrive at Sun World park in Sapa. Freshen up in public washrooms.",
        "07:00 AM - 17:00 PM: Take the cable car to Fansipan Peak, the highest point in Indochina (Cable car approx. 26k INR for 6 people).",
        "Lunch at a local restaurant (Guest's own charge).",
        "Evening: Bus transfer to your hotel in Hanoi.",
      ],
      inclusions: ["English-speaking guide", "Entrance fee", "Cable car", "Hotel in Hanoi", "VIP Sleeper Bus"],
      imageUrl: "https://images.pexels.com/photos/11182849/pexels-photo-11182849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [22.3365, 103.8448],
      isHighlight: true,
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
      bannerSummary: "Ninh Binh Day Trip: Tam Coc & Mua Cave",
      activities: [
        "Full Day Tour: Pickup from Hanoi for a day trip.",
        "11:00 AM - 16:00 PM: Visit Hoa Lu ancient capital, go cycling, and take a bamboo boat trip in Tam Coc.",
        "Climb Mua Cave (Dragon Peak) for panoramic views.",
        "Evening: Leisure time for Beer Street or shopping in Hanoi.",
        "Dropped off at hotel in Hanoi.",
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
      bannerSummary: "Luxury Day Cruise in Halong Bay",
      activities: [
        "08:30 AM - 17:00 PM: Halong Bay Luxury Day Cruise with hotel pickup and lunch included (Cruise approx. 32k INR for 6 people).",
        "Cruise past Fighting Chicken and Incense Burner Islets.",
        "Visit Sung Sot Cave, go kayaking or take a bamboo boat through Luon Cave.",
        "Visit TiTop Island for swimming or trekking.",
        "Enjoy a sunset party on the boat.",
        "Evening: Explore Hoan Kiem Lake and the Old Quarters in Hanoi.",
        "Dropped off at the hotel.",
      ],
      inclusions: ["Hotel in Hanoi", "Shuttle transfer (Halong Bay - Hanoi)", "Local English-speaking guide in Halong cruise", "Entrance fee", "Kayaking", "Sunset party"],
      imageUrl: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [20.9101, 107.0760],
      isHighlight: true,
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
      bannerSummary: "Departure from Hanoi",
      activities: [
        "Breakfast at the hotel.",
        "08:00 AM: Check out from the hotel.",
        "Driver picks up 3.5 hours before the international departure flight.",
        "Transfer to the airport for the flight from HANOI to India.",
      ],
      inclusions: ["Private airport transfer"],
      imageUrl: "https://images.pexels.com/photos/1048238/pexels-photo-1048238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [21.0285, 105.8642],
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
    category: "3 STAR",
    hotels: [
      { 
        city: "HO CHI MINH CITY", 
        name: "KT MERAKI BOUTIQUE", 
        dates: "13 Nov 2025",
        nights: "Day Use",
        rooms: "For freshening up until check-out",
        bookingUrl: "https://www.booking.com/Share-flBqOJ",
        coversDays: "Covers Day 1 itinerary (day use)"
      },
       { 
        city: "DA NANG", 
        name: "Sekong Hotel Da Nang", 
        dates: "13 Nov – 15 Nov 2025",
        nights: "2 nights",
        rooms: "3 Double/Twin rooms for 6 pax",
        bookingUrl: "https://www.booking.com/Share-Nq5s57",
        coversDays: "Covers Day 1 & Day 2 itinerary"
      },
      { 
        city: "HOI AN", 
        name: "Thanh Van 1 Hotel", 
        dates: "15 Nov – 17 Nov 2025",
        nights: "2 nights",
        rooms: "3 Double/Twin rooms for 6 pax",
        bookingUrl: "https://www.booking.com/Share-ZpiOo9n",
        coversDays: "Covers Day 3 & Day 4 itinerary"
      },
      { 
        city: "HANOI (Old Quarter)", 
        name: "Dream Boutique Hotel and Travel", 
        dates: "17 Nov – 21 Nov 2025",
        nights: "4 nights total",
        rooms: "Variable",
        bookingUrl: "https://www.booking.com/hotel/vn/dream-boutique-and-spa.html",
        coversDays: "Covers Day 5, 6, 7 & 8 itinerary",
        notes: "On 17th Nov, a family room is available for day use before the overnight trip to Sapa."
      },
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
      "International and airport tax.",
      "Meals not mentioned in the program.",
      "Beverages and personal expenses.",
      "Travel Insurance.",
      "Tipping for tour guide, driver, servers, porters.",
      "Single Supplement, early check-in/late check-out, and hotel/room upgrades (unless mentioned).",
      "Peak season or special event rates: Xmas, New Year, Tet Holiday (Lunar New Year), and National Holidays.",
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
      "Prices are subject to availability at the time of booking.",
      "Reservations during peak times (Christmas, New Year, Vietnamese Luna New Year, and National Holidays) and other local special events may be subject to supplementary charges.",
      "Hotel Check-in: 14:00 PM on arrival day.",
      "Hotel Check-out: 12:00 PM on departure day. (Surcharges apply for early check-in or late check-out).",
      "All services & tours are not booked until confirmation is received.",
      "If a proposed service is not available at the booking time, alternative options will be advised.",
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