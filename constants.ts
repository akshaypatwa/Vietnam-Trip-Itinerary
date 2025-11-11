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
        "13:00: Thien Hau Pagoda in China Town: Your first stop on a tour of the city's rich history.",
        "Continue to Bach Dang harbor for a waterbus trip on the Saigon River, offering unique city views.",
        "Bitexco Financial Tower: Spot this magnificent, modern skyscraper from the water.",
        "15:30 to 18:00: Bui Vien walking street: Immerse yourself in the vibrant, energetic heart of the city's nightlife.",
        "After exploring, head to the harbor for the Dinner cruise.",
        "21:30: Our driver (no guide) will pick you up and transfer you to the airport for a flight to Da Nang. Upon arrival, a private transfer will take you to your hotel to check-in and relax.",
      ],
      inclusions: ["Private airport transfer", "Early check in at Ho Chi Minh", "Hotel in Danang", "Private Car", "Dinner cruise", "Entrance fee", "English speaking guide in city tour"],
      imageUrl: "https://images.pexels.com/photos/13884824/pexels-photo-13884824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [10.7769, 106.7009],
    },
    {
      day: 2,
      title: "MARBLE MOUNTAIN – MY SON SANCTUARY",
      destination: "Danang -> Hoi An",
      meals: "B",
      bannerSummary: "Marble Mountains & My Son Ruins",
      activities: [
        "12:00: Your tour begins with a visit to Non Nuoc Village at the foot of the Marble Mountains, renowned for its intricate stone sculptures. Afterwards, ascend the mountain to explore serene temples and awe-inspiring natural caves.",
        "13:30: Depart from Marble Mountains for My Son Sanctuary, a UNESCO World Heritage site. Enjoy the scenic drive along the coast.",
        "14:45: Arrive at My Son Sanctuary. An electric car will transfer you to the temple complex. Embark on a 2-hour walking tour with your guide to discover the ruins of the Champa Kingdom and witness a traditional Apsara dance performance.",
        "16:30: Conclude your visit and transfer to Hoi An. Check into your hotel and enjoy the evening exploring the ancient town.",
      ],
      inclusions: ["Private Car", "English speaking guide", "Entrance fees"],
      imageUrl: "https://images.pexels.com/photos/6785293/pexels-photo-6785293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [16.005, 108.263],
      outfitSuggestion: {
        title: "Respectful & Ready to Climb",
        points: ["Wear comfortable shoes for walking and climbing stairs.", "Choose respectful attire (covering shoulders and knees) for temples.", "Bring water, a hat, and sunscreen."]
      },
    },
    {
      day: 3,
      title: "DA NANG – BANA HILLS – HOI AN",
      destination: "Danang -> Hoi An",
      meals: "B",
      isHighlight: true,
      bannerSummary: "Walk the iconic Golden Bridge & explore Ba Na Hills",
      activities: [
        "08:30: Meet your guide and driver to head to Ba Na Hills.",
        "Take a scenic Cable Car ride, stopping at By Night station to visit Vong Nguyet hills, Linh Ung pagoda, and The Old Villas of French.",
        "Continue by cable car to the top of Nui Chua Mountain, visiting Nghinh Phong top, Le Nim Villas, and the Orchid Garden.",
        "Experience the unique hill climbing train (funicular) to visit the Debay Ancient Wine Cellar and the beautiful Le Jardin D’amour flower garden.",
        "Walk on the famous Golden Bridge, an architectural marvel held by giant stone hands, offering gorgeous views of Da Nang City.",
        "Afternoon: Enjoy free time at Fantasy Park, Vietnam's third-largest indoor games zone, with attractions like 4-5D films, skiver, and The Death Race.",
        "17:00: Depart from Ba Na Hills and head to your hotel in Hoi An to check in for the evening."
      ],
      inclusions: ["Private Car", "Local English-speaking guide", "Entrance fee & cable car", "Hotel in Hoi An"],
      imageUrl: "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [15.9961, 107.9897],
      outfitSuggestion: {
        title: "Layered & Ready for Fun",
        points: ["The weather on the mountain can change quickly; bring a light jacket.", "Wear comfortable walking shoes for exploring.", "Don't forget your camera for the Golden Bridge!"]
      }
    },
    {
      day: 4,
      title: "HOI AN ANCIENT TOWN & COCONUT FOREST",
      destination: "Hoi An",
      meals: "B",
      bannerSummary: "Ancient Town Charm & Coconut Boat Adventures",
      activities: [
        "Enjoy breakfast at the hotel with a free morning at your leisure.",
        "10:00-12:00: Head to Hoi An ancient town. Visit the historic Fukian Assembly Hall, see the iconic Japanese Covered Bridge, and enjoy shopping amidst thousands of lanterns.",
        "13:00-16:00: Transfer to Cam Thanh Village for an adventure in the Coconut Forest.",
        "Explore the forest's ecosystem on traditional basket boats, try catching crabs, and even join a thrilling basket boat race.",
        "After the tour, return to your hotel in Hoi An to enjoy the evening at your leisure.",
      ],
      inclusions: ["Private Car", "Local English-speaking guide", "Entrance fee", "Hotel in Hoi An"],
      imageUrl: "https://images.pexels.com/photos/1569076/pexels-photo-1569076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [15.8801, 108.3380],
      outfitSuggestion: {
        title: "Casual & Camera-Ready",
        points: ["Light, comfortable clothing for walking and the boat ride.", "Wear a hat and sunscreen.", "Keep your camera ready for the charming ancient town and coconut groves."]
      },
    },
     {
      day: 5,
      title: "FLIGHT TO HANOI – HALF DAY CITY TOUR - SAPA",
      destination: "Hoi An -> Hanoi -> Sapa",
      meals: "B",
      bannerSummary: "Flight to the Capital, City Tour & Sapa Overnight",
      activities: [
        "Morning: Transfer to Da Nang airport for your flight to Hanoi. Upon arrival, a private car will take you to your hotel to check in and relax (standard check-in is 14:00).",
        "15:00: Your tour guide will meet you to begin your afternoon city tour.",
        "Visit Tran Quoc Pagoda at the West Lake—the perfect spot to watch the sunset.",
        "Continue to Dong Xuan Market for shopping and to discover the vibrant Old Quarter of Hanoi.",
        "18:50: Visit the famous Train Street. Grab a local egg coffee or a fresh beer and take some incredible pictures on the railway tracks.",
        "20:00: Head back to the hotel to rest for a bit and collect your luggage.",
        "21:00-21:30: The Sapa night bus will pick you up from the hotel to begin your 6-hour journey to Sapa."
      ],
      inclusions: ["Private airport transfers", "Private Car for city tour", "Hotel for day use in Hanoi", "Entrance fees", "English speaking guide", "VIP Cabin Bus ticket to Sapa"],
      imageUrl: "https://images.pexels.com/photos/3584435/pexels-photo-3584435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [21.0285, 105.8542],
      outfitSuggestion: {
        title: "Respectful & Comfortable",
        points: ["Wear clothes covering shoulders and knees for temple visits.", "Comfortable walking shoes are a must.", "Carry a small bag for essentials during the city tour."]
      },
    },
    {
      day: 6,
      title: "SAPA – FANSIPAN PEAK – HANOI",
      destination: "Sapa -> Hanoi",
      meals: "B",
      isHighlight: true,
      bannerSummary: "Conquer the 'Roof of Indochina'",
      activities: [
        "02:00: Arrive in Sapa. You can rest in the sleeper bus until 06:00.",
        "06:00: A private car will pick you up and transfer you to the Sun World park area to freshen up.",
        "07:00-08:30: After breakfast, head to the Fansipan cable car. Enjoy a stunning ride and conquer the highest mountain top in Indochina.",
        "12:00: Lunch at a local restaurant (at your own expense).",
        "14:00: Board the VIP sleeper bus to return to Hanoi.",
        "21:00-22:00: Arrive in Hanoi and transfer to your hotel for check-in.",
      ],
      inclusions: [
        "English speaking guide",
        "Entrance fee & Fansipan cable car ticket",
        "Private transfer in Sapa",
        "Breakfast",
        "VIP Sleeper Bus ticket to Hanoi",
        "Hotel in Hanoi",
      ],
      imageUrl: "https://images.pexels.com/photos/14772841/pexels-photo-14772841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [22.3036, 103.774],
    },
    {
      day: 7,
      title: "HA NOI – NINH BINH – HOA LU – TAM COC – MUA CAVE",
      destination: "Hanoi -> Ninh Binh",
      meals: "B, L",
      isHighlight: true,
      bannerSummary: "Ancient Capital, Bamboo Boats & Dragon Peak Views",
      activities: [
        "07:25–8:00: Get picked up by our friendly guide then depart for Ninh Binh province.",
        "09:15: Have a short break for 15 – 20 minutes to relax.",
        "10:15: Visit Hoa Lu ancient capital to learn about Vietnamese history, followed by cycling around the village for sightseeing.",
        "12:00: Enjoy a buffet lunch at a 5-star style restaurant with many local food options.",
        "13:30: Visit Tam Coc by 1.5-hour bamboo boat. Be amazed by the beauty of the paddy fields, river, and stunning cave system, often called 'Ha Long Bay on land'.",
        "15:30: Leave for Mua Cave (Dragon Peak). Walk up almost 500 steps to reach the top for an amazing panoramic view of Tam Coc.",
        "17:00: Get on the bus to return to Hanoi.",
        "19:00: Get dropped off at your hotel in Hanoi."
      ],
      inclusions: ["Shuttle transfer", "Local English-speaking guide", "Entrance fees & boat trip", "Buffet Lunch", "Hotel in Hanoi"],
      imageUrl: "https://images.pexels.com/photos/5431358/pexels-photo-5431358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [20.215, 105.936],
      outfitSuggestion: {
        title: "Active & Comfortable",
        points: ["Wear light, breathable clothes for cycling.", "Sturdy shoes are essential for climbing Mua Cave.", "Bring a hat, sunglasses, and sunscreen for sun protection."]
      },
    },
    {
      day: 8,
      title: "HANOI – HALONG BAY LUXURY DAY CRUISE",
      destination: "Hanoi -> Halong Bay",
      meals: "B, L",
      isHighlight: true,
      bannerSummary: "Luxury Cruise in a World Heritage Site",
      activities: [
          "08:00: After breakfast, leave for Ha Long Bay.",
          "12:00: Arrive at Tuan Chau Harbor, get on the boat to start the excursion discovering the beauty of the world heritage site.",
          "12:30: Enjoy set menu lunch on the boat. See the beautiful scenery with thousands of limestones such as Fighting Chicken and Incense Burner Islets – 2 symbols of Halong Bay.",
          "14:00: Arrive at Bo Hon Island and visit Sung Sot Cave – the most beautiful cave with a lot of stalagmites and stalactites.",
          "14:45: Do kayaking or bamboo boat through Luon Cave to discover the beautiful lagoon.",
          "15:15: Visit TiTop Island with its sandy beach. You can go swimming here or trek up to the top of the island for a panoramic view of Halong bay.",
          "16:00: Back to the boat for the sunset party (wine, fruits, and biscuits) while cruising back to the harbor.",
          "17:45: Arrive back at the harbor. Get on the bus and return to Hanoi.",
          "20:30: Get dropped off at the hotel. Tour ends for the day."
      ],
      inclusions: [
          "Hotel in Hanoi",
          "Shuttle transfer Halong Bay - Hanoi",
          "Local English-speaking guide in Halong cruise",
          "Entrance fee, Kayaking, sunset party",
      ],
      imageUrl: "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [20.9101, 107.0765],
      outfitSuggestion: {
        title: "Cruise & Cave Ready",
        points: ["Wear a swimsuit under your clothes for easy swimming access.", "Bring comfortable shoes for trekking on TiTop Island.", "A waterproof bag for your phone/camera is a good idea."]
      }
    },
    {
      day: 9,
      title: "HANOI DEPARTURE",
      destination: "Hanoi",
      meals: "B",
      bannerSummary: "Time to Say 'Tạm biệt!'",
      activities: [
          "Enjoy your final breakfast in Vietnam.",
          "Free on your own until check out.",
          "3.5 hours before your international flight departure, our driver will pick you up at the hotel and transfer to the airport.",
          "Hope you enjoyed the trip in Vietnam with sweet memories!",
      ],
      inclusions: ["Private airport transfer"],
      imageUrl: "https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coords: [21.0285, 105.8542]
    },
  ],
  accommodation: {
    category: "4 STAR",
    hotels: [
      { city: "Ho Chi Minh", name: "Silverland Sakyo Hotel & Spa", bookingUrl: "https://www.google.com/travel/hotels/s/1Y8zX4iG9uEw3C657", dates: "Day 1", nights: "Day Use", rooms: "02 Deluxe rooms", coversDays: "Day 1", notes: "For early check-in and freshening up before the tour." },
      { city: "Da Nang", name: "Minh Toan Galaxy Hotel", bookingUrl: "https://www.google.com/travel/hotels/s/2bH6TqU7y9b4tWw9A", dates: "Day 1-2", nights: "1 Night", rooms: "02 Deluxe + 01 Family room", coversDays: "Day 1" },
      { city: "Hoi An", name: "Hoi An Delicacy Hotel & Spa", bookingUrl: "https://www.google.com/travel/hotels/s/h7N1S6Z8t7g9kG8g7", dates: "Day 2-4", nights: "2 Nights", rooms: "02 Deluxe + 01 Family room", coversDays: "Day 2, 3" },
      { city: "Hanoi", name: "Hanoi Pearl Hotel", bookingUrl: "https://www.google.com/travel/hotels/s/cW2tWd4L3JjK6XF26", dates: "Day 5", nights: "Day Use", rooms: "02 Deluxe + 01 Family room", coversDays: "Day 5", notes: "For resting and freshening up before the overnight bus to Sapa." },
      { city: "Hanoi", name: "Hanoi Pearl Hotel", bookingUrl: "https://www.google.com/travel/hotels/s/cW2tWd4L3JjK6XF26", dates: "Day 6-9", nights: "3 Nights", rooms: "02 Deluxe + 01 Family room", coversDays: "Day 6, 7, 8" },
    ],
  },
  tourCost: {
    category: "6 Adults",
    costs: [
      { description: "Tour Price per Person", price: "$750 USD" },
      { description: "Total Tour Price for 6 Guests", price: "$4,500 USD" },
    ],
  },
  generalInclusionsExclusions: {
    inclusions: [
      "Accommodation in twin/double/triple sharing rooms",
      "All transfers and transportation with air-conditioning",
      "All entrance fees as mentioned in the itinerary",
      "Meals as specified (B=Breakfast, L=Lunch, D=Dinner)",
      "English speaking guides in each region",
      "Domestic flight tickets (Ho Chi Minh to Danang, Danang to Hanoi)",
      "Overnight VIP bus tickets (Hanoi to Sapa round trip)",
      "Cold water and tissues in the car",
    ],
    exclusions: [
      "International flight tickets to/from Vietnam",
      "Vietnam visa fees",
      "Personal expenses (laundry, phone calls, etc.)",
      "Travel insurance",
      "Tips for guides and drivers",
      "Drinks and other meals not mentioned",
      "Any other services not clearly mentioned in the inclusions",
    ],
  },
  termsAndConditions: {
    paymentTerm: {
      deposit: "50% of total tour cost required to confirm the booking.",
      balance: "Remaining 50% to be paid 30 days before the travel date.",
    },
    cancellationPolicy: {
      title: "Cancellation Policy",
      policies: [
        "More than 30 days prior to departure: 25% of total cost.",
        "Between 15-30 days prior to departure: 50% of total cost.",
        "Less than 15 days prior to departure: 100% of total cost (no refund).",
      ],
    },
    importantNotes: [
      "The itinerary is subject to change due to weather, traffic conditions, or other unforeseen circumstances.",
      "Hotel check-in time is 14:00 and check-out time is 12:00.",
      "Please ensure you have a valid passport with at least 6 months validity from your date of entry.",
    ],
  },
   flightData: [
    {
      route: "Mumbai to Ho Chi Minh",
      url: "https://drive.google.com/drive/folders/1LUhNq5kd-ZFny6hqBGYD6HnlJR_3VxO0?usp=drive_link"
    },
    {
      route: "Hanoi to Mumbai",
      url: "https://drive.google.com/drive/folders/1Nun5qVqM9cIlzfNrDi1RgzP0Uno-eUK4?usp=drive_link"
    }
  ],
  visaData: [
    { name: "Akshay", url: "https://drive.google.com/file/d/1ygQ6vb_sO-qxOuCCltCrgGppaASwGCpG/view?usp=drive_link" },
    { name: "Raj", url: "https://drive.google.com/file/d/1N0HAaK67W3VxMW1PgbzwP1F1bn9T-VAs/view?usp=drive_link" },
    { name: "Rahul", url: "https://drive.google.com/file/d/1PgXZKVZ1Wq1jxwwCyQhhkLIbzWeFuv42/view?usp=drive_link" },
    { name: "Sneha", url: "https://drive.google.com/file/d/1F-VGBfLpP25iD4iVi1LzGW9UcaEL34ak/view?usp=drive_link" },
    { name: "Kunjan", url: "https://drive.google.com/file/d/1J1HorsycduguQ2Ma1nZYTy2fKYNKWn69/view?usp=drive_link" },
  ]
};