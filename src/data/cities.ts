export interface Attraction {
  name: string;
  description: string;
  timings: string;
  entryFee: string;
}

export interface Hotel {
  name: string;
  category: "budget" | "mid-range" | "luxury";
  priceRange: string;
  rating: number;
}

export interface Food {
  dish: string;
  type: string;
  where: string;
}

export interface Festival {
  name: string;
  month: string;
  description: string;
}

export interface TravelTips {
  howToReach: { air: string; train: string; road: string };
  localTransport: string[];
  tips: string[];
}

export interface City {
  id: string;
  name: string;
  nickname: string;
  district: string;
  image: string;
  description: string;
  bestTime: string;
  temperature: string;
  language: string;
  region: "North" | "South" | "East" | "West";
  type: ("heritage" | "nature" | "religious")[];
  attractions: Attraction[];
  hotels: Hotel[];
  food: Food[];
  festivals: Festival[];
  travelTips: TravelTips;
  mapUrl: string;
}

export const cities: City[] = [
  {
    id: "jaipur",
    name: "Jaipur",
    nickname: "Pink City",
    district: "Jaipur",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Jaipur, the capital of Rajasthan, is known as the Pink City for its trademark building color. Founded in 1727 by Maharaja Sawai Jai Singh II, it is a splendid showcase of Rajasthani architecture and culture. The city is part of India's Golden Triangle tourist circuit and is home to magnificent forts, palaces, and vibrant bazaars.",
    bestTime: "October to March",
    temperature: "5°C (winter) to 45°C (summer)",
    language: "Hindi, Rajasthani, English",
    region: "North",
    type: ["heritage"],
    attractions: [
      { name: "Hawa Mahal", description: "The Palace of Winds, a five-story structure with 953 small windows adorned with intricate latticework, built in 1799 for royal women to observe street festivals.", timings: "9:00 AM - 5:00 PM", entryFee: "₹50 (Indian), ₹200 (Foreign)" },
      { name: "Amber Fort", description: "A majestic hilltop fort blending Hindu and Mughal architecture, featuring the stunning Sheesh Mahal (Mirror Palace) and panoramic views of Maota Lake.", timings: "8:00 AM - 6:00 PM", entryFee: "₹100 (Indian), ₹500 (Foreign)" },
      { name: "City Palace", description: "A complex of courtyards, gardens, and buildings including Chandra Mahal and Mubarak Mahal, still home to the royal family.", timings: "9:30 AM - 5:00 PM", entryFee: "₹200 (Indian), ₹700 (Foreign)" },
      { name: "Jantar Mantar", description: "A UNESCO World Heritage Site featuring the world's largest stone sundial and 19 astronomical instruments built by Jai Singh II.", timings: "9:00 AM - 5:00 PM", entryFee: "₹50 (Indian), ₹200 (Foreign)" },
      { name: "Nahargarh Fort", description: "Standing on the Aravalli hills, offering breathtaking sunset views of Jaipur city and housing the Madhavendra Bhawan palace.", timings: "10:00 AM - 5:30 PM", entryFee: "₹50 (Indian), ₹200 (Foreign)" },
      { name: "Albert Hall Museum", description: "The oldest museum in Rajasthan, housed in a stunning Indo-Saracenic building with exhibits of art, carpets, and Egyptian mummies.", timings: "9:00 AM - 5:00 PM", entryFee: "₹40 (Indian), ₹300 (Foreign)" }
    ],
    hotels: [
      { name: "Rambagh Palace", category: "luxury", priceRange: "₹25,000 - ₹60,000", rating: 4.8 },
      { name: "Jai Mahal Palace", category: "luxury", priceRange: "₹15,000 - ₹35,000", rating: 4.6 },
      { name: "Hotel Pearl Palace", category: "budget", priceRange: "₹800 - ₹2,000", rating: 4.2 },
      { name: "Udai Niwas", category: "mid-range", priceRange: "₹3,000 - ₹6,000", rating: 4.3 },
      { name: "Zostel Jaipur", category: "budget", priceRange: "₹500 - ₹1,500", rating: 4.0 }
    ],
    food: [
      { dish: "Dal Baati Churma", type: "main course", where: "Chokhi Dhani" },
      { dish: "Ghewar", type: "dessert", where: "LMB Sweets" },
      { dish: "Laal Maas", type: "main course", where: "Spice Court" },
      { dish: "Pyaaz Kachori", type: "snack", where: "Rawat Mishthan Bhandar" },
      { dish: "Mawa Kachori", type: "dessert", where: "Johari Bazaar" }
    ],
    festivals: [
      { name: "Jaipur Literature Festival", month: "January", description: "The world's largest free literary festival, attracting writers and readers from across the globe." },
      { name: "Elephant Festival", month: "March", description: "A vibrant celebration during Holi featuring decorated elephants, folk dances, and music." },
      { name: "Gangaur Festival", month: "March-April", description: "An 18-day festival celebrating Goddess Gauri, with grand processions through the city." },
      { name: "Teej Festival", month: "July-August", description: "Celebrating the arrival of monsoon with swings, folk songs, and a grand procession." }
    ],
    travelTips: {
      howToReach: { air: "Jaipur International Airport (JAI), 13 km from city center", train: "Jaipur Junction, well connected to Delhi, Mumbai, and other major cities", road: "NH 8 connects to Delhi (260 km), NH 11 to Agra (240 km)" },
      localTransport: ["Auto Rickshaw", "Cab (Ola/Uber)", "Jaipur Metro", "City Bus", "Cycle Rickshaw"],
      tips: ["Bargain at bazaars — prices are often inflated for tourists", "Visit Amber Fort early morning to avoid crowds and heat", "Carry sunscreen and water — Jaipur gets very hot", "Try the street food but choose busy stalls for freshness"]
    },
    mapUrl: "https://maps.google.com/?q=Jaipur,Rajasthan"
  },
  {
    id: "jodhpur",
    name: "Jodhpur",
    nickname: "Blue City",
    district: "Jodhpur",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Jodhpur, the second-largest city in Rajasthan, is famously known as the Blue City due to the blue-painted houses around Mehrangarh Fort. Founded in 1459 by Rao Jodha, the city is a treasure trove of Rajput heritage, magnificent forts, and vibrant markets known for textiles and handicrafts.",
    bestTime: "October to March",
    temperature: "8°C (winter) to 42°C (summer)",
    language: "Hindi, Rajasthani, Marwari",
    region: "West",
    type: ["heritage"],
    attractions: [
      { name: "Mehrangarh Fort", description: "One of India's largest forts, perched 125 meters above the city, offering panoramic views and housing a world-class museum.", timings: "9:00 AM - 5:00 PM", entryFee: "₹100 (Indian), ₹600 (Foreign)" },
      { name: "Jaswant Thada", description: "A beautiful white marble cenotaph built in memory of Maharaja Jaswant Singh II, with intricate carvings and serene gardens.", timings: "9:00 AM - 5:00 PM", entryFee: "₹30 (Indian), ₹50 (Foreign)" },
      { name: "Umaid Bhawan Palace", description: "One of the world's largest private residences, part palace, part hotel, part museum — an Art Deco masterpiece.", timings: "10:00 AM - 4:30 PM", entryFee: "₹50 (Indian), ₹100 (Foreign)" },
      { name: "Clock Tower & Sardar Market", description: "A bustling market area around the iconic clock tower, perfect for spices, textiles, and handicrafts.", timings: "9:00 AM - 9:00 PM", entryFee: "Free" },
      { name: "Mandore Gardens", description: "Ancient capital of Marwar with cenotaphs of Jodhpur rulers, temples, and beautifully landscaped gardens.", timings: "8:00 AM - 6:00 PM", entryFee: "₹50" }
    ],
    hotels: [
      { name: "Umaid Bhawan Palace", category: "luxury", priceRange: "₹30,000 - ₹80,000", rating: 4.9 },
      { name: "Taj Hari Mahal", category: "luxury", priceRange: "₹12,000 - ₹25,000", rating: 4.6 },
      { name: "Ranbanka Palace", category: "mid-range", priceRange: "₹4,000 - ₹8,000", rating: 4.3 },
      { name: "Zostel Jodhpur", category: "budget", priceRange: "₹500 - ₹1,500", rating: 4.1 },
      { name: "Hotel Haveli", category: "budget", priceRange: "₹800 - ₹2,000", rating: 4.0 }
    ],
    food: [
      { dish: "Mirchi Bada", type: "snack", where: "Janta Sweets" },
      { dish: "Mawa Kachori", type: "dessert", where: "Jodhpur Sweets" },
      { dish: "Pyaz Ki Kachori", type: "snack", where: "Shandar Sweets" },
      { dish: "Lapsi", type: "dessert", where: "Local households" },
      { dish: "Dal Bati Churma", type: "main course", where: "Gypsy Dining Hall" }
    ],
    festivals: [
      { name: "Marwar Festival", month: "October", description: "A two-day festival celebrating the music and folk culture of the Marwar region with folk dances and music." },
      { name: "Jodhpur RIFF", month: "October", description: "Rajasthan International Folk Festival — a world-class music festival at Mehrangarh Fort." },
      { name: "Nagaur Fair", month: "January-February", description: "One of the largest cattle fairs in India, with trading, sports, and cultural events." }
    ],
    travelTips: {
      howToReach: { air: "Jodhpur Airport (JDH), 5 km from city center", train: "Jodhpur Junction, connected to Delhi, Mumbai, Jaipur", road: "NH 62 and NH 65 connect to major cities" },
      localTransport: ["Auto Rickshaw", "Cab", "City Bus", "Cycle Rickshaw"],
      tips: ["Walk through the blue streets near the fort for the best photos", "Visit Mehrangarh at sunset for stunning views", "Shop at Sardar Market for authentic Jodhpuri items", "Try the famous Mirchi Bada — it's a local specialty"]
    },
    mapUrl: "https://maps.google.com/?q=Jodhpur,Rajasthan"
  },
  {
    id: "udaipur",
    name: "Udaipur",
    nickname: "City of Lakes",
    district: "Udaipur",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Udaipur, the City of Lakes, is one of Rajasthan's most romantic destinations. Founded in 1559 by Maharana Udai Singh II, it is known for its stunning lakes, grand palaces, and rich cultural heritage. The city's beauty has earned it the nickname 'Venice of the East'.",
    bestTime: "September to March",
    temperature: "7°C (winter) to 40°C (summer)",
    language: "Hindi, Rajasthani, Mewari",
    region: "South",
    type: ["heritage", "nature"],
    attractions: [
      { name: "City Palace", description: "A magnificent palace complex on the eastern bank of Lake Pichola, blending Rajasthani and Mughal architecture.", timings: "9:30 AM - 5:30 PM", entryFee: "₹300 (Indian), ₹700 (Foreign)" },
      { name: "Lake Pichola", description: "An artificial lake created in 1362 AD, offering boat rides with views of the Lake Palace and Jag Mandir.", timings: "10:00 AM - 6:00 PM", entryFee: "Boat ride ₹200-₹700" },
      { name: "Jag Mandir", description: "A beautiful island palace on Lake Pichola, known for its stunning architecture and garden courtyard.", timings: "10:00 AM - 6:00 PM", entryFee: "Included in boat ride" },
      { name: "Saheliyon Ki Bari", description: "A beautiful garden built for the queen's maidens, featuring fountains, lotus pools, and marble pavilions.", timings: "8:00 AM - 6:00 PM", entryFee: "₹20 (Indian), ₹50 (Foreign)" },
      { name: "Sajjangarh (Monsoon Palace)", description: "A hilltop palace offering panoramic views of Udaipur's lakes and the Aravalli hills.", timings: "8:00 AM - 6:00 PM", entryFee: "₹80 (Indian), ₹300 (Foreign)" },
      { name: "Bagore Ki Haveli", description: "A historic haveli on the waterfront, now a museum showcasing Rajasthani culture with evening dance performances.", timings: "10:00 AM - 7:00 PM", entryFee: "₹60 (Indian), ₹100 (Foreign)" }
    ],
    hotels: [
      { name: "Taj Lake Palace", category: "luxury", priceRange: "₹35,000 - ₹1,00,000", rating: 4.9 },
      { name: "The Leela Palace", category: "luxury", priceRange: "₹25,000 - ₹60,000", rating: 4.8 },
      { name: "Jagat Niwas Palace", category: "mid-range", priceRange: "₹4,000 - ₹10,000", rating: 4.4 },
      { name: "Zostel Udaipur", category: "budget", priceRange: "₹500 - ₹1,500", rating: 4.1 },
      { name: "Bunkyard Hostel", category: "budget", priceRange: "₹400 - ₹1,200", rating: 4.0 }
    ],
    food: [
      { dish: "Dal Baati Churma", type: "main course", where: "Chokhi Dhani, Udaipur" },
      { dish: "Gatte Ki Sabzi", type: "main course", where: "Millets of Mewar" },
      { dish: "Ker Sangri", type: "side dish", where: "Ambrai Restaurant" },
      { dish: "Raj Kachori", type: "snack", where: "Jodhpur Sweets" },
      { dish: "Malpua", type: "dessert", where: "Local sweet shops" }
    ],
    festivals: [
      { name: "Mewar Festival", month: "March-April", description: "A vibrant festival welcoming spring with folk dances, music, and a grand procession to Lake Pichola." },
      { name: "Shilpgram Utsav", month: "December", description: "A 10-day crafts festival showcasing folk art, crafts, and performances from across India." },
      { name: "Hariyali Amavasya", month: "July-August", description: "A fair celebrating the monsoon at Fateh Sagar Lake with cultural programs." }
    ],
    travelTips: {
      howToReach: { air: "Maharana Pratap Airport (UDR), 22 km from city", train: "Udaipur City Station, connected to Delhi, Jaipur, Mumbai", road: "NH 8 connects to Delhi (660 km), Jaipur (400 km)" },
      localTransport: ["Auto Rickshaw", "Cab (Ola/Uber)", "City Bus", "Boat (for lake attractions)"],
      tips: ["Take a sunset boat ride on Lake Pichola — it's magical", "Watch the Dharohar dance show at Bagore Ki Haveli", "Visit the Monsoon Palace for panoramic sunset views", "Explore the old city lanes for authentic Rajasthani crafts"]
    },
    mapUrl: "https://maps.google.com/?q=Udaipur,Rajasthan"
  },
  {
    id: "jaisalmer",
    name: "Jaisalmer",
    nickname: "Golden City",
    district: "Jaisalmer",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Jaisalmer, the Golden City, rises from the heart of the Thar Desert with its magnificent sandstone architecture glowing golden in the sunlight. Founded in 1156 by Rawal Jaisal, the city is dominated by its living fort and is famous for its desert safaris, intricate havelis, and vibrant culture.",
    bestTime: "October to March",
    temperature: "5°C (winter) to 45°C (summer)",
    language: "Hindi, Rajasthani, Marwari",
    region: "West",
    type: ["heritage", "nature"],
    attractions: [
      { name: "Jaisalmer Fort (Sonar Quila)", description: "A living fort — one of the few in the world — where a quarter of the city's population still resides within its walls.", timings: "Open all day", entryFee: "Free" },
      { name: "Patwon Ki Haveli", description: "The largest and most elaborate haveli in Jaisalmer, featuring intricate carvings and mirror work across five stories.", timings: "9:00 AM - 5:00 PM", entryFee: "₹30 (Indian), ₹100 (Foreign)" },
      { name: "Sam Sand Dunes", description: "The quintessential desert experience with camel safaris, cultural performances, and stunning sunset views over the dunes.", timings: "Best at sunrise/sunset", entryFee: "Camel safari ₹500-₹2000" },
      { name: "Gadisar Lake", description: "An artificial lake built in 1400 AD, surrounded by temples, shrines, and ghats — a peaceful retreat.", timings: "8:00 AM - 6:00 PM", entryFee: "Free" },
      { name: "Desert National Park", description: "One of the largest national parks in India, showcasing the ecosystem of the Thar Desert with diverse wildlife.", timings: "Sunrise to sunset", entryFee: "₹100 (Indian), ₹300 (Foreign)" }
    ],
    hotels: [
      { name: "Suryagarh", category: "luxury", priceRange: "₹20,000 - ₹50,000", rating: 4.8 },
      { name: "The Serai", category: "luxury", priceRange: "₹25,000 - ₹60,000", rating: 4.7 },
      { name: "Hotel Mandir Palace", category: "mid-range", priceRange: "₹3,500 - ₹8,000", rating: 4.3 },
      { name: "Zostel Jaisalmer", category: "budget", priceRange: "₹500 - ₹1,500", rating: 4.1 },
      { name: "Desert Boy Guest House", category: "budget", priceRange: "₹600 - ₹1,500", rating: 4.0 }
    ],
    food: [
      { dish: "Ker Sangri", type: "side dish", where: "Suryagarh Restaurant" },
      { dish: "Dal Baati Churma", type: "main course", where: "Chokhi Dhani, Jaisalmer" },
      { dish: "Gatte Ki Sabzi", type: "main course", where: "Trio Restaurant" },
      { dish: "Makhania Lassi", type: "beverage", where: "Free Sky Restaurant" },
      { dish: "Pyaaz Kachori", type: "snack", where: "Street stalls near fort" }
    ],
    festivals: [
      { name: "Desert Festival", month: "February", description: "A three-day extravaganza celebrating Rajasthani culture with camel races, folk music, turban tying, and Mr. Desert contest." },
      { name: "Jaisalmer International Film Festival", month: "December", description: "An independent film festival set against the stunning backdrop of the Golden City." }
    ],
    travelTips: {
      howToReach: { air: "Jaisalmer Airport (JSA), limited flights — Jodhpur (280 km) is better connected", train: "Jaisalmer Railway Station, connected to Delhi via Thar Express", road: "NH 15 connects to Jodhpur (280 km), Bikaner (330 km)" },
      localTransport: ["Auto Rickshaw", "Cab", "Camel (for desert areas)", "Walking (within fort)"],
      tips: ["Book desert safari in advance during peak season", "Carry warm clothes for desert nights — it gets very cold", "Visit Sam Dunes at sunset for the best experience", "Explore the fort on foot — the lanes are too narrow for vehicles"]
    },
    mapUrl: "https://maps.google.com/?q=Jaisalmer,Rajasthan"
  },
  {
    id: "ajmer",
    name: "Ajmer",
    nickname: "City of Faith",
    district: "Ajmer",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Ajmer is a city of spiritual significance, home to the revered Dargah Sharif of Khwaja Moinuddin Chishti. Founded by Ajayraj Chauhan in the 7th century, it is one of Rajasthan's most important pilgrimage sites, attracting devotees of all faiths. The city blends Islamic and Rajput heritage beautifully.",
    bestTime: "October to March",
    temperature: "8°C (winter) to 42°C (summer)",
    language: "Hindi, Rajasthani, Urdu",
    region: "North",
    type: ["religious", "heritage"],
    attractions: [
      { name: "Dargah Sharif", description: "The shrine of Khwaja Moinuddin Chishti, one of the most sacred Muslim pilgrimage sites in India, visited by millions annually.", timings: "4:00 AM - 10:00 PM", entryFee: "Free" },
      { name: "Ana Sagar Lake", description: "A beautiful artificial lake built by Arnoraja in the 12th century, with marble pavilions and gardens along its banks.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Adhai Din Ka Jhonpra", description: "A remarkable mosque originally a Sanskrit college, converted in just two and a half days — featuring stunning Indo-Islamic architecture.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Taragarh Fort", description: "A massive hilltop fort offering panoramic views, known as the Star Fort, built in the 7th century.", timings: "9:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Nasiyan Jain Temple", description: "A stunning Digambar Jain temple known as the Red Temple, featuring a spectacular gold-plated wooden model of the Jain concept of the universe.", timings: "8:30 AM - 5:00 PM", entryFee: "₹10" }
    ],
    hotels: [
      { name: "The Merwara Estate", category: "luxury", priceRange: "₹12,000 - ₹25,000", rating: 4.5 },
      { name: "Hotel Mansingh Palace", category: "mid-range", priceRange: "₹3,000 - ₹6,000", rating: 4.2 },
      { name: "Hotel Regency", category: "mid-range", priceRange: "₹2,500 - ₹5,000", rating: 4.0 },
      { name: "Zostel Ajmer", category: "budget", priceRange: "₹500 - ₹1,200", rating: 4.1 },
      { name: "Tourist Guest House", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.8 }
    ],
    food: [
      { dish: "Sohan Halwa", type: "dessert", where: "Ajmer Sweets" },
      { dish: "Kadhi Kachori", type: "snack", where: "Street stalls near Dargah" },
      { dish: "Mutton Biryani", type: "main course", where: "Karim's near Dargah" },
      { dish: "Pheni", type: "dessert", where: "Madar Gate area" },
      { dish: "Dal Baati Churma", type: "main course", where: "Chokhi Dhani, Ajmer" }
    ],
    festivals: [
      { name: "Urs Festival", month: "May-June", description: "The annual death anniversary of Khwaja Moinuddin Chishti, attracting millions of devotees for six days of prayers and celebrations." },
      { name: "Pushkar Fair", month: "November", description: "Held in nearby Pushkar, one of the world's largest camel fairs with cultural events and competitions." }
    ],
    travelTips: {
      howToReach: { air: "Jaipur Airport (130 km), Kishangarh Airport (27 km)", train: "Ajmer Junction, well connected to Delhi, Mumbai, Jaipur", road: "NH 8 connects to Jaipur (130 km), Delhi (390 km)" },
      localTransport: ["Auto Rickshaw", "City Bus", "Cab", "Walking (near Dargah)"],
      tips: ["Cover your head before entering Dargah Sharif", "Remove shoes before entering the shrine", "Visit Ana Sagar Lake at sunset", "Pushkar is just 15 km — visit both in one trip"]
    },
    mapUrl: "https://maps.google.com/?q=Ajmer,Rajasthan"
  },
  {
    id: "pushkar",
    name: "Pushkar",
    nickname: "Sacred City",
    district: "Ajmer",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Pushkar is one of the oldest existing cities in India and one of the five sacred dhams for Hindus. Built around the holy Pushkar Lake with 52 bathing ghats, it is home to the only Brahma temple in the world. The annual Pushkar Camel Fair transforms this small town into a vibrant cultural spectacle.",
    bestTime: "October to March",
    temperature: "8°C (winter) to 42°C (summer)",
    language: "Hindi, Rajasthani",
    region: "North",
    type: ["religious", "heritage"],
    attractions: [
      { name: "Brahma Temple", description: "The only temple in the world dedicated to Lord Brahma, the creator in Hindu trinity, dating back to the 14th century.", timings: "6:00 AM - 9:00 PM", entryFee: "Free" },
      { name: "Pushkar Lake", description: "A sacred lake with 52 ghats where pilgrims take ritual baths, surrounded by over 500 temples.", timings: "Open all day", entryFee: "Free" },
      { name: "Savitri Temple", description: "A hilltop temple dedicated to Goddess Savitri, offering panoramic views of Pushkar and the surrounding desert.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Old Rangji Temple", description: "A unique temple blending South Indian and Rajput architectural styles, dedicated to Lord Vishnu.", timings: "6:00 AM - 12:00 PM, 4:00 PM - 8:00 PM", entryFee: "Free" },
      { name: "Pushkar Camel Fair Ground", description: "The venue of the world-famous Pushkar Camel Fair, where thousands of camels, cattle, and traders gather annually.", timings: "Fair in November", entryFee: "Free" }
    ],
    hotels: [
      { name: "Ananta Spa & Resort", category: "luxury", priceRange: "₹15,000 - ₹35,000", rating: 4.6 },
      { name: "Pushkar Palace", category: "mid-range", priceRange: "₹3,000 - ₹8,000", rating: 4.3 },
      { name: "Hotel Brahma Horizon", category: "mid-range", priceRange: "₹2,500 - ₹5,000", rating: 4.1 },
      { name: "Zostel Pushkar", category: "budget", priceRange: "₹500 - ₹1,200", rating: 4.2 },
      { name: "Moustache Pushkar", category: "budget", priceRange: "₹400 - ₹1,000", rating: 4.0 }
    ],
    food: [
      { dish: "Malpua", type: "dessert", where: "Pushkar street stalls" },
      { dish: "Poha", type: "breakfast", where: "Main market area" },
      { dish: "Lassi", type: "beverage", where: "Sunset Cafe" },
      { dish: "Thali", type: "main course", where: "La Pizzeria" },
      { dish: "Dal Bati Churma", type: "main course", where: "Rajasthani restaurants" }
    ],
    festivals: [
      { name: "Pushkar Camel Fair", month: "November", description: "One of the world's largest camel fairs with trading, races, cultural events, and the famous moustache competition." },
      { name: "Holi Festival", month: "March", description: "Pushkar celebrates Holi with great enthusiasm, with colors, music, and bonfires." }
    ],
    travelTips: {
      howToReach: { air: "Jaipur Airport (150 km), Kishangarh Airport (40 km)", train: "Ajmer Junction (15 km), then bus/taxi to Pushkar", road: "NH 8 to Ajmer, then 15 km to Pushkar" },
      localTransport: ["Walking (small town)", "Auto Rickshaw", "Bicycle", "Camel Ride"],
      tips: ["No meat or alcohol is allowed in Pushkar — it's a sacred city", "Remove shoes before entering temples and ghats", "Book accommodation well in advance for the Camel Fair", "Walk around the lake at sunrise for a spiritual experience"]
    },
    mapUrl: "https://maps.google.com/?q=Pushkar,Rajasthan"
  },
  {
    id: "bikaner",
    name: "Bikaner",
    nickname: "Camel Country",
    district: "Bikaner",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Bikaner, founded in 1488 by Rao Bika, is known as Camel Country for its thriving camel breeding and the world-famous Bikaneri bhujia. The city boasts magnificent forts, ornate havelis, and the unique Karni Mata Temple (Rat Temple). Its location in the Thar Desert gives it a distinct character.",
    bestTime: "October to March",
    temperature: "4°C (winter) to 46°C (summer)",
    language: "Hindi, Rajasthani, Marwari",
    region: "North",
    type: ["heritage"],
    attractions: [
      { name: "Junagarh Fort", description: "A magnificent fort built in 1593 that was never conquered, featuring stunning palaces, temples, and pavilions within its walls.", timings: "10:00 AM - 5:00 PM", entryFee: "₹50 (Indian), ₹300 (Foreign)" },
      { name: "Karni Mata Temple (Deshnok)", description: "The famous Rat Temple, home to thousands of holy rats believed to be reincarnated devotees — a unique spiritual experience.", timings: "6:00 AM - 10:00 PM", entryFee: "Free" },
      { name: "Lalgarh Palace", description: "A grand red sandstone palace blending Rajput, Mughal, and European architecture, now partly a heritage hotel and museum.", timings: "10:00 AM - 5:00 PM", entryFee: "₹30" },
      { name: "National Research Centre on Camel", description: "A unique camel breeding farm where you can learn about different camel breeds and enjoy camel rides and camel milk ice cream.", timings: "2:30 PM - 6:00 PM", entryFee: "₹30" },
      { name: "Gajner Palace & Wildlife Sanctuary", description: "A lakeside palace turned hotel surrounded by a sanctuary with nilgai, chinkara, and migratory birds.", timings: "Open all day", entryFee: "₹100" }
    ],
    hotels: [
      { name: "Lalgarh Palace Hotel", category: "luxury", priceRange: "₹10,000 - ₹25,000", rating: 4.5 },
      { name: "Gajner Palace Hotel", category: "luxury", priceRange: "₹12,000 - ₹30,000", rating: 4.6 },
      { name: "Hotel Narendra Bhawan", category: "mid-range", priceRange: "₹4,000 - ₹8,000", rating: 4.4 },
      { name: "Zostel Bikaner", category: "budget", priceRange: "₹500 - ₹1,200", rating: 4.0 },
      { name: "Hotel Jaswant Bhawan", category: "budget", priceRange: "₹800 - ₹2,000", rating: 4.1 }
    ],
    food: [
      { dish: "Bhujia", type: "snack", where: "Bhikharam Chandmal Bhujiawala" },
      { dish: "Rasgulla", type: "dessert", where: "Choudhary Sweets" },
      { dish: "Dal Baati Churma", type: "main course", where: "Chokhi Dhani, Bikaner" },
      { dish: "Papad Ki Sabzi", type: "main course", where: "Local restaurants" },
      { dish: "Camel Milk Ice Cream", type: "dessert", where: "Camel Research Centre" }
    ],
    festivals: [
      { name: "Camel Festival", month: "January", description: "A unique festival celebrating the ship of the desert with camel dances, races, and beauty contests." },
      { name: "Gangaur Festival", month: "March-April", description: "An 18-day celebration of Goddess Gauri with processions and folk performances." },
      { name: "Karni Mata Fair", month: "March-April & September-October", description: "Twice-yearly fair at the famous Rat Temple attracting thousands of devotees." }
    ],
    travelTips: {
      howToReach: { air: "Nal Airport (BKB), limited flights — Jodhpur (250 km) better connected", train: "Bikaner Junction, connected to Delhi, Jaipur, Jodhpur", road: "NH 62 connects to Jodhpur (250 km), Jaipur (330 km)" },
      localTransport: ["Auto Rickshaw", "Cab", "City Bus", "Cycle Rickshaw"],
      tips: ["Visit Karni Mata Temple early morning to avoid crowds", "Buy authentic Bikaneri bhujia from the original shops", "Carry water and sun protection — Bikaner is very hot", "The Camel Research Centre is unique — don't miss it"]
    },
    mapUrl: "https://maps.google.com/?q=Bikaner,Rajasthan"
  },
  {
    id: "alwar",
    name: "Alwar",
    nickname: "Tiger Gate of Rajasthan",
    district: "Alwar",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Alwar, known as the Tiger Gate of Rajasthan, is one of the oldest kingdoms in Rajasthan. Located in the Aravalli hills, it is home to the Sariska Tiger Reserve and boasts a rich history with magnificent forts, palaces, and beautiful lakes. Its proximity to Delhi makes it a popular weekend getaway.",
    bestTime: "October to March",
    temperature: "6°C (winter) to 43°C (summer)",
    language: "Hindi, Rajasthani, Ahirwati",
    region: "North",
    type: ["heritage", "nature"],
    attractions: [
      { name: "Sariska Tiger Reserve", description: "A national park and tiger reserve spread over 800 sq km, home to Bengal tigers, leopards, and diverse wildlife in the Aravalli hills.", timings: "6:00 AM - 3:00 PM (Oct-Mar)", entryFee: "₹250 (Indian), ₹500 (Foreign)" },
      { name: "Bala Quila (Alwar Fort)", description: "A massive fort perched on a hilltop, offering panoramic views of the city and surrounding Aravalli ranges.", timings: "10:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "City Palace (Vinay Vilas)", description: "An 18th-century palace blending Rajput and Mughal architecture, now housing government offices and a museum.", timings: "10:00 AM - 5:00 PM", entryFee: "₹25" },
      { name: "Siliserh Lake", description: "A beautiful lake with a palace built on its banks, perfect for boating and picnics amidst scenic surroundings.", timings: "8:00 AM - 6:00 PM", entryFee: "₹50" },
      { name: "Moosi Maharani Ki Chhatri", description: "An elegant cenotaph built in memory of Moosi Maharani, featuring intricate carvings and a beautiful garden setting.", timings: "10:00 AM - 5:00 PM", entryFee: "₹20" }
    ],
    hotels: [
      { name: "Neemrana Hill Fort", category: "luxury", priceRange: "₹12,000 - ₹30,000", rating: 4.6 },
      { name: "Sariska Palace", category: "luxury", priceRange: "₹8,000 - ₹20,000", rating: 4.4 },
      { name: "Hotel Alwar Bagh", category: "mid-range", priceRange: "₹3,000 - ₹6,000", rating: 4.1 },
      { name: "Hotel Ashapurna", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.9 },
      { name: "RTDC Hotel Khatri", category: "budget", priceRange: "₹600 - ₹1,500", rating: 3.5 }
    ],
    food: [
      { dish: "Alwar Ka Mawa", type: "dessert", where: "Baba Thakur Das Sweets" },
      { dish: "Kalakand", type: "dessert", where: "Alwar sweet shops" },
      { dish: "Dal Baati Churma", type: "main course", where: "Local restaurants" },
      { dish: "Pyaaz Kachori", type: "snack", where: "Street stalls" },
      { dish: "Mirchi Bada", type: "snack", where: "Market area" }
    ],
    festivals: [
      { name: "Alwar Festival", month: "February", description: "A cultural festival showcasing Rajasthani folk music, dance, and crafts." },
      { name: "Sariska Tiger Reserve Safari Season", month: "October to March", description: "Peak season for tiger sightings and wildlife photography." }
    ],
    travelTips: {
      howToReach: { air: "Jaipur Airport (150 km), Delhi Airport (160 km)", train: "Alwar Junction, well connected to Delhi (3 hrs) and Jaipur", road: "NH 8 connects to Delhi (160 km), Jaipur (150 km)" },
      localTransport: ["Auto Rickshaw", "Cab", "Jeep (for Sariska)", "City Bus"],
      tips: ["Book Sariska safari in advance during peak season", "Visit Siliserh Lake for a peaceful afternoon", "Alwar Ka Mawa is a must-try local sweet", "Day trip from Delhi is easily possible"]
    },
    mapUrl: "https://maps.google.com/?q=Alwar,Rajasthan"
  },
  {
    id: "bharatpur",
    name: "Bharatpur",
    nickname: "Eastern Gateway to Rajasthan",
    district: "Bharatpur",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Bharatpur is renowned for the Keoladeo National Park, a UNESCO World Heritage Site and one of the world's finest bird breeding and feeding grounds. Founded in 1733 by Maharaja Suraj Mal, the Jat kingdom of Bharatpur was one of the most powerful in Rajasthan. The city is a paradise for birdwatchers and nature lovers.",
    bestTime: "October to March (for migratory birds)",
    temperature: "7°C (winter) to 45°C (summer)",
    language: "Hindi, Rajasthani, Braj",
    region: "East",
    type: ["nature", "heritage"],
    attractions: [
      { name: "Keoladeo National Park", description: "A UNESCO World Heritage Site hosting over 350 species of birds, including migratory species from Afghanistan, Turkmenistan, and China.", timings: "6:00 AM - 6:00 PM", entryFee: "₹75 (Indian), ₹500 (Foreign)" },
      { name: "Lohagarh Fort", description: "The Iron Fort — one of the strongest forts in India, which withstood multiple British attacks. Houses a museum with Mughal artifacts.", timings: "9:30 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Deeg Palace", description: "A beautiful palace complex with stunning water gardens and fountains, built as a summer retreat for the Jat rulers.", timings: "9:00 AM - 5:00 PM", entryFee: "₹25" },
      { name: "Bankebihari Temple", description: "A famous Krishna temple in nearby Deeg, known for its beautiful architecture and spiritual significance.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Government Museum", description: "Housed within Lohagarh Fort, displaying a rich collection of archaeological finds, weapons, and miniature paintings.", timings: "9:30 AM - 5:00 PM", entryFee: "₹20" }
    ],
    hotels: [
      { name: "Laxmi Vilas Palace", category: "luxury", priceRange: "₹8,000 - ₹20,000", rating: 4.4 },
      { name: "Chandra Mahal Haveli", category: "mid-range", priceRange: "₹3,500 - ₹7,000", rating: 4.2 },
      { name: "Hotel Sunbird", category: "mid-range", priceRange: "₹2,500 - ₹5,000", rating: 4.0 },
      { name: "Birder's Inn", category: "budget", priceRange: "₹1,500 - ₹3,000", rating: 4.1 },
      { name: "RTDC Hotel Saras", category: "budget", priceRange: "₹600 - ₹1,500", rating: 3.5 }
    ],
    food: [
      { dish: "Bharatpur Sweets", type: "dessert", where: "Local sweet shops" },
      { dish: "Dal Baati Churma", type: "main course", where: "Rajasthani restaurants" },
      { dish: "Kachori", type: "snack", where: "Street stalls near bus stand" },
      { dish: "Peda", type: "dessert", where: "Deeg area" },
      { dish: "Lassi", type: "beverage", where: "Main market" }
    ],
    festivals: [
      { name: "Brij Festival", month: "February-March", description: "Celebrating the culture of the Braj region with Raslila performances and devotional music." },
      { name: "Bird Watching Season", month: "October to March", description: "Peak season when migratory birds from Central Asia and Siberia arrive at Keoladeo National Park." }
    ],
    travelTips: {
      howToReach: { air: "Agra Airport (55 km), Delhi Airport (200 km)", train: "Bharatpur Junction, on Delhi-Mumbai line", road: "NH 11 connects to Jaipur (180 km), Agra (55 km)" },
      localTransport: ["Auto Rickshaw", "Cycle Rickshaw", "Bicycle (best for bird park)", "Walking"],
      tips: ["Rent a bicycle inside Keoladeo Park — it's the best way to explore", "Visit early morning for best bird sightings", "Carry binoculars and a bird guide book", "Combine with Agra visit — it's only 55 km away"]
    },
    mapUrl: "https://maps.google.com/?q=Bharatpur,Rajasthan"
  },
  {
    id: "chittorgarh",
    name: "Chittorgarh",
    nickname: "City of Bravery",
    district: "Chittorgarh",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Chittorgarh, the City of Bravery, is home to the largest fort in India and embodies the spirit of Rajput valor and sacrifice. The fort has witnessed three legendary sieges and jauhars (self-immolation), making it a symbol of Rajput pride. Founded in the 7th century, it was the capital of Mewar before Udaipur.",
    bestTime: "October to March",
    temperature: "7°C (winter) to 43°C (summer)",
    language: "Hindi, Rajasthani, Mewari",
    region: "South",
    type: ["heritage"],
    attractions: [
      { name: "Chittorgarh Fort", description: "The largest fort in India, spanning 700 acres, with a rich history of sieges, jauhar, and Rajput valor. A UNESCO World Heritage Site.", timings: "9:45 AM - 5:45 PM", entryFee: "₹40 (Indian), ₹200 (Foreign)" },
      { name: "Vijay Stambh (Tower of Victory)", description: "A 37-meter tall nine-story tower built in 1448 by Rana Kumbha to commemorate his victory, with intricate carvings.", timings: "Within fort hours", entryFee: "Included in fort ticket" },
      { name: "Kirti Stambh (Tower of Fame)", description: "A 22-meter tower dedicated to Adinath, the first Jain Tirthankara, built in the 12th century with Jain sculptures.", timings: "Within fort hours", entryFee: "Included in fort ticket" },
      { name: "Rani Padmini's Palace", description: "The palace of the legendary queen whose beauty led to the siege of Chittor by Alauddin Khilji.", timings: "Within fort hours", entryFee: "Included in fort ticket" },
      { name: "Meera Temple", description: "A temple dedicated to the saint-poetess Meera Bai, known for her devotion to Lord Krishna.", timings: "Within fort hours", entryFee: "Free" }
    ],
    hotels: [
      { name: "Castle Bijaipur", category: "luxury", priceRange: "₹8,000 - ₹18,000", rating: 4.5 },
      { name: "Hotel Bassi Fort Palace", category: "mid-range", priceRange: "₹3,500 - ₹7,000", rating: 4.2 },
      { name: "Hotel Padmini", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.9 },
      { name: "Hotel Pratap Palace", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.8 },
      { name: "RTDC Hotel Panna Dhay", category: "budget", priceRange: "₹600 - ₹1,500", rating: 3.5 }
    ],
    food: [
      { dish: "Dal Baati Churma", type: "main course", where: "Local restaurants" },
      { dish: "Gatte Ki Sabzi", type: "main course", where: "Highway dhabas" },
      { dish: "Mirchi Bada", type: "snack", where: "Street stalls" },
      { dish: "Mawa Kachori", type: "dessert", where: "Sweet shops" },
      { dish: "Lassi", type: "beverage", where: "Main market" }
    ],
    festivals: [
      { name: "Jauhar Mela", month: "March", description: "A unique festival commemorating the jauhar (self-immolation) of Rani Padmini and other Rajput women." },
      { name: "Gangaur Festival", month: "March-April", description: "Celebrated with great fervor, honoring Goddess Gauri with processions and folk performances." }
    ],
    travelTips: {
      howToReach: { air: "Udaipur Airport (100 km)", train: "Chittorgarh Junction, on Delhi-Mumbai line", road: "NH 76 connects to Udaipur (100 km), Jaipur (310 km)" },
      localTransport: ["Auto Rickshaw", "Cab", "Jeep (for fort)", "Walking (within fort)"],
      tips: ["Wear comfortable shoes — the fort is massive and requires walking", "Hire a guide to understand the rich history", "Carry water and sun protection", "Allow a full day to explore the fort properly"]
    },
    mapUrl: "https://maps.google.com/?q=Chittorgarh,Rajasthan"
  },
  {
    id: "kota",
    name: "Kota",
    nickname: "Education City",
    district: "Kota",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Kota, situated on the banks of the Chambal River, is famous as India's coaching capital for engineering and medical entrance exams. Beyond its educational fame, Kota has a rich history as a princely state, with impressive forts, palaces, and the unique Kota Doria sarees. The Chambal gardens and river add to its charm.",
    bestTime: "October to March",
    temperature: "8°C (winter) to 44°C (summer)",
    language: "Hindi, Rajasthani, Harauti",
    region: "East",
    type: ["heritage"],
    attractions: [
      { name: "Kota Garh (City Palace)", description: "A grand palace complex with museums showcasing Rajput heritage, weapons, and miniature paintings of the Kota school.", timings: "10:00 AM - 5:00 PM", entryFee: "₹30" },
      { name: "Chambal Garden", description: "A beautiful garden on the banks of the Chambal River with a picturesque setting and a small pond with crocodiles.", timings: "9:00 AM - 6:00 PM", entryFee: "₹20" },
      { name: "Seven Wonder Park", description: "A unique park featuring scaled replicas of the Seven Wonders of the World, a popular family attraction.", timings: "2:00 PM - 9:00 PM", entryFee: "₹30" },
      { name: "Kansua Temple", description: "An ancient Shiva temple with a unique four-faced lingam, associated with the Mahabharata.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Godavari Dham Temple", description: "A beautiful temple on the Chambal riverbank, known for its evening aarti and peaceful atmosphere.", timings: "6:00 AM - 9:00 PM", entryFee: "Free" }
    ],
    hotels: [
      { name: "Hotel Country Inn & Suites", category: "luxury", priceRange: "₹8,000 - ₹15,000", rating: 4.4 },
      { name: "Hotel Surya Royal", category: "mid-range", priceRange: "₹3,000 - ₹6,000", rating: 4.1 },
      { name: "Hotel Raj Laxmi", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.9 },
      { name: "Hotel Sukh Sagar", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.8 },
      { name: "Dormitory/PG (student area)", category: "budget", priceRange: "₹3,000 - ₹8,000/month", rating: 3.5 }
    ],
    food: [
      { dish: "Kota Kachori", type: "snack", where: "Jhalawar Road stalls" },
      { dish: "Dal Baati Churma", type: "main course", where: "Chokhi Dhani, Kota" },
      { dish: "Pyaaz Kachori", type: "snack", where: "Sweets shops near station" },
      { dish: "Rasgulla", type: "dessert", where: "Annapurna Sweets" },
      { dish: "Samosa", type: "snack", where: "Station road stalls" }
    ],
    festivals: [
      { name: "Dussehra Mela", month: "October", description: "A grand celebration with Ramlila performances and a massive effigy burning ceremony." },
      { name: "Kota Adventure Festival", month: "January", description: "Featuring water sports on the Chambal, rock climbing, and adventure activities." }
    ],
    travelTips: {
      howToReach: { air: "Kota Airport (limited), Jaipur Airport (240 km)", train: "Kota Junction, on Delhi-Mumbai line — a major railway hub", road: "NH 12 connects to Jaipur (240 km), Udaipur (280 km)" },
      localTransport: ["Auto Rickshaw", "Cab (Ola/Uber)", "City Bus", "Cycle Rickshaw"],
      tips: ["Kota is very student-friendly with affordable food options", "Buy Kota Doria sarees as souvenirs", "Visit Chambal Garden for a peaceful evening", "The Seven Wonder Park is great for families with kids"]
    },
    mapUrl: "https://maps.google.com/?q=Kota,Rajasthan"
  },
  {
    id: "bundi",
    name: "Bundi",
    nickname: "City of Stepwells",
    district: "Bundi",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Bundi is a charming town known for its magnificent stepwells (baoris), ornate palaces, and blue-painted houses reminiscent of Jodhpur. Often called the 'Queen of Hadoti', Bundi inspired Rudyard Kipling's Kim. Its narrow lanes, ancient water systems, and the imposing Taragarh Fort make it a hidden gem of Rajasthan.",
    bestTime: "October to March",
    temperature: "8°C (winter) to 43°C (summer)",
    language: "Hindi, Rajasthani, Harauti",
    region: "East",
    type: ["heritage"],
    attractions: [
      { name: "Taragarh Fort", description: "A massive hilltop fort with stunning views, known for its intricate water systems and the largest battlements in the world.", timings: "8:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Bundi Palace", description: "A magnificent palace with some of the finest Rajput murals and miniature paintings in Rajasthan.", timings: "8:00 AM - 5:00 PM", entryFee: "₹100 (Indian), ₹300 (Foreign)" },
      { name: "Raniji Ki Baori", description: "The Queen's Stepwell — a stunning 46-meter deep stepwell with carved pillars and ornate arches, built in 1699.", timings: "8:00 AM - 6:00 PM", entryFee: "Free" },
      { name: "Sukh Mahal", description: "A summer palace on the banks of Jait Sagar lake, where Rudyard Kipling stayed and wrote part of Kim.", timings: "8:00 AM - 6:00 PM", entryFee: "₹20" },
      { name: "Nawal Sagar Lake", description: "A picturesque lake with a half-submerged temple of Varuna, reflecting the fort and palace in its waters.", timings: "Open all day", entryFee: "Free" }
    ],
    hotels: [
      { name: "Bundi Palace Heritage Hotel", category: "mid-range", priceRange: "₹3,000 - ₹7,000", rating: 4.3 },
      { name: "Hotel Dev Niwas", category: "mid-range", priceRange: "₹2,500 - ₹5,000", rating: 4.1 },
      { name: "Haveli Braj Bhushanjee", category: "mid-range", priceRange: "₹2,000 - ₹4,500", rating: 4.2 },
      { name: "Zostel Bundi", category: "budget", priceRange: "₹500 - ₹1,200", rating: 4.0 },
      { name: "Kipling's Lodge", category: "budget", priceRange: "₹800 - ₹2,000", rating: 4.1 }
    ],
    food: [
      { dish: "Bundi Ki Laddu", type: "dessert", where: "Bundi sweet shops" },
      { dish: "Dal Baati Churma", type: "main course", where: "Local restaurants" },
      { dish: "Mirchi Bada", type: "snack", where: "Street stalls" },
      { dish: "Mawa Kachori", type: "dessert", where: "Main market" },
      { dish: "Gatte Ki Sabzi", type: "main course", where: "Highway dhabas" }
    ],
    festivals: [
      { name: "Bundi Utsav", month: "November", description: "A cultural festival celebrating the heritage of Bundi with folk performances, arts, and crafts." },
      { name: "Kajari Teej", month: "July-August", description: "A monsoon festival celebrated with folk songs, swings, and traditional rituals." }
    ],
    travelTips: {
      howToReach: { air: "Jaipur Airport (210 km), Kota Airport (35 km)", train: "Bundi Railway Station, connected to Kota and major cities", road: "NH 12 connects to Kota (35 km), Jaipur (210 km)" },
      localTransport: ["Auto Rickshaw", "Walking (best way to explore)", "Cycle Rickshaw", "Motorcycle"],
      tips: ["Bundi is best explored on foot — the lanes are narrow and charming", "Visit the stepwells — they're architectural marvels", "Hire a local guide for the palace murals", "Combine with Kota — it's only 35 km away"]
    },
    mapUrl: "https://maps.google.com/?q=Bundi,Rajasthan"
  },
  {
    id: "mount-abu",
    name: "Mount Abu",
    nickname: "Oasis of Rajasthan",
    district: "Sirohi",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Mount Abu is Rajasthan's only hill station, a cool oasis in the Aravalli range at 1,220 meters. Known for the exquisite Dilwara Jain Temples, the serene Nakki Lake, and stunning sunset points, it has been a retreat since ancient times. The town blends spiritual significance with natural beauty.",
    bestTime: "February to June, September to November",
    temperature: "4°C (winter) to 33°C (summer)",
    language: "Hindi, Rajasthani, English",
    region: "South",
    type: ["nature", "religious"],
    attractions: [
      { name: "Dilwara Temples", description: "Five stunning Jain temples built between 11th-13th centuries, renowned for their extraordinary marble carvings — among the finest in the world.", timings: "12:00 PM - 5:00 PM (Jains), 6:00 AM - 6:00 PM (others with restrictions)", entryFee: "Free" },
      { name: "Nakki Lake", description: "A sacred lake believed to be dug by gods, offering boating with views of surrounding hills and the famous Toad Rock.", timings: "9:00 AM - 6:00 PM", entryFee: "Boating ₹100-₹200" },
      { name: "Sunset Point", description: "A popular viewpoint offering breathtaking sunset views over the Aravalli hills — a must-visit experience.", timings: "Open all day (best at sunset)", entryFee: "Free" },
      { name: "Guru Shikhar", description: "The highest peak of the Aravalli range at 1,722 meters, offering panoramic views and a temple of Dattatreya.", timings: "6:00 AM - 7:00 PM", entryFee: "Free" },
      { name: "Achalgarh Fort", description: "A medieval fort with the Achaleshwar Mahadev Temple and a stunning Shiva lingam made of brass.", timings: "9:00 AM - 5:00 PM", entryFee: "Free" }
    ],
    hotels: [
      { name: "The Colonial Manor", category: "luxury", priceRange: "₹10,000 - ₹25,000", rating: 4.6 },
      { name: "Hotel Hillock", category: "mid-range", priceRange: "₹3,500 - ₹7,000", rating: 4.2 },
      { name: "Hotel Shikhar", category: "mid-range", priceRange: "₹2,500 - ₹5,000", rating: 4.0 },
      { name: "Hotel Savera", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.8 },
      { name: "RTDC Hotel Shikhar", category: "budget", priceRange: "₹600 - ₹1,500", rating: 3.5 }
    ],
    food: [
      { dish: "Rajasthani Thali", type: "main course", where: "Hotel Hillock restaurant" },
      { dish: "Dal Baati Churma", type: "main course", where: "Local restaurants" },
      { dish: "Pav Bhaji", type: "snack", where: "Nakki Lake stalls" },
      { dish: "Corn on the Cob", type: "snack", where: "Sunset Point" },
      { dish: "Chai & Pakoras", type: "snack", where: "Hillside stalls" }
    ],
    festivals: [
      { name: "Summer Festival", month: "May", description: "A three-day festival celebrating the hill station with cultural programs, folk dances, and boat races on Nakki Lake." },
      { name: "Mahavir Jayanti", month: "March-April", description: "Celebrated with great devotion at the Dilwara Temples with processions and prayers." }
    ],
    travelTips: {
      howToReach: { air: "Udaipur Airport (185 km), Ahmedabad Airport (220 km)", train: "Abu Road Station (28 km), on Delhi-Mumbai line", road: "NH 14 connects to Udaipur (185 km), Ahmedabad (220 km)" },
      localTransport: ["Walking", "Auto Rickshaw", "Cab", "Motorcycle"],
      tips: ["Carry warm clothes — evenings are cool even in summer", "Visit Dilwara Temples early to avoid crowds", "Sunset Point gets crowded — arrive early", "Boating on Nakki Lake is a must-do"]
    },
    mapUrl: "https://maps.google.com/?q=Mount+Abu,Rajasthan"
  },
  {
    id: "sawai-madhopur",
    name: "Sawai Madhopur",
    nickname: "Tiger City",
    district: "Sawai Madhopur",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Sawai Madhopur is the gateway to Ranthambore National Park, one of the best places in India to spot Bengal tigers in the wild. Founded by Maharaja Sawai Madho Singh I in 1765, the city combines wildlife adventure with historical grandeur through the magnificent Ranthambore Fort.",
    bestTime: "October to June (park season)",
    temperature: "8°C (winter) to 44°C (summer)",
    language: "Hindi, Rajasthani",
    region: "East",
    type: ["nature", "heritage"],
    attractions: [
      { name: "Ranthambore National Park", description: "One of India's finest tiger reserves, spread over 1,334 sq km, where tigers can be spotted amid ruins and lakes.", timings: "6:00 AM - 10:00 AM, 2:30 PM - 6:00 PM", entryFee: "Safari ₹500-₹3,000" },
      { name: "Ranthambore Fort", description: "A UNESCO World Heritage Site, a massive 10th-century fort within the national park, offering stunning views.", timings: "6:00 AM - 6:00 PM", entryFee: "₹15 (Indian), ₹200 (Foreign)" },
      { name: "Trinetra Ganesh Temple", description: "One of the oldest Ganesha temples in Rajasthan, located within Ranthambore Fort, receiving letters from devotees worldwide.", timings: "6:00 AM - 6:00 PM", entryFee: "Free" },
      { name: "Surwal Lake", description: "A serene lake perfect for birdwatching, especially during winter when migratory birds arrive.", timings: "Open all day", entryFee: "Free" },
      { name: "Khandar Fort", description: "A massive fort on the outskirts, less visited but equally impressive with its strategic hilltop location.", timings: "9:00 AM - 5:00 PM", entryFee: "₹20" }
    ],
    hotels: [
      { name: "Oberoi Vanyavilas", category: "luxury", priceRange: "₹35,000 - ₹80,000", rating: 4.9 },
      { name: "Aman-i-Khas", category: "luxury", priceRange: "₹40,000 - ₹90,000", rating: 4.8 },
      { name: "Tiger Den Resort", category: "mid-range", priceRange: "₹5,000 - ₹12,000", rating: 4.3 },
      { name: "Ranthambore Regency", category: "mid-range", priceRange: "₹4,000 - ₹8,000", rating: 4.1 },
      { name: "Zostel Ranthambore", category: "budget", priceRange: "₹800 - ₹2,000", rating: 4.0 }
    ],
    food: [
      { dish: "Laal Maas", type: "main course", where: "Resort restaurants" },
      { dish: "Dal Baati Churma", type: "main course", where: "Chokhi Dhani" },
      { dish: "Safed Maas", type: "main course", where: "Heritage hotels" },
      { dish: "Kachori", type: "snack", where: "City market" },
      { dish: "Lassi", type: "beverage", where: "Main market" }
    ],
    festivals: [
      { name: "Ganesh Chaturthi", month: "August-September", description: "Celebrated with great fervor at the Trinetra Ganesh Temple within Ranthambore Fort." },
      { name: "Ranthambore Safari Season Opening", month: "October", description: "The start of the wildlife safari season with special events and tiger conservation programs." }
    ],
    travelTips: {
      howToReach: { air: "Jaipur Airport (160 km)", train: "Sawai Madhopur Junction, on Delhi-Mumbai line", road: "NH 11 connects to Jaipur (160 km), Agra (180 km)" },
      localTransport: ["Gypsy/Canter (for safari)", "Auto Rickshaw", "Cab", "Walking (in town)"],
      tips: ["Book safaris well in advance — especially during peak season", "Zone 1-5 offers best tiger sighting chances", "Carry binoculars and neutral-colored clothing", "Visit the Ganesh Temple — it's unique within a tiger reserve"]
    },
    mapUrl: "https://maps.google.com/?q=Sawai+Madhopur,Rajasthan"
  },
  {
    id: "sikar",
    name: "Sikar",
    nickname: "Shekhawati's Crown",
    district: "Sikar",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Sikar is a historic city in the Shekhawati region, known for its magnificent havelis adorned with vibrant frescoes. Often called the 'Open Art Gallery of Rajasthan', the Shekhawati region's painted towns are a unique cultural treasure. Sikar combines this artistic heritage with a bustling modern town.",
    bestTime: "October to March",
    temperature: "6°C (winter) to 44°C (summer)",
    language: "Hindi, Rajasthani, Shekhawati",
    region: "North",
    type: ["heritage"],
    attractions: [
      { name: "Sikar Havelis", description: "A collection of stunning havelis with intricate frescoes depicting mythological scenes, daily life, and even early modern inventions.", timings: "Open all day", entryFee: "Free (some charge ₹50-₹100)" },
      { name: "Devgarh Fort", description: "A beautiful fort on a hilltop offering panoramic views of the Shekhawati landscape.", timings: "9:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Raghunathji Temple", description: "An ancient temple known for its beautiful architecture and spiritual significance in the region.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Jeen Mata Temple", description: "A famous temple dedicated to Goddess Jeen Mata, attracting devotees from across Rajasthan during Navratri.", timings: "5:00 AM - 10:00 PM", entryFee: "Free" },
      { name: "Harsh Nath Temple", description: "An ancient Shiva temple on a hilltop, offering scenic views and a peaceful atmosphere.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" }
    ],
    hotels: [
      { name: "Hotel Shekhawati", category: "mid-range", priceRange: "₹2,500 - ₹5,000", rating: 4.0 },
      { name: "Hotel Surya", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.9 },
      { name: "Hotel Rajputana", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.8 },
      { name: "RTDC Hotel", category: "budget", priceRange: "₹600 - ₹1,500", rating: 3.5 },
      { name: "Dharamshala", category: "budget", priceRange: "₹300 - ₹800", rating: 3.2 }
    ],
    food: [
      { dish: "Pyaaz Kachori", type: "snack", where: "Sikar market stalls" },
      { dish: "Dal Baati Churma", type: "main course", where: "Local restaurants" },
      { dish: "Mirchi Bada", type: "snack", where: "Street stalls" },
      { dish: "Ghevar", type: "dessert", where: "Sweet shops" },
      { dish: "Bajre Ki Roti", type: "main course", where: "Highway dhabas" }
    ],
    festivals: [
      { name: "Jeen Mata Fair", month: "March-April & September-October", description: "A major fair held during Navratri at the Jeen Mata Temple, attracting thousands of devotees." },
      { name: "Shekhawati Festival", month: "February", description: "Celebrating the art and culture of the Shekhawati region with fresco tours, folk performances, and crafts." }
    ],
    travelTips: {
      howToReach: { air: "Jaipur Airport (120 km)", train: "Sikar Junction, connected to Jaipur, Delhi", road: "NH 11 connects to Jaipur (120 km), Delhi (280 km)" },
      localTransport: ["Auto Rickshaw", "Cycle Rickshaw", "Walking (for havelis)", "Motorcycle"],
      tips: ["Hire a guide for the fresco trail — the stories are fascinating", "Carry a camera — the havelis are incredibly photogenic", "Visit nearby Nawalgarh and Mandawa for more frescoes", "Best visited as part of a Shekhawati circuit"]
    },
    mapUrl: "https://maps.google.com/?q=Sikar,Rajasthan"
  },
  {
    id: "nagaur",
    name: "Nagaur",
    nickname: "City of Forts",
    district: "Nagaur",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Nagaur is a historic city known for its magnificent Ahhichatragarh Fort and the famous Nagaur Cattle Fair, the second largest in Rajasthan. Founded in the 4th century, it has been ruled by Rajputs, Mughals, and the British. The city's rich heritage is reflected in its forts, mosques, and temples.",
    bestTime: "October to March",
    temperature: "5°C (winter) to 45°C (summer)",
    language: "Hindi, Rajasthani, Marwari",
    region: "North",
    type: ["heritage"],
    attractions: [
      { name: "Ahhichatragarh Fort", description: "A stunning fort with beautiful palaces, fountains, and gardens, recently restored to its former glory. Features the Deep Mahal and Rani Mahal.", timings: "9:00 AM - 5:00 PM", entryFee: "₹50 (Indian), ₹200 (Foreign)" },
      { name: "Nagaur Cattle Fair Ground", description: "The venue of Rajasthan's second largest cattle fair, where thousands of animals are traded amid cultural celebrations.", timings: "Fair in January-February", entryFee: "Free" },
      { name: "Tarkeen Dargah", description: "A revered Sufi shrine attracting devotees of all faiths, known for its spiritual atmosphere and annual Urs.", timings: "5:00 AM - 10:00 PM", entryFee: "Free" },
      { name: "Jain Temple", description: "An ancient Jain temple with intricate carvings and a peaceful atmosphere, reflecting the region's Jain heritage.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Ladnu", description: "A nearby town known as the birthplace of Jainism's Acharya Kalpa Sushil Ji, with beautiful temples.", timings: "Open all day", entryFee: "Free" }
    ],
    hotels: [
      { name: "Ranvas Nagaur", category: "luxury", priceRange: "₹12,000 - ₹25,000", rating: 4.6 },
      { name: "Hotel Nagaur Palace", category: "mid-range", priceRange: "₹2,500 - ₹5,000", rating: 4.0 },
      { name: "Hotel Rajputana", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.8 },
      { name: "RTDC Hotel", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.5 },
      { name: "Dharamshala", category: "budget", priceRange: "₹300 - ₹800", rating: 3.2 }
    ],
    food: [
      { dish: "Nagaur Mirchi Bada", type: "snack", where: "Street stalls" },
      { dish: "Dal Baati Churma", type: "main course", where: "Local restaurants" },
      { dish: "Mawa Kachori", type: "dessert", where: "Sweet shops" },
      { dish: "Pyaaz Kachori", type: "snack", where: "Market area" },
      { dish: "Lassi", type: "beverage", where: "Main market" }
    ],
    festivals: [
      { name: "Nagaur Cattle Fair", month: "January-February", description: "Rajasthan's second largest cattle fair with trading of over 70,000 animals, folk performances, and sports." },
      { name: "Sufi Festival", month: "February", description: "A music festival at the Ahhichatragarh Fort featuring Sufi musicians from across the world." }
    ],
    travelTips: {
      howToReach: { air: "Jodhpur Airport (140 km)", train: "Nagaur Junction, connected to Jodhpur, Jaipur, Delhi", road: "NH 65 connects to Jodhpur (140 km), Bikaner (140 km)" },
      localTransport: ["Auto Rickshaw", "Cab", "City Bus", "Walking"],
      tips: ["Visit during the Cattle Fair for a unique experience", "Stay at Ranvas for a heritage experience within the fort", "The Sufi Festival at the fort is magical", "Nagaur is between Jodhpur and Bikaner — combine all three"]
    },
    mapUrl: "https://maps.google.com/?q=Nagaur,Rajasthan"
  },
  {
    id: "barmer",
    name: "Barmer",
    nickname: "Desert Culture Hub",
    district: "Barmer",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Barmer is a desert town in western Rajasthan, known for its rich folk culture, intricate embroidery, and wood carving. The town is a gateway to the Thar Desert and offers an authentic desert experience away from tourist crowds. Its vibrant handicrafts and folk music traditions are renowned across Rajasthan.",
    bestTime: "October to March",
    temperature: "5°C (winter) to 48°C (summer)",
    language: "Hindi, Rajasthani, Marwari",
    region: "West",
    type: ["heritage", "nature"],
    attractions: [
      { name: "Barmer Fort & Garh Temple", description: "A historic fort and temple complex offering panoramic views of the desert landscape and the town.", timings: "9:00 AM - 5:00 PM", entryFee: "Free" },
      { name: "Kiradu Temples", description: "A group of ancient temples from the 11th century, known for their intricate Solanki-style architecture — called the Khajuraho of Rajasthan.", timings: "9:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Juna Fort & Temple", description: "Ancient ruins with Jain and Hindu temples, offering a glimpse into the region's rich past.", timings: "Open all day", entryFee: "Free" },
      { name: "Desert Safari Point", description: "A starting point for desert safaris into the Thar, offering camel rides and overnight camping experiences.", timings: "Best at sunrise/sunset", entryFee: "Varies by operator" },
      { name: "Barmer Handicraft Market", description: "A vibrant market showcasing Barmer's famous embroidery, wood carving, and traditional Rajasthani crafts.", timings: "9:00 AM - 8:00 PM", entryFee: "Free" }
    ],
    hotels: [
      { name: "Hotel Kailash International", category: "mid-range", priceRange: "₹2,500 - ₹5,000", rating: 4.0 },
      { name: "Hotel Mayur", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.8 },
      { name: "Hotel Barmer", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.6 },
      { name: "RTDC Hotel", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.4 },
      { name: "Desert Camps", category: "mid-range", priceRange: "₹3,000 - ₹8,000", rating: 4.2 }
    ],
    food: [
      { dish: "Ker Sangri", type: "side dish", where: "Local restaurants" },
      { dish: "Dal Baati Churma", type: "main course", where: "Highway dhabas" },
      { dish: "Bajre Ki Roti", type: "main course", where: "Village eateries" },
      { dish: "Gatte Ki Sabzi", type: "main course", where: "Local restaurants" },
      { dish: "Mirchi Bada", type: "snack", where: "Street stalls" }
    ],
    festivals: [
      { name: "Barmer Thar Festival", month: "March", description: "A cultural festival showcasing the folk music, dance, and crafts of the Thar Desert region." },
      { name: "Tilwara Cattle Fair", month: "March-April", description: "A traditional cattle fair with trading, folk performances, and rural sports." }
    ],
    travelTips: {
      howToReach: { air: "Jodhpur Airport (200 km), Jaisalmer Airport (150 km)", train: "Barmer Railway Station, connected to Jodhpur and Jaipur", road: "NH 15 connects to Jaisalmer (150 km), Jodhpur (200 km)" },
      localTransport: ["Auto Rickshaw", "Jeep", "Camel (for desert)", "Walking"],
      tips: ["Carry plenty of water — Barmer is one of Rajasthan's hottest places", "Buy authentic Barmer embroidery directly from artisans", "Visit Kiradu Temples — they're a hidden gem", "Best combined with Jaisalmer or Jodhpur trip"]
    },
    mapUrl: "https://maps.google.com/?q=Barmer,Rajasthan"
  },
  {
    id: "pali",
    name: "Pali",
    nickname: "Industrial Heritage Town",
    district: "Pali",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Pali is an ancient town on the banks of the Bandi River, known for its textile industry and historical temples. Once a major trade center on the caravan routes, Pali has a rich cultural heritage with beautiful Jain temples and the famous Om Banna (Bullet Baba) Temple that attracts curious visitors.",
    bestTime: "October to March",
    temperature: "7°C (winter) to 44°C (summer)",
    language: "Hindi, Rajasthani, Marwari",
    region: "South",
    type: ["religious", "heritage"],
    attractions: [
      { name: "Om Banna (Bullet Baba) Temple", description: "A unique shrine dedicated to a motorcycle whose rider died in an accident — the bike mysteriously kept returning to the spot, attracting thousands of devotees.", timings: "Open all day", entryFee: "Free" },
      { name: "Ranakpur Jain Temple", description: "One of the five holiest Jain pilgrimage sites, featuring 1,444 exquisitely carved marble pillars — no two are alike.", timings: "11:00 AM - 5:00 PM (Jains), 12:00 PM - 5:00 PM (others)", entryFee: "₹200" },
      { name: "Somnath Temple", description: "An ancient Shiva temple with beautiful architecture and spiritual significance.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Lakhotia Garden", description: "A beautiful garden in the heart of the city, perfect for evening walks and relaxation.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Hatundi Rata Mahavev Temple", description: "A striking Jain temple with a unique architecture blending modern and traditional styles.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" }
    ],
    hotels: [
      { name: "Hotel Ranakpur", category: "mid-range", priceRange: "₹3,000 - ₹6,000", rating: 4.1 },
      { name: "Hotel Pali Inn", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.9 },
      { name: "Hotel Shyam", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.7 },
      { name: "RTDC Hotel", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.4 },
      { name: "Dharamshala", category: "budget", priceRange: "₹300 - ₹800", rating: 3.2 }
    ],
    food: [
      { dish: "Pali Sweets", type: "dessert", where: "Local sweet shops" },
      { dish: "Dal Baati Churma", type: "main course", where: "Highway dhabas" },
      { dish: "Pyaaz Kachori", type: "snack", where: "Street stalls" },
      { dish: "Mirchi Bada", type: "snack", where: "Market area" },
      { dish: "Gatte Ki Sabzi", type: "main course", where: "Local restaurants" }
    ],
    festivals: [
      { name: "Ranakpur Festival", month: "December", description: "A cultural festival near the famous Jain temples featuring folk music, dance, and crafts." },
      { name: "Parshuram Jayanti", month: "April-May", description: "Celebrated with processions and fairs at the Somnath Temple." }
    ],
    travelTips: {
      howToReach: { air: "Jodhpur Airport (70 km)", train: "Pali Junction, on Jodhpur-Ahmedabad line", road: "NH 65 connects to Jodhpur (70 km), Udaipur (200 km)" },
      localTransport: ["Auto Rickshaw", "Cab", "City Bus", "Walking"],
      tips: ["Visit the Bullet Baba Temple — it's a one-of-a-kind experience", "Ranakpur is 90 km away — plan a day trip", "Pali is a convenient stop between Jodhpur and Udaipur", "Buy Pali's famous textiles as souvenirs"]
    },
    mapUrl: "https://maps.google.com/?q=Pali,Rajasthan"
  },
  {
    id: "tonk",
    name: "Tonk",
    nickname: "Lucknow of Rajasthan",
    district: "Tonk",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Tonk, called the Lucknow of Rajasthan, is known for its unique blend of Rajput and Muslim cultures. Founded in the 17th century by Nawab Amir Khan, it features beautiful mosques, havelis, and a rich literary tradition. The city's Urdu heritage and architectural elegance set it apart from other Rajasthani towns.",
    bestTime: "October to March",
    temperature: "7°C (winter) to 43°C (summer)",
    language: "Hindi, Rajasthani, Urdu",
    region: "North",
    type: ["heritage"],
    attractions: [
      { name: "Sunehri Kothi (Golden Mansion)", description: "A stunning mansion with gold-painted walls and intricate mirror work, showcasing the opulence of the Nawabi era.", timings: "10:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Jama Masjid", description: "A beautiful mosque built in the Mughal architectural style, one of the finest in Rajasthan.", timings: "5:00 AM - 9:00 PM", entryFee: "Free" },
      { name: "Hathi Bhata", description: "A massive stone elephant carving, an ancient monument that stands as a testament to the region's artistic heritage.", timings: "Open all day", entryFee: "Free" },
      { name: "Rasiya Ki Tekri", description: "A historic site with beautiful gardens and a memorial, offering panoramic views of the town.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Shri Devnarayan Temple", description: "An important temple dedicated to the folk deity Devnarayan, attracting devotees from the Gujjar community.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" }
    ],
    hotels: [
      { name: "Hotel Tonk Palace", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.9 },
      { name: "Hotel Rajputana", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.7 },
      { name: "RTDC Hotel", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.4 },
      { name: "Guest House", category: "budget", priceRange: "₹400 - ₹1,000", rating: 3.2 },
      { name: "Dharamshala", category: "budget", priceRange: "₹200 - ₹600", rating: 3.0 }
    ],
    food: [
      { dish: "Tonk Ki Mawa", type: "dessert", where: "Local sweet shops" },
      { dish: "Mutton Biryani", type: "main course", where: "Muslim quarter restaurants" },
      { dish: "Nihari", type: "main course", where: "Old city area" },
      { dish: "Sheermal", type: "bread", where: "Bakeries in old city" },
      { dish: "Dal Baati Churma", type: "main course", where: "Highway dhabas" }
    ],
    festivals: [
      { name: "Urs of Nawab Amir Khan", month: "Varies", description: "Annual commemoration of the founder of Tonk with prayers and cultural events." },
      { name: "Devnarayan Mela", month: "January-February", description: "A major fair at the Devnarayan Temple attracting thousands of devotees." }
    ],
    travelTips: {
      howToReach: { air: "Jaipur Airport (100 km)", train: "Tonk has no railway — nearest is Bansthali Niwas (30 km)", road: "NH 12 connects to Jaipur (100 km), Ajmer (80 km)" },
      localTransport: ["Auto Rickshaw", "Cycle Rickshaw", "Walking (old city)", "Bus"],
      tips: ["Visit Sunehri Kothi — it's the highlight of Tonk", "Explore the old city for Mughal-era architecture", "Tonk is a great day trip from Jaipur", "Try the Mughlai food — it's unique in Rajasthan"]
    },
    mapUrl: "https://maps.google.com/?q=Tonk,Rajasthan"
  },
  {
    id: "jhalawar",
    name: "Jhalawar",
    nickname: "City of Bells",
    district: "Jhalawar",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Jhalawar, founded in 1838 by Jhala Zalim Singh, is known for its rich cultural heritage, ancient Buddhist caves, and the only rock-cut monastery in Rajasthan. The city has a unique green landscape compared to the rest of Rajasthan, with many water bodies and a relatively wetter climate.",
    bestTime: "October to March",
    temperature: "8°C (winter) to 42°C (summer)",
    language: "Hindi, Rajasthani, Harauti",
    region: "South",
    type: ["heritage", "nature"],
    attractions: [
      { name: "Gagron Fort", description: "A UNESCO World Heritage Site — a unique fort surrounded by water on three sides and a forest on the fourth, built in the 12th century.", timings: "9:00 AM - 5:00 PM", entryFee: "₹25 (Indian), ₹200 (Foreign)" },
      { name: "Bhimbetka-style Rock Paintings", description: "Ancient rock paintings in the area dating back thousands of years, similar to the famous Bhimbetka caves.", timings: "Open all day", entryFee: "Free" },
      { name: "Chandrabhaga Cenotaphs", description: "Beautiful cenotaphs on the banks of the Chandrabhaga River, resembling miniature temples with intricate carvings.", timings: "Open all day", entryFee: "Free" },
      { name: "Jhalawar Government Museum", description: "One of the oldest museums in Rajasthan, housing a rich collection of sculptures, inscriptions, and artifacts.", timings: "10:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Kolvi Caves", description: "The only rock-cut Buddhist monastery in Rajasthan, featuring ancient stupas and Buddhist sculptures.", timings: "9:00 AM - 5:00 PM", entryFee: "₹20" }
    ],
    hotels: [
      { name: "Hotel Jhalawar Palace", category: "mid-range", priceRange: "₹2,500 - ₹5,000", rating: 4.0 },
      { name: "Hotel Surya", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.8 },
      { name: "Hotel Rajputana", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.7 },
      { name: "RTDC Hotel", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.4 },
      { name: "Dharamshala", category: "budget", priceRange: "₹300 - ₹800", rating: 3.2 }
    ],
    food: [
      { dish: "Jhalawar Sweets", type: "dessert", where: "Local sweet shops" },
      { dish: "Dal Baati Churma", type: "main course", where: "Local restaurants" },
      { dish: "Ker Sangri", type: "side dish", where: "Highway dhabas" },
      { dish: "Mirchi Bada", type: "snack", where: "Street stalls" },
      { dish: "Gatte Ki Sabzi", type: "main course", where: "Local restaurants" }
    ],
    festivals: [
      { name: "Chandrabhaga Fair", month: "October-November", description: "A holy fair on the banks of the Chandrabhaga River, attracting pilgrims for a ritual bath and cultural events." },
      { name: "Gagron Festival", month: "February", description: "A heritage festival celebrating the UNESCO fort with cultural programs and light shows." }
    ],
    travelTips: {
      howToReach: { air: "Jaipur Airport (330 km), Kota Airport (90 km)", train: "Jhalawar City Station, connected to Kota", road: "NH 12 connects to Kota (90 km), Jaipur (330 km)" },
      localTransport: ["Auto Rickshaw", "Cab", "City Bus", "Walking"],
      tips: ["Visit Gagron Fort — it's a UNESCO site and unique in India", "Jhalawar is greener than most of Rajasthan — enjoy the contrast", "Combine with Kota for a complete Hadoti circuit", "Visit the Kolvi Caves for a unique Buddhist heritage experience"]
    },
    mapUrl: "https://maps.google.com/?q=Jhalawar,Rajasthan"
  },
  {
    id: "dungarpur",
    name: "Dungarpur",
    nickname: "City of Hills",
    district: "Dungarpur",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Dungarpur, the City of Hills, is a picturesque town in southern Rajasthan known for its scenic beauty, unique architecture, and the famous green marble found in the region. Founded in 1358 by Rawal Veer Singh, it features beautiful lakes, palaces, and the distinctive style of Dungarpur miniature paintings.",
    bestTime: "October to March",
    temperature: "8°C (winter) to 42°C (summer)",
    language: "Hindi, Rajasthani, Vagdi",
    region: "South",
    type: ["heritage", "nature"],
    attractions: [
      { name: "Udai Bilas Palace", description: "A stunning lakeside palace blending Rajput and Gothic architecture, now a heritage hotel with beautiful gardens.", timings: "Open to hotel guests", entryFee: "N/A (heritage hotel)" },
      { name: "Juna Mahal", description: "A seven-story palace with exquisite murals and miniature paintings in the Dungarpur style, dating to the 13th century.", timings: "9:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Rajmata Devendra Kunwar Museum", description: "A museum within Juna Mahal showcasing Dungarpur's rich heritage, weapons, and miniature paintings.", timings: "10:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Beneshwar Fair Site", description: "The confluence of three rivers where the famous Beneshwar Fair is held — a sacred site for the Bhil tribe.", timings: "Open all day", entryFee: "Free" },
      { name: "Sagwara", description: "A nearby town known for its beautiful Jain temples and traditional Dungarpur-style architecture.", timings: "Open all day", entryFee: "Free" }
    ],
    hotels: [
      { name: "Udai Bilas Palace", category: "luxury", priceRange: "₹8,000 - ₹20,000", rating: 4.5 },
      { name: "Hotel Green Valley", category: "mid-range", priceRange: "₹2,500 - ₹5,000", rating: 4.0 },
      { name: "Hotel Vardhman", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.7 },
      { name: "RTDC Hotel", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.4 },
      { name: "Guest House", category: "budget", priceRange: "₹400 - ₹1,000", rating: 3.2 }
    ],
    food: [
      { dish: "Dungarpur Special Thali", type: "main course", where: "Local restaurants" },
      { dish: "Dal Baati Churma", type: "main course", where: "Highway dhabas" },
      { dish: "Bhutte Ki Khees", type: "snack", where: "Street stalls" },
      { dish: "Gatte Ki Sabzi", type: "main course", where: "Local restaurants" },
      { dish: "Malpua", type: "dessert", where: "Sweet shops" }
    ],
    festivals: [
      { name: "Beneshwar Fair", month: "February", description: "A major tribal fair at the confluence of three rivers, celebrating Bhil culture with rituals, dances, and trading." },
      { name: "Gangaur Festival", month: "March-April", description: "Celebrated with traditional fervor, especially by the Bhil women of the region." }
    ],
    travelTips: {
      howToReach: { air: "Udaipur Airport (120 km)", train: "Dungarpur Station, connected to Udaipur and Ahmedabad", road: "NH 8 connects to Udaipur (120 km), Ahmedabad (180 km)" },
      localTransport: ["Auto Rickshaw", "Cab", "Bus", "Walking"],
      tips: ["Dungarpur is off the tourist trail — enjoy the authentic experience", "Visit Juna Mahal for its unique murals", "The Beneshwar Fair offers a rare glimpse into tribal culture", "Combine with Udaipur trip"]
    },
    mapUrl: "https://maps.google.com/?q=Dungarpur,Rajasthan"
  },
  {
    id: "banswara",
    name: "Banswara",
    nickname: "City of Hundred Islands",
    district: "Banswara",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Banswara, known as the City of Hundred Islands, is a green oasis in southern Rajasthan. Named after the many islands in the Mahi River, it is home to a large Bhil tribal population and offers a unique blend of natural beauty and tribal culture. The region is rich in bamboo forests and water bodies.",
    bestTime: "October to March",
    temperature: "8°C (winter) to 42°C (summer)",
    language: "Hindi, Rajasthani, Vagdi, Bhili",
    region: "South",
    type: ["nature"],
    attractions: [
      { name: "Mahi Dam", description: "A beautiful dam on the Mahi River creating numerous islands, offering scenic views and boating opportunities.", timings: "8:00 AM - 6:00 PM", entryFee: "Free" },
      { name: "Anand Sagar Lake", description: "A serene artificial lake with beautiful ghats and temples, also known as Bai Talab.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Chachakota", description: "A beautiful spot on the Mahi River known for its natural beauty and picnic spots.", timings: "Open all day", entryFee: "Free" },
      { name: "Mangarh Dham", description: "A sacred hill where 500 Bhil tribals were martyred by the British in 1913 — a tribal freedom memorial.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Abdulla Pir Dargah", description: "A revered Sufi shrine attracting devotees from all communities, known for its annual Urs.", timings: "5:00 AM - 10:00 PM", entryFee: "Free" }
    ],
    hotels: [
      { name: "Hotel Harsh Paradise", category: "mid-range", priceRange: "₹2,500 - ₹5,000", rating: 4.0 },
      { name: "Hotel Rajputana", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.8 },
      { name: "Hotel Surjan", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.6 },
      { name: "RTDC Hotel", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.4 },
      { name: "Dharamshala", category: "budget", priceRange: "₹300 - ₹800", rating: 3.2 }
    ],
    food: [
      { dish: "Maize Roti", type: "main course", where: "Tribal households" },
      { dish: "Gud Ki Roti", type: "main course", where: "Local eateries" },
      { dish: "Dal Baati Churma", type: "main course", where: "Highway dhabas" },
      { dish: "Bhutte Ki Khees", type: "snack", where: "Street stalls" },
      { dish: "Lassi", type: "beverage", where: "Main market" }
    ],
    festivals: [
      { name: "Bhagoria Festival", month: "March", description: "A unique tribal festival where young Bhil men and women choose their partners — a colorful celebration of love." },
      { name: "Beneshwar Fair", month: "February", description: "A major tribal fair at the confluence of rivers, celebrating Bhil culture with rituals and dances." }
    ],
    travelTips: {
      howToReach: { air: "Udaipur Airport (160 km)", train: "No direct rail — nearest is Ratlam (80 km) in MP", road: "NH 113 connects to Udaipur (160 km), Ahmedabad (220 km)" },
      localTransport: ["Auto Rickshaw", "Bus", "Jeep", "Walking"],
      tips: ["Banswara is off the beaten path — perfect for authentic experiences", "Visit during Bhagoria Festival for a unique cultural experience", "The Mahi River islands are beautiful — take a boat ride", "Respect tribal customs and traditions while visiting"]
    },
    mapUrl: "https://maps.google.com/?q=Banswara,Rajasthan"
  },
  {
    id: "pratapgarh",
    name: "Pratapgarh",
    nickname: "Tribal Heritage Town",
    district: "Pratapgarh",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Pratapgarh is a small town in southern Rajasthan known for its rich tribal heritage and the unique Thewa art — a rare form of gold foil work on glass. Founded by Maharana Pratap's descendant, the town offers an authentic glimpse into rural Rajasthani and tribal life, far from tourist crowds.",
    bestTime: "October to March",
    temperature: "8°C (winter) to 42°C (summer)",
    language: "Hindi, Rajasthani, Vagdi",
    region: "South",
    type: ["heritage"],
    attractions: [
      { name: "Thewa Art Workshops", description: "Visit artisan workshops to see the creation of Thewa art — a 400-year-old craft of gold foil work on colored glass, unique to Pratapgarh.", timings: "9:00 AM - 6:00 PM", entryFee: "Free" },
      { name: "Devgarh Fort", description: "A historic fort with beautiful architecture and panoramic views of the surrounding countryside.", timings: "9:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Sita Mata Wildlife Sanctuary", description: "A dense forest sanctuary home to flying squirrels, leopards, and diverse birdlife — one of Rajasthan's greenest areas.", timings: "6:00 AM - 6:00 PM", entryFee: "₹50" },
      { name: "Jakham Dam", description: "A scenic dam surrounded by forests, perfect for picnics and birdwatching.", timings: "8:00 AM - 6:00 PM", entryFee: "Free" },
      { name: "Bhateshwar Temples", description: "Ancient temple complexes with intricate carvings, reflecting the region's spiritual heritage.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" }
    ],
    hotels: [
      { name: "Hotel Pratapgarh Palace", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.9 },
      { name: "Hotel Rajputana", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.6 },
      { name: "Guest House", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.4 },
      { name: "Dharamshala", category: "budget", priceRange: "₹300 - ₹800", rating: 3.2 },
      { name: "Forest Rest House", category: "budget", priceRange: "₹500 - ₹1,200", rating: 3.5 }
    ],
    food: [
      { dish: "Thewa Area Special Thali", type: "main course", where: "Local restaurants" },
      { dish: "Dal Baati Churma", type: "main course", where: "Highway dhabas" },
      { dish: "Bajre Ki Roti", type: "main course", where: "Village eateries" },
      { dish: "Ker Sangri", type: "side dish", where: "Local restaurants" },
      { dish: "Lassi", type: "beverage", where: "Main market" }
    ],
    festivals: [
      { name: "Gangaur Festival", month: "March-April", description: "Celebrated with traditional rituals and processions, especially significant in this tribal region." },
      { name: "Teej Festival", month: "July-August", description: "Monsoon festival celebrated with folk songs and dances by the local tribal communities." }
    ],
    travelTips: {
      howToReach: { air: "Udaipur Airport (180 km)", train: "No direct rail — nearest is Chittorgarh (90 km)", road: "Connected to Udaipur (180 km), Chittorgarh (90 km)" },
      localTransport: ["Auto Rickshaw", "Jeep", "Bus", "Walking"],
      tips: ["Buy Thewa art directly from artisans — it's unique to this region", "Visit Sita Mata Sanctuary for a green Rajasthan experience", "Pratapgarh is very rural — manage expectations accordingly", "Best combined with Udaipur or Chittorgarh trip"]
    },
    mapUrl: "https://maps.google.com/?q=Pratapgarh,Rajasthan"
  },
  {
    id: "rajsamand",
    name: "Rajsamand",
    nickname: "Lake City",
    district: "Rajsamand",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Rajsamand is known for the magnificent Rajsamand Lake, one of the largest artificial lakes in India, built in the 17th century. The town is also the gateway to Kumbhalgarh Fort and is closely associated with the legacy of Maharana Pratap. Its marble industry and the famous Haldighati battlefield are key attractions.",
    bestTime: "October to March",
    temperature: "7°C (winter) to 40°C (summer)",
    language: "Hindi, Rajasthani, Mewari",
    region: "South",
    type: ["heritage", "nature"],
    attractions: [
      { name: "Rajsamand Lake", description: "One of India's largest artificial lakes, built in 1660 by Rana Raj Singh, with beautiful marble ghats and pavilions.", timings: "Open all day", entryFee: "Free" },
      { name: "Haldighati", description: "The historic battlefield where Maharana Pratap fought Akbar's army in 1576 — now a museum and memorial.", timings: "9:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Kumbhalgarh Fort", description: "A UNESCO World Heritage Site with the second-longest wall in the world after the Great Wall of China, birthplace of Maharana Pratap.", timings: "9:00 AM - 5:00 PM", entryFee: "₹40 (Indian), ₹200 (Foreign)" },
      { name: "Shrinathji Temple (Nathdwara)", description: "One of the most important Vaishnavite shrines, dedicated to Lord Krishna as Shrinathji, attracting millions of pilgrims.", timings: "5:30 AM - 12:30 PM, 4:00 PM - 8:30 PM", entryFee: "Free" },
      { name: "Kankroli Temple", description: "A beautiful temple dedicated to Lord Vishnu, located on the banks of Rajsamand Lake.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" }
    ],
    hotels: [
      { name: "Kumbhalgarh Fort Hotel", category: "luxury", priceRange: "₹10,000 - ₹25,000", rating: 4.5 },
      { name: "Shri Vilas Hotel (Nathdwara)", category: "mid-range", priceRange: "₹3,000 - ₹6,000", rating: 4.1 },
      { name: "Hotel Rajsamand", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.8 },
      { name: "RTDC Hotel", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.4 },
      { name: "Dharamshala (Nathdwara)", category: "budget", priceRange: "₹300 - ₹1,000", rating: 3.5 }
    ],
    food: [
      { dish: "Nathdwara Pedha", type: "dessert", where: "Nathdwara temple area" },
      { dish: "Rajasthani Thali", type: "main course", where: "Nathdwara restaurants" },
      { dish: "Dal Baati Churma", type: "main course", where: "Highway dhabas" },
      { dish: "Gatte Ki Sabzi", type: "main course", where: "Local restaurants" },
      { dish: "Makhania Lassi", type: "beverage", where: "Nathdwara" }
    ],
    festivals: [
      { name: "Nathdwara Festival", month: "Various (Janmashtami, Holi)", description: "Grand celebrations at the Shrinathji Temple with special darshans, processions, and devotional music." },
      { name: "Haldighati Festival", month: "June", description: "Commemorating the Battle of Haldighati with cultural programs and a light-and-sound show." }
    ],
    travelTips: {
      howToReach: { air: "Udaipur Airport (65 km)", train: "Kankroli Station, connected to Udaipur", road: "NH 8 connects to Udaipur (65 km), Jaipur (350 km)" },
      localTransport: ["Auto Rickshaw", "Cab", "Bus", "Jeep (for Kumbhalgarh)"],
      tips: ["Visit Kumbhalgarh — the wall is incredible", "Nathdwara temple has specific darshan timings — plan accordingly", "Buy marble souvenirs from Rajsamand", "Haldighati museum is a must for history lovers"]
    },
    mapUrl: "https://maps.google.com/?q=Rajsamand,Rajasthan"
  },
  {
    id: "sirohi",
    name: "Sirohi",
    nickname: "Dev Nagari",
    district: "Sirohi",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Sirohi, known as Dev Nagari (City of Gods), is a historic town at the base of Mount Abu. Founded in the 15th century by Rao Sobhaji, it is known for its ancient temples, the Sirohi painting style, and as the gateway to Rajasthan's only hill station. The town has a rich Jain and Hindu heritage.",
    bestTime: "October to March",
    temperature: "8°C (winter) to 40°C (summer)",
    language: "Hindi, Rajasthani, Abu",
    region: "South",
    type: ["religious", "heritage"],
    attractions: [
      { name: "Sirohi Fort", description: "A historic fort with panoramic views, reflecting the military heritage of the Deora Chauhan dynasty.", timings: "9:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Jirawala Jain Temple", description: "An ancient Jain temple complex dating to the 10th century, known for its beautiful architecture and spiritual significance.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Chandravati", description: "An ancient town with ruins of temples and the historic capital of the Paramara dynasty.", timings: "Open all day", entryFee: "Free" },
      { name: "Koteshwar Mahadev Temple", description: "A sacred Shiva temple in a scenic setting, attracting devotees especially during Shivratri.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Mount Abu (via Sirohi)", description: "The gateway to Rajasthan's only hill station, just 25 km from Sirohi.", timings: "Open all day", entryFee: "N/A" }
    ],
    hotels: [
      { name: "Hotel Sirohi Palace", category: "mid-range", priceRange: "₹2,500 - ₹5,000", rating: 4.0 },
      { name: "Hotel Mount View", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.8 },
      { name: "Hotel Rajputana", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.6 },
      { name: "RTDC Hotel", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.4 },
      { name: "Dharamshala", category: "budget", priceRange: "₹300 - ₹800", rating: 3.2 }
    ],
    food: [
      { dish: "Sirohi Special Thali", type: "main course", where: "Local restaurants" },
      { dish: "Dal Baati Churma", type: "main course", where: "Highway dhabas" },
      { dish: "Gatte Ki Sabzi", type: "main course", where: "Local restaurants" },
      { dish: "Mirchi Bada", type: "snack", where: "Street stalls" },
      { dish: "Lassi", type: "beverage", where: "Main market" }
    ],
    festivals: [
      { name: "Shivratri Fair", month: "February-March", description: "A major fair at the Koteshwar Mahadev Temple with religious ceremonies and cultural events." },
      { name: "Mount Abu Summer Festival", month: "May", description: "Celebrated at nearby Mount Abu with folk performances and cultural programs." }
    ],
    travelTips: {
      howToReach: { air: "Udaipur Airport (140 km)", train: "Abu Road Station (25 km), on Delhi-Mumbai line", road: "NH 14 connects to Udaipur (140 km), Ahmedabad (200 km)" },
      localTransport: ["Auto Rickshaw", "Bus", "Jeep", "Walking"],
      tips: ["Sirohi is the base for visiting Mount Abu", "Visit Jirawala Temple for its ancient Jain heritage", "Buy Sirohi-style miniature paintings as souvenirs", "The drive to Mount Abu from Sirohi is scenic"]
    },
    mapUrl: "https://maps.google.com/?q=Sirohi,Rajasthan"
  },
  {
    id: "jalor",
    name: "Jalor",
    nickname: "Granite City",
    district: "Jalor",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Jalor is a historic town known for its granite and marble industry and the imposing Jalor Fort. Once called the 'Golden Mount' due to its mineral wealth, the town has a rich history of Rajput valor. The fort, perched on a steep hill, was considered impregnable and witnessed many battles.",
    bestTime: "October to March",
    temperature: "7°C (winter) to 43°C (summer)",
    language: "Hindi, Rajasthani, Marwari",
    region: "West",
    type: ["heritage"],
    attractions: [
      { name: "Jalor Fort", description: "A massive hilltop fort with steep cliffs on all sides, built by the Parmar dynasty and expanded by the Rajputs. Known for its Islamic and Hindu architecture.", timings: "9:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Sundha Mata Temple", description: "A hilltop temple dedicated to Goddess Chamunda, offering panoramic views and a rope-way for easy access.", timings: "6:00 AM - 8:00 PM", entryFee: "Free (ropeway ₹200)" },
      { name: "Jain Temples of Jalor", description: "Ancient Jain temples within the fort complex, known for their beautiful carvings and spiritual significance.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Top Khana", description: "An ancient armory within the fort, showcasing weapons and military artifacts from various periods.", timings: "9:00 AM - 5:00 PM", entryFee: "₹10" },
      { name: "Bhimlat Waterfall", description: "A beautiful waterfall in the surrounding hills, a popular picnic spot during monsoon.", timings: "Open all day (best in monsoon)", entryFee: "Free" }
    ],
    hotels: [
      { name: "Hotel Jalor Fort View", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.9 },
      { name: "Hotel Rajputana", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.6 },
      { name: "RTDC Hotel", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.4 },
      { name: "Guest House", category: "budget", priceRange: "₹400 - ₹1,000", rating: 3.2 },
      { name: "Dharamshala", category: "budget", priceRange: "₹300 - ₹800", rating: 3.0 }
    ],
    food: [
      { dish: "Jalor Special Thali", type: "main course", where: "Local restaurants" },
      { dish: "Dal Baati Churma", type: "main course", where: "Highway dhabas" },
      { dish: "Ker Sangri", type: "side dish", where: "Local restaurants" },
      { dish: "Mirchi Bada", type: "snack", where: "Street stalls" },
      { dish: "Gatte Ki Sabzi", type: "main course", where: "Local restaurants" }
    ],
    festivals: [
      { name: "Sundha Mata Fair", month: "March-April & September-October", description: "A major fair at the hilltop temple attracting thousands of devotees during Navratri." },
      { name: "Jalor Utsav", month: "January", description: "A cultural festival celebrating the heritage of Jalor with folk performances and crafts." }
    ],
    travelTips: {
      howToReach: { air: "Jodhpur Airport (140 km)", train: "Jalor Railway Station, connected to Jodhpur", road: "NH 15 connects to Jodhpur (140 km), Ahmedabad (260 km)" },
      localTransport: ["Auto Rickshaw", "Jeep", "Bus", "Walking"],
      tips: ["The fort requires a steep climb — wear comfortable shoes", "Visit Sundha Mata for the views and ropeway experience", "Jalor is between Jodhpur and Ahmedabad — good stopover", "Buy granite and marble products as souvenirs"]
    },
    mapUrl: "https://maps.google.com/?q=Jalor,Rajasthan"
  },
  {
    id: "hanumangarh",
    name: "Hanumangarh",
    nickname: "Archaeological Treasure",
    district: "Hanumangarh",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Hanumangarh, situated on the banks of the Ghaggar River, is an archaeological treasure with evidence of the Indus Valley Civilization. The Bhatner Fort, one of India's oldest forts, has withstood numerous invasions. The town is a significant agricultural center and has a rich historical heritage spanning thousands of years.",
    bestTime: "October to March",
    temperature: "4°C (winter) to 46°C (summer)",
    language: "Hindi, Rajasthani, Bagri",
    region: "North",
    type: ["heritage"],
    attractions: [
      { name: "Bhatner Fort", description: "One of India's oldest forts, built in 295 AD by Bhupat, the Bhati Rajput king. It withstood attacks by Mahmud Ghaznavi and Timur.", timings: "9:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Kalibangan Archaeological Site", description: "An Indus Valley Civilization site with evidence of the world's earliest ploughed field and fire altars — a must-visit for history enthusiasts.", timings: "9:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Shri Gogamedi Temple", description: "A famous temple dedicated to Gogaji, a folk deity revered by both Hindus and Muslims.", timings: "5:00 AM - 10:00 PM", entryFee: "Free" },
      { name: "Sili Siledani Temple", description: "An ancient temple with beautiful architecture and spiritual significance.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Pallu Mosque", description: "A historic mosque reflecting the region's Islamic heritage and architectural traditions.", timings: "5:00 AM - 9:00 PM", entryFee: "Free" }
    ],
    hotels: [
      { name: "Hotel Hanumant", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.8 },
      { name: "Hotel Rajputana", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.6 },
      { name: "RTDC Hotel", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.4 },
      { name: "Guest House", category: "budget", priceRange: "₹400 - ₹1,000", rating: 3.2 },
      { name: "Dharamshala", category: "budget", priceRange: "₹300 - ₹800", rating: 3.0 }
    ],
    food: [
      { dish: "Hanumangarh Sweets", type: "dessert", where: "Local sweet shops" },
      { dish: "Dal Baati Churma", type: "main course", where: "Highway dhabas" },
      { dish: "Bajre Ki Roti", type: "main course", where: "Village eateries" },
      { dish: "Pyaaz Kachori", type: "snack", where: "Street stalls" },
      { dish: "Lassi", type: "beverage", where: "Main market" }
    ],
    festivals: [
      { name: "Gogamedi Fair", month: "August-September", description: "A major fair at the Gogamedi Temple attracting devotees from across Rajasthan and Haryana." },
      { name: "Bhatner Fort Festival", month: "January", description: "Celebrating the heritage of the ancient fort with cultural programs and historical exhibitions." }
    ],
    travelTips: {
      howToReach: { air: "Bathinda Airport (85 km), Sri Ganganagar Airport (70 km)", train: "Hanumangarh Junction, connected to Delhi, Jaipur, Bikaner", road: "NH 62 connects to Bikaner (230 km), Sri Ganganagar (70 km)" },
      localTransport: ["Auto Rickshaw", "Bus", "Cab", "Walking"],
      tips: ["Visit Kalibangan for its archaeological significance", "Bhatner Fort is one of the oldest in India — a must for history buffs", "Hanumangarh is very hot in summer — plan accordingly", "Combine with Bikaner or Sri Ganganagar trip"]
    },
    mapUrl: "https://maps.google.com/?q=Hanumangarh,Rajasthan"
  },
  {
    id: "ganganagar",
    name: "Sri Ganganagar",
    nickname: "Food Basket of Rajasthan",
    district: "Sri Ganganagar",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Sri Ganganagar, Rajasthan's northernmost city, is known as the Food Basket of Rajasthan for its lush green fields fed by the Gang Canal. Planned by Maharaja Ganga Singh in the early 20th century, it resembles a Punjabi town more than a Rajasthani one, with its canal-irrigated agriculture and vibrant culture.",
    bestTime: "October to March",
    temperature: "2°C (winter) to 47°C (summer)",
    language: "Hindi, Rajasthani, Punjabi, Bagri",
    region: "North",
    type: ["nature"],
    attractions: [
      { name: "Gang Canal", description: "The lifeline of the region, this canal transformed the desert into green fields — a marvel of engineering by Maharaja Ganga Singh.", timings: "Open all day", entryFee: "Free" },
      { name: "Gauri Shankar Temple", description: "A beautiful temple known for its architecture and spiritual significance in the region.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Hindumalkot Border", description: "The India-Pakistan border near Ganganagar, offering a unique experience of the border area.", timings: "Daytime visits only", entryFee: "Free (permit required)" },
      { name: "Laila Majnu Ki Mazar", description: "A unique shrine dedicated to the legendary lovers Laila and Majnu, attracting devotees seeking love and harmony.", timings: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Anupgarh Fort", description: "A historic fort in the nearby town of Anupgarh, reflecting the region's military heritage.", timings: "9:00 AM - 5:00 PM", entryFee: "₹20" }
    ],
    hotels: [
      { name: "Hotel Ganganagar Palace", category: "mid-range", priceRange: "₹2,500 - ₹5,000", rating: 4.0 },
      { name: "Hotel Midtown", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.8 },
      { name: "Hotel Rajputana", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.6 },
      { name: "RTDC Hotel", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.4 },
      { name: "Dharamshala", category: "budget", priceRange: "₹300 - ₹800", rating: 3.2 }
    ],
    food: [
      { dish: "Punjabi Thali", type: "main course", where: "City restaurants" },
      { dish: "Makki Ki Roti & Sarson Ka Saag", type: "main course", where: "Winter dhabas" },
      { dish: "Lassi", type: "beverage", where: "Main market" },
      { dish: "Chole Bhature", type: "snack", where: "Street stalls" },
      { dish: "Gajak", type: "dessert", where: "Winter sweet shops" }
    ],
    festivals: [
      { name: "Gangaur Festival", month: "March-April", description: "Celebrated with traditional fervor, reflecting the region's Rajasthani roots despite its Punjabi influence." },
      { name: "Baisakhi", month: "April", description: "Celebrated with great enthusiasm due to the region's agricultural significance and Punjabi cultural influence." }
    ],
    travelTips: {
      howToReach: { air: "Sri Ganganagar Airport (limited flights)", train: "Sri Ganganagar Station, connected to Delhi, Jaipur, Bikaner", road: "NH 62 connects to Bikaner (240 km), Delhi (420 km)" },
      localTransport: ["Auto Rickshaw", "Cab", "City Bus", "Cycle Rickshaw"],
      tips: ["Ganganagar is very cold in winter — carry warm clothes", "The green fields are a unique sight in Rajasthan", "Try the Punjabi food — it's the best in Rajasthan", "Visit the canal area for a peaceful evening walk"]
    },
    mapUrl: "https://maps.google.com/?q=Sri+Ganganagar,Rajasthan"
  },
  {
    id: "churu",
    name: "Churu",
    nickname: "Gateway to Thar",
    district: "Churu",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Churu, the Gateway to the Thar Desert, is known for its grand havelis with stunning frescoes and the unique Kanhaiyalal Bagla Haveli. Founded in 1620 by the Jat chieftain Churu, it is a Shekhawati town with a rich artistic heritage. The town also holds the record for Rajasthan's highest temperature.",
    bestTime: "October to March",
    temperature: "3°C (winter) to 50°C (summer)",
    language: "Hindi, Rajasthani, Shekhawati",
    region: "North",
    type: ["heritage"],
    attractions: [
      { name: "Kanhaiyalal Bagla Haveli", description: "One of the finest havelis in Shekhawati, featuring exquisite frescoes depicting mythological and modern themes.", timings: "9:00 AM - 6:00 PM", entryFee: "₹50" },
      { name: "Sethani Ka Johara", description: "A beautiful stepwell built by a wealthy merchant's wife, known for its architectural elegance.", timings: "Open all day", entryFee: "Free" },
      { name: "Malji Ka Kamra", description: "A stunning heritage building with intricate carvings, now being restored as a heritage hotel.", timings: "9:00 AM - 5:00 PM", entryFee: "₹30" },
      { name: "Churu Fort", description: "A historic fort in the heart of the city, reflecting the military heritage of the region.", timings: "9:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Ratangarh Fort", description: "A nearby fort town with impressive architecture and a unique octagonal fort design.", timings: "9:00 AM - 5:00 PM", entryFee: "₹20" }
    ],
    hotels: [
      { name: "Malji Ka Kamra Heritage Hotel", category: "mid-range", priceRange: "₹3,000 - ₹6,000", rating: 4.2 },
      { name: "Hotel Churu Palace", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.9 },
      { name: "Hotel Rajputana", category: "budget", priceRange: "₹800 - ₹2,000", rating: 3.6 },
      { name: "RTDC Hotel", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.4 },
      { name: "Dharamshala", category: "budget", priceRange: "₹300 - ₹800", rating: 3.2 }
    ],
    food: [
      { dish: "Churu Sweets", type: "dessert", where: "Local sweet shops" },
      { dish: "Dal Baati Churma", type: "main course", where: "Highway dhabas" },
      { dish: "Pyaaz Kachori", type: "snack", where: "Street stalls" },
      { dish: "Mirchi Bada", type: "snack", where: "Market area" },
      { dish: "Ghevar", type: "dessert", where: "Sweet shops" }
    ],
    festivals: [
      { name: "Shekhawati Festival", month: "February", description: "Celebrating the art and culture of the Shekhawati region with fresco tours and folk performances." },
      { name: "Gangaur Festival", month: "March-April", description: "Celebrated with traditional rituals and processions through the painted streets." }
    ],
    travelTips: {
      howToReach: { air: "Jaipur Airport (200 km), Bikaner Airport (180 km)", train: "Churu Junction, connected to Delhi, Jaipur, Bikaner", road: "NH 65 connects to Jaipur (200 km), Bikaner (180 km)" },
      localTransport: ["Auto Rickshaw", "Cycle Rickshaw", "Walking (for havelis)", "Bus"],
      tips: ["Churu is extremely hot — avoid summer visits", "Walk through the old city for the best haveli experience", "Hire a guide for the fresco trail", "Combine with other Shekhawati towns like Sikar and Nawalgarh"]
    },
    mapUrl: "https://maps.google.com/?q=Churu,Rajasthan"
  },
  {
    id: "jhunjhunu",
    name: "Jhunjhunu",
    nickname: "Fresco Capital",
    district: "Jhunjhunu",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Jhunjhunu is the largest town in the Shekhawati region and the fresco capital of Rajasthan. Founded in the 15th century by the Kayamkhani Nawabs, it later became a Rajput stronghold. The town is famous for its painted havelis, the grand Rani Sati Temple, and as the birthplace of India's industrialist Rahul Bajaj.",
    bestTime: "October to March",
    temperature: "5°C (winter) to 45°C (summer)",
    language: "Hindi, Rajasthani, Shekhawati",
    region: "North",
    type: ["heritage", "religious"],
    attractions: [
      { name: "Rani Sati Temple", description: "One of the most famous temples in Rajasthan, dedicated to Rani Sati — a unique temple with no idol, only a trident. Known for its grand architecture.", timings: "5:00 AM - 9:00 PM", entryFee: "Free" },
      { name: "Khetri Mahal", description: "A stunning palace known as the 'Wind Palace' of Shekhawati, featuring beautiful architecture and wind-catchers.", timings: "9:00 AM - 5:00 PM", entryFee: "₹30" },
      { name: "Mandawa Havelis", description: "Nearby Mandawa is the heart of Shekhawati's fresco trail, with dozens of painted havelis and a fort.", timings: "9:00 AM - 6:00 PM", entryFee: "Varies (₹50-₹200)" },
      { name: "Modi & Tibrewala Haveli", description: "Two of the finest painted havelis in Jhunjhunu, with frescoes depicting mythological and colonial themes.", timings: "9:00 AM - 5:00 PM", entryFee: "₹50" },
      { name: "Mertani Baori", description: "A beautiful stepwell with intricate carvings, reflecting the water management skills of the region.", timings: "Open all day", entryFee: "Free" }
    ],
    hotels: [
      { name: "Mandawa Castle", category: "luxury", priceRange: "₹8,000 - ₹20,000", rating: 4.5 },
      { name: "Hotel Mandawa Haveli", category: "mid-range", priceRange: "₹3,000 - ₹6,000", rating: 4.2 },
      { name: "Hotel Jhunjhunu Palace", category: "mid-range", priceRange: "₹2,000 - ₹4,000", rating: 3.9 },
      { name: "RTDC Hotel", category: "budget", priceRange: "₹500 - ₹1,500", rating: 3.4 },
      { name: "Dharamshala", category: "budget", priceRange: "₹300 - ₹800", rating: 3.2 }
    ],
    food: [
      { dish: "Jhunjhunu Sweets", type: "dessert", where: "Local sweet shops" },
      { dish: "Dal Baati Churma", type: "main course", where: "Highway dhabas" },
      { dish: "Pyaaz Kachori", type: "snack", where: "Street stalls" },
      { dish: "Ghevar", type: "dessert", where: "Sweet shops" },
      { dish: "Mirchi Bada", type: "snack", where: "Market area" }
    ],
    festivals: [
      { name: "Rani Sati Mela", month: "August-September & March", description: "Twice-yearly fair at the Rani Sati Temple attracting lakhs of devotees for prayers and celebrations." },
      { name: "Shekhawati Festival", month: "February", description: "A regional festival celebrating the art, culture, and heritage of the Shekhawati region." }
    ],
    travelTips: {
      howToReach: { air: "Jaipur Airport (180 km), Delhi Airport (250 km)", train: "Jhunjhunu Railway Station, connected to Jaipur and Delhi", road: "NH 11 connects to Jaipur (180 km), Delhi (250 km)" },
      localTransport: ["Auto Rickshaw", "Cycle Rickshaw", "Walking (for havelis)", "Bus"],
      tips: ["Visit Mandawa for the best fresco experience", "Rani Sati Temple is unique — no idol worship", "Hire a guide for the haveli trail", "Best visited as part of a Shekhawati circuit with Sikar and Churu"]
    },
    mapUrl: "https://maps.google.com/?q=Jhunjhunu,Rajasthan"
  }
];
