
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
      title: "HO CHI MINH ARRIVAL – HALF DAY CITY TOUR – DINNER CRUISE – FLIGHT TO DANANG",
      destination: "Ho Chi Minh & Danang",
      meals: "None",
      bannerSummary: "City Tour, Dinner Cruise & Flight to Danang",
      activities: [
        "Our driver and private car will pick you up at the airport, transfer you to the hotel in the city center for early check in and rest.",
        "13:00: Private Car pick up for a city tour to visit Thien Hau Pagoda in China Town.",
        "Continue to Bach Dang harbor for a waterbus trip on the Saigon River. Enjoy unique views of Vin homes Central Park, the magnificent Landmark 81 tower, and the Bitexco Financial Tower.",
        "15:30 - 18:00: Enjoy Bui Vien walking street and then head to the harbor for the Dinner cruise.",
        "21:30: Our driver will pick you up to the airport for a flight to Da Nang. Upon arrival, a private transfer will take you to your hotel to check-in and relax.",
      ],
      inclusions: ["Private airport transfer", "Early check in at Ho Chi Minh", "Hotel in Danang", "Private Car", "Dinner cruise", "Entrance fee", "English speaking guide in city tour"],
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
        "12:00: We will pick you up and start by visiting the Non Nuoc Village at the foot of Marble Mountains, famous for its stone sculptures and handicrafts.",
        "Climb the mountain to enjoy peaceful scenery at the temples and explore mysterious caves.",
        "13:00: Depart for My Son Sanctuary – a World Heritage Site.",
        "14:45: Arrive at My Son Sanctuary. A 2-hour walking tour will show you historic structures from the 4th to 14th century.",
        "Enjoy a traditional Champa performance (Aspara Dance) to learn more about the culture.",
        "16:30: Leave My Son and get back to Danang city.",
      ],
      inclusions: ["Private Car", "Local English-speaking guide", "Entrance fee", "Meals: B", "Hotel in Danang"],
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
      title: "DA NANG – BANA HILLS – HOI AN",
      destination: "Hoi An",
      meals: "B",
      bannerSummary: "Ba Na Hills with Golden Bridge",
      activities: [
        "08:30: Meet your guide and driver to head to Ba Na Hills.",
        "Take a Cable Car ride to visit Vong Nguyet hills, Linh Ung pagoda, and The Old Villas of French.",
        "Continue by cable car to Nui Chua Mountain, visiting Nghinh Phong top, Le Nim Villas, and Orchid Garden.",
        "Experience the hill climbing train (funicular) and visit Debay Ancient Wine Cellar and Le Jardin D’amour flower garden.",
        "Walk on the famous Golden Bridge for amazing and gorgeous views of DA NANG City.",
        "Afternoon: Free time for joining games in Fantasy Park, the third biggest indoor games zone in Vietnam.",
        "17:00: Head to your hotel in Hoi An.",
      ],
      inclusions: ["Private Car", "Local English-speaking guide", "Entrance fee", "Cable car", "Meals: B", "Hotel in Hoian"],
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
        "Enjoy breakfast at the hotel and free leisure in the morning.",
        "10:00 - 12:00: Head to Hoi An ancient town. Visit the Fukian Assembly Hall, the Japanese Covered Bridge, and walk around for shopping.",
        "13:00 - 16:00: Transfer to Cam Thanh Village to visit the Coconut Forest.",
        "Discover the forest eco-system by basket boats, catch crabs and snails, and make toys from coconut leaves.",
        "Join in a basket boat race for a lot of wonderful experiences.",
        "Overnight in Hoian.",
      ],
      inclusions: ["Private Car", "Local English-speaking guide", "Entrance fee", "Meals: B", "Hotel in Hoi An"],
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
      title: "FLIGHT TO HA NOI – HALF DAY CITY TOUR - SAPA",
      destination: "Hanoi & Sapa",
      meals: "B",
      bannerSummary: "Hanoi City Tour & Overnight Bus to Sapa",
      activities: [
        "2.5 hours before flight time, our driver will pick you up for your flight to Hanoi. Upon arrival, private transfer to your hotel (check-in at 14:00 PM).",
        "15:00: Pick up for city tour. Visit Tran Quoc Pagoda and West Lake at sunset.",
        "Explore Dong Xuan Market for shopping and discover the Old Quarter of Hanoi.",
        "18:50: Visit the famous Train Street. Try egg coffee or fresh beer and watch the 19:00 train pass by (at your own charge).",
        "20:00: Head back to the hotel to rest and check out.",
        "21:00 – 21:30: Sapa night bus picks you up from the hotel for the overnight journey to Sapa (approx. 6 hours).",
      ],
      inclusions: ["Private Airport Transfer", "Private Car", "Meals: B", "Vip cabin bus"],
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
      title: "SAPA – FANSIPAN PEAK – HANOI",
      destination: "Sapa & Hanoi",
      meals: "B",
      bannerSummary: "Conquer Fansipan Peak, the 'Roof of Indochina'",
      activities: [
        "Around 02:00: Reach Sapa. Sleep on the bus until 06:00.",
        "06:00: Private Car picks you up and takes you to Sun World park to freshen up.",
        "07:00 - 08:30: Arrive at Fansipan cable car station. Enjoy the best view in Sapa by cable car and conquer the highest mountain top in Indochina.",
        "12:00: Have lunch at a local restaurant (at guest's own charge).",
        "14:00: Get the bus to come back to Ha Noi.",
        "21:00 - 22:00: The bus arrives in Ha Noi, dropping you off at the hotel.",
      ],
      inclusions: ["English-speaking guide", "Entrance fee", "Cable car", "Meals: B", "Hotel in Hanoi", "VIP Sleeper Bus"],
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
      title: "HA NOI – NINH BINH – HOA LU – TAM COC – MUA CAVE",
      destination: "Ninh Binh",
      meals: "B, L",
      bannerSummary: "Ninh Binh Day Trip: Tam Coc & Mua Cave",
      activities: [
        "07:25 – 8h00: Get picked up by our guide to depart for Ninh Binh province.",
        "09:15: Have a short 15-20 minute break to relax.",
        "10:15: Visit Hoa Lu ancient capital. Go cycling around the village for sightseeing and discovering local life.",
        "12:00: Have a buffet lunch at a 5-star style restaurant with many local foods options.",
        "13:30: Visit Tam Coc by a 1.5-hour bamboo boat. Enjoy the charming beauty of paddy fields, river, and a stunning cave system.",
        "15:30: Leave for Mua Cave (Dragon Peak). Walk up almost 500 steps to reach the top for an amazing panoramic view of Tam Coc.",
        "17:00: Get on the bus to return to Hanoi.",
        "19:00: Get dropped off at Hotels in Hanoi.",
      ],
      inclusions: ["Shuttle transfer", "Local English-speaking guide", "Entrance fee", "Meals: B/L", "Hotel in Ha Noi"],
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
      title: "HANOI – HALONG BAY LUXURY DAY CRUISE",
      destination: "Halong Bay",
      meals: "B, L",
      bannerSummary: "Luxury Day Cruise in Halong Bay",
      activities: [
        "08:00 AM: Pick up from your hotel and leave for Ha Long Bay.",
        "12:00: Arrive at Tuan Chau Harbor and get on the boat to start the excursion.",
        "12:30: Enjoy a set menu lunch while cruising past Fighting Chicken and Incense Buner Islets.",
        "14.00: Arrive at Bo Hon Island and visit Sung Sot Cave – the most beautiful cave in Halong.",
        "14.45: Do kayaking or take a bamboo boat through Luon Cave to discover a beautiful lagoon.",
        "15.15: Visit TiTop Island for swimming or trekking to the top for sightseeing all of Halong bay.",
        "16.00: Return to the boat for a sunset party with wine, fruits, and biscuits.",
        "17.45: Arrive back at the harbor and get on the bus to return to Hanoi.",
        "20:30: Get dropped off at the hotel. Tour ends.",
      ],
      inclusions: ["Hotel in Hanoi", "Shuttle transfer Halong Bay - Hanoi", "Local English-speaking guide in Halong cruise", "Entrance fee", "Kayaking", "Sunset party", "Meals: B/L"],
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
        "Have breakfast at the hotel. Free on your own and check out.",
        "3.5 hours before your international flight, our driver will pick you up and transfer to the airport for the flight from HANOI city to India.",
        "Hope you enjoyed the trip in Vietnam with sweet memories!",
      ],
      inclusions: ["Private airport transfer", "Meals: B"],
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
