import { type } from "os";

export interface Landmark {
  id: string;
  name: string;
  image: string;
  description: string;
  facts: string[];
  category: 'heritage' | 'nature' | 'adventure' | 'culture' | 'luxury';
}

export interface LuxuryPackage {
  id: string;
  name: string;
  duration: string;
  price: string;
  includes: string[];
  highlight: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation: string;
}

export interface Destination {
  id: string;
  name: string;
  flag: string;
  heroImage: string;
  tagline: string;
  overview: string;
  hint: string;
  bestTimeToVisit: {
    months: string;
    reason: string;
    weatherHighlights: string[];
  };
  landmarks: Landmark[];
  luxuryPackages: LuxuryPackage[];
  itinerary: ItineraryDay[];
  mapEmbedUrl: string;
}

export const destinations: Destination[] = [
  {
    id: "south-africa",
    name: "South Africa",
    flag: "🇿🇦",
    heroImage: "/sa-hero.jpg",
    tagline: "Where the Big Five roam the world's most celebrated wilderness.",
    overview: "South Africa offers an unparalleled blend of raw African wilderness and cosmopolitan luxury. From the iconic silhouette of Table Mountain to the untamed expanses of the Kruger National Park, every moment is crafted to perfection. Experience world-class vintage wines, profound cultural heritage, and legendary wildlife encounters.",
    hint: "Tailored Luxury Experience",
    bestTimeToVisit: {
      months: "May to September",
      reason: "Dry winter months offer the best game viewing as animals congregate around water sources.",
      weatherHighlights: ["Pleasant days 20-25°C", "Cool nights 5-10°C", "Minimal rainfall", "Clear skies"]
    },
    landmarks: [
      {
        id: "union-buildings",
        name: "Union Buildings",
        image: "/sa-union.jpg",
        description: "The administrative headquarters of South Africa in Pretoria, an architectural masterpiece by Herbert Baker designed in 1913. It features terraced gardens and a monumental statue of Nelson Mandela.",
        facts: ["Designed by Herbert Baker in 1910", "Mandela's inauguration site in 1994", "Terraced gardens span 4.5 hectares"],
        category: "heritage"
      },
      {
        id: "table-mountain",
        name: "Table Mountain",
        image: "/sa-table.jpg",
        description: "Rising 1,086m above Cape Town, this flat-topped marvel is a New Seven Wonder of Nature. Often draped in its famous 'tablecloth' cloud, it watches over the meeting of two oceans.",
        facts: ["Over 2,200 plant species", "Cable car operating since 1929", "Over 600 million years old"],
        category: "nature"
      },
      {
        id: "kruger",
        name: "Kruger National Park",
        image: "/sa-kruger.jpg",
        description: "Spanning nearly 2 million hectares, this legendary reserve is home to the Big Five and boasts over 300 archaeological sites, offering a raw and majestic wildlife experience.",
        facts: ["147 mammal species", "Established in 1898", "Roughly the size of Wales"],
        category: "nature"
      },
      {
        id: "va-waterfront",
        name: "V&A Waterfront",
        image: "/sa-va.jpg",
        description: "Cape Town's historic working harbour offers luxury dining, boutique shopping, and Nobel Square, all set against the breathtaking backdrop of Table Mountain.",
        facts: ["Named after Queen Victoria and Prince Alfred in 1860", "Attracts 24 million visitors annually", "Premium dining and retail hub"],
        category: "luxury"
      },
      {
        id: "blyde-river",
        name: "Blyde River Canyon",
        image: "/sa-blyde.jpg",
        description: "A 26km long marvel winding through Mpumalanga, this is the world's third largest canyon. It features lush subtropical foliage and the iconic Three Rondavels.",
        facts: ["800m deep", "World's largest green canyon", "God's Window offers views spanning 100km"],
        category: "nature"
      },
      {
        id: "sun-city",
        name: "Sun City Resort",
        image: "/sa-suncity.jpg",
        description: "An oasis of luxury featuring the opulent Palace of the Lost City, a man-made jungle, a wave pool, and championship golf courses.",
        facts: ["The Lost City took 10,000 workers 3 years to build", "Host of the Nedbank Golf Challenge since 1981", "Ultimate entertainment destination"],
        category: "luxury"
      },
      {
        id: "soweto",
        name: "Soweto Heritage",
        image: "/sa-soweto.jpg",
        description: "Home to 1.3 million people, Soweto is the heart of South Africa's liberation story. Walk the vibrant streets that once housed two Nobel Peace Prize winners.",
        facts: ["Only street in the world to house two Nobel winners", "Site of the Hector Pieterson Memorial", "Features the Orlando Towers bungee jump"],
        category: "culture"
      },
      {
        id: "drakensberg",
        name: "Drakensberg Mountains",
        image: "/sa-drakensberg.jpg",
        description: "A breathtaking 1,000km mountain range and UNESCO World Heritage site, concealing ancient San Bushman rock paintings amidst dramatic peaks.",
        facts: ["The Amphitheatre is 5km wide and 1,200m high", "Tutela Peak is the highest in southern Africa at 3,450m", "Over 2,000 rock art sites dating back 3,000 years"],
        category: "adventure"
      },
      {
        id: "northcliff",
        name: "Northcliff Hill",
        image: "/sa-northcliff.jpg",
        description: "The highest point in Johannesburg, offering spectacular 360-degree panoramic views of the city skyline and the iconic red-and-white water tower.",
        facts: ["1,762m above sea level", "Views stretching 60km in every direction", "A favorite spot for sunset picnics"],
        category: "culture"
      }
    ],
    luxuryPackages: [
      {
        id: "kruger-elite",
        name: "Kruger Elite Safari",
        duration: "10 Days 9 Nights",
        price: "Pricing Available Upon Request",
        includes: ["Private game drives twice daily", "5-star lodge accommodation", "All meals and premium beverages", "Chartered bush flights", "Expert naturalist guide"],
        highlight: "Exclusive private vehicle access in premium traversing areas"
      },
      {
        id: "cape-grand",
        name: "Cape Grand Tour",
        duration: "7 Days 6 Nights",
        price: "Pricing Available Upon Request",
        includes: ["Table Mountain cable car", "Private wine estate tours", "V&A Waterfront dining", "Cape Peninsula drive", "Luxury boutique hotel"],
        highlight: "Curated wine experiences at award-winning Franschhoek estates"
      },
      {
        id: "ultimate-sa",
        name: "Ultimate South Africa",
        duration: "14 Days 13 Nights",
        price: "Pricing Available Upon Request",
        includes: ["Kruger Big Five safari", "Drakensberg hiking", "Cape Town luxury stay", "Soweto cultural immersion", "Private chartered transfers"],
        highlight: "The definitive South Africa experience crafted exclusively for you"
      }
    ],
    itinerary: [
      { day: 1, title: "Arrival Johannesburg", description: "Private transfer and welcome dinner.", accommodation: "The Saxon Hotel Johannesburg" },
      { day: 2, title: "Soweto and Pretoria Heritage", description: "Soweto morning, Union Buildings afternoon.", accommodation: "The Saxon Hotel Johannesburg" },
      { day: 3, title: "Fly to Kruger", description: "Chartered flight, afternoon game drives, sundowners.", accommodation: "Singita Boulders Lodge Sabi Sand" },
      { day: 4, title: "Kruger Safari", description: "Full day game drives, guided bush walk.", accommodation: "Singita Boulders Lodge Sabi Sand" },
      { day: 5, title: "Kruger Safari", description: "Dawn drive, spa afternoon.", accommodation: "Singita Boulders Lodge Sabi Sand" },
      { day: 6, title: "Kruger Safari", description: "Final morning drive, fly to Cape Town.", accommodation: "The Silo Hotel Cape Town" },
      { day: 7, title: "Cape Town", description: "Table Mountain, waterfront dining, wine tasting.", accommodation: "The Silo Hotel Cape Town" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14491523!2d22.9375!3d-29.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sSouth+Africa!5e0!3m2!1sen!2sus!4v1"
  },
  {
    id: "namibia",
    name: "Namibia",
    flag: "🇳🇦",
    heroImage: "/na-hero.jpg",
    tagline: "Ancient dunes, celestial skies and silence beyond measure.",
    overview: "Namibia is a land of striking contrasts and boundless horizons. From the towering red dunes of Sossusvlei to the rugged Skeleton Coast, this untamed wilderness offers an ethereal journey into nature's most dramatic landscapes.",
    hint: "Custom Safari Package",
    bestTimeToVisit: {
      months: "June to October",
      reason: "Dry winter with clear skies and game congregated at waterholes.",
      weatherHighlights: ["Warm days 20-25C", "Cold nights 5-12C", "Near-zero humidity", "World-class stargazing"]
    },
    landmarks: [
      {
        id: "sossusvlei",
        name: "Sossusvlei",
        image: "/na-sossusvlei.jpg",
        description: "A spectacular salt and clay pan surrounded by high red dunes in the southern part of the Namib Desert. The sunrise over these towering sand formations is an unforgettable spectacle.",
        facts: ["Dunes reach up to 300m high", "Some of the oldest dunes in the world", "Known for the surreal Deadvlei"],
        category: "nature"
      },
      {
        id: "etosha",
        name: "Etosha National Park",
        image: "/na-etosha.jpg",
        description: "A unique wildlife sanctuary centered around a vast salt pan. Etosha provides unparalleled game viewing as elephants, rhinos, and lions gather at the sparse waterholes.",
        facts: ["Covers over 22,000 square km", "Salt pan can be seen from space", "Home to 114 mammal species"],
        category: "nature"
      },
      {
        id: "fish-river",
        name: "Fish River Canyon",
        image: "/na-fish.jpg",
        description: "The largest canyon in Africa, featuring dramatic ravines and awe-inspiring viewpoints. A testament to the sheer power of ancient geological forces.",
        facts: ["160km long and up to 27km wide", "Depths reach 550m", "Formed over 500 million years ago"],
        category: "nature"
      },
      {
        id: "skeleton-coast",
        name: "Skeleton Coast",
        image: "/na-skeleton.jpg",
        description: "A mysterious and desolate stretch of coastline where the Namib Desert meets the Atlantic Ocean. Famous for its shipwrecks and haunting fog.",
        facts: ["Named for the whale and seal bones once found here", "Stretches for 500km", "Supports unique desert-adapted wildlife"],
        category: "adventure"
      },
      {
        id: "swakopmund",
        name: "Swakopmund",
        image: "/na-swakop.jpg",
        description: "A charming coastal town with distinct German colonial architecture. It serves as Namibia's premier holiday destination and an adventure sports hub.",
        facts: ["Founded in 1892", "Known as the adventure capital of Namibia", "Surrounded by desert and ocean"],
        category: "culture"
      }
    ],
    luxuryPackages: [
      {
        id: "desert-majesty",
        name: "Desert Majesty",
        duration: "8 Days 7 Nights",
        price: "Pricing Available Upon Request",
        includes: ["Private desert flights", "Luxury lodge stay", "Guided dune walks", "All meals"],
        highlight: "Exclusive stargazing experience in the Namib desert"
      },
      {
        id: "namibia-explorer",
        name: "Namibia Explorer",
        duration: "12 Days 11 Nights",
        price: "Pricing Available Upon Request",
        includes: ["Skeleton Coast flight", "Etosha private safari", "Premium accommodations", "Expert guides"],
        highlight: "Scenic flight over the dramatic Skeleton Coast shipwrecks"
      }
    ],
    itinerary: [
      { day: 1, title: "Arrival Windhoek", description: "Transfer to luxury boutique hotel.", accommodation: "The Weinberg Windhoek" },
      { day: 2, title: "Sossusvlei", description: "Fly to the Namib desert, afternoon nature drive.", accommodation: "Little Kulala" },
      { day: 3, title: "Dune Exploration", description: "Morning climb of Big Daddy, visit Deadvlei.", accommodation: "Little Kulala" },
      { day: 4, title: "Swakopmund", description: "Scenic flight to the coast, afternoon at leisure.", accommodation: "Strand Hotel" },
      { day: 5, title: "Departure", description: "Morning marine cruise, afternoon departure flight.", accommodation: "None" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7245450!2d18.49!3d-22.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b5e53e28dfac9%3A0x9a59adf4ced0963!2sNamibia!5e0!3m2!1sen!2sus!4v1"
  },
  {
    id: "botswana",
    name: "Botswana",
    flag: "🇧🇼",
    heroImage: "/bw-hero.jpg",
    tagline: "The Okavango Delta — Africa's last great Eden, untouched and infinite.",
    overview: "Botswana is the pinnacle of exclusive safari experiences. With its lush waterways, dense wildlife populations, and commitment to low-impact tourism, it offers an intimately wild encounter unlike any other.",
    hint: "Bespoke Wilderness Journey",
    bestTimeToVisit: {
      months: "July to October",
      reason: "Peak dry season when wildlife concentrates around the shrinking water channels of the Delta.",
      weatherHighlights: ["Mild days 25C", "Cool nights 10C", "No rain", "High wildlife visibility"]
    },
    landmarks: [
      {
        id: "okavango",
        name: "Okavango Delta",
        image: "/bw-okavango.jpg",
        description: "A vast inland river delta known for its sprawling grassy plains, which flood seasonally, becoming a lush animal habitat.",
        facts: ["UNESCO World Heritage site", "Covers up to 15,000 square km", "Explored via traditional mokoro canoes"],
        category: "nature"
      },
      {
        id: "chobe",
        name: "Chobe National Park",
        image: "/bw-chobe.jpg",
        description: "Renowned for its massive elephant population, Chobe offers incredible riverboat safaris along the Chobe River.",
        facts: ["Home to over 50,000 elephants", "First national park in Botswana", "Exceptional bird watching"],
        category: "nature"
      },
      {
        id: "moremi",
        name: "Moremi Game Reserve",
        image: "/bw-moremi.jpg",
        description: "Situated in the central and eastern areas of the Okavango, Moremi combines mopane woodland and acacia forests with floodplains.",
        facts: ["Voted best game reserve in Africa", "Protects a third of the Delta", "High density of predators"],
        category: "nature"
      },
      {
        id: "makgadikgadi",
        name: "Makgadikgadi Pans",
        image: "/bw-makgadikgadi.jpg",
        description: "One of the largest salt pans in the world, surrounded by the Kalahari Desert. A surreal landscape that transforms into a wetland during the rains.",
        facts: ["Remnants of an ancient superlake", "Site of the second largest zebra migration", "Unique meerkat interactions"],
        category: "adventure"
      }
    ],
    luxuryPackages: [
      {
        id: "delta-dreams",
        name: "Delta Dreams",
        duration: "6 Days 5 Nights",
        price: "Pricing Available Upon Request",
        includes: ["Helicopter transfers", "Mokoro safaris", "Ultra-luxury tented camps", "All meals"],
        highlight: "Exclusive water-level wildlife viewing in private concessions"
      },
      {
        id: "botswana-grand",
        name: "Botswana Grand",
        duration: "10 Days 9 Nights",
        price: "Pricing Available Upon Request",
        includes: ["Chobe river safari", "Moremi game drives", "Private guides", "Premium beverages"],
        highlight: "Unmatched elephant encounters on the Chobe River"
      }
    ],
    itinerary: [
      { day: 1, title: "Maun to Okavango", description: "Light aircraft flight into the Delta.", accommodation: "Mombo Camp" },
      { day: 2, title: "Delta Exploration", description: "Morning mokoro safari, afternoon game drive.", accommodation: "Mombo Camp" },
      { day: 3, title: "Fly to Moremi", description: "Transfer flight, afternoon predator tracking.", accommodation: "Chief's Camp" },
      { day: 4, title: "Moremi Safari", description: "Full day exploring the diverse habitats.", accommodation: "Chief's Camp" },
      { day: 5, title: "Departure", description: "Morning activity, fly back to Maun.", accommodation: "None" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628830!2d24.6849!3d-22.3285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfcfb61b4ed6c5%3A0xbd03bd1c4a4b1c7!2sBotswana!5e0!3m2!1sen!2sus!4v1"
  },
  {
    id: "malawi",
    name: "Malawi",
    flag: "🇲🇼",
    heroImage: "/mw-hero.jpg",
    tagline: "Warm lakeshore sanctuaries where time dissolves into paradise.",
    overview: "Known as the 'Warm Heart of Africa', Malawi offers tranquil escapes along its massive freshwater lake, complemented by lush highlands and emerging wildlife reserves.",
    hint: "Affordable Luxury Package",
    bestTimeToVisit: {
      months: "May to October",
      reason: "Cooler, dry weather ideal for both lake activities and game viewing.",
      weatherHighlights: ["Pleasant 22-26C", "Clear water visibility", "Lush post-rain landscapes", "Cooler evenings"]
    },
    landmarks: [
      {
        id: "lake-malawi",
        name: "Lake Malawi",
        image: "/mw-lake.jpg",
        description: "A stunningly clear freshwater lake that takes up a third of the country, famous for its colorful cichlid fish and pristine sandy beaches.",
        facts: ["Contains more fish species than any other lake", "Third largest lake in Africa", "UNESCO World Heritage site at Cape Maclear"],
        category: "nature"
      },
      {
        id: "liwonde",
        name: "Liwonde National Park",
        image: "/mw-liwonde.jpg",
        description: "Malawi's premier wildlife destination, featuring the Shire River, dense elephant populations, and successful cheetah and lion reintroductions.",
        facts: ["Exceptional boat safaris", "Thriving rhino population", "Rich birdlife with over 400 species"],
        category: "nature"
      },
      {
        id: "zomba",
        name: "Zomba Plateau",
        image: "/mw-zomba.jpg",
        description: "A spectacular forested mountain offering cool air, waterfalls, and panoramic views over the plains below.",
        facts: ["Rises to 1,800m", "Features the Emperor's View", "Great for hiking and trout fishing"],
        category: "adventure"
      },
      {
        id: "cape-maclear",
        name: "Cape Maclear",
        image: "/mw-cape.jpg",
        description: "A laid-back beach destination on the southern shores of Lake Malawi, offering luxury lodges, kayaking, and incredible snorkeling.",
        facts: ["Gateway to Lake Malawi National Park", "Crystal clear snorkeling waters", "Famous golden sunsets"],
        category: "luxury"
      }
    ],
    luxuryPackages: [
      {
        id: "lake-and-bush",
        name: "Lake & Bush Retreat",
        duration: "7 Days 6 Nights",
        price: "Pricing Available Upon Request",
        includes: ["Private lake villa", "Liwonde boat safaris", "All meals", "Chartered flights"],
        highlight: "Seamless transition from thrilling safari to lakeside relaxation"
      },
      {
        id: "malawi-highlands",
        name: "Highlands & Waters",
        duration: "9 Days 8 Nights",
        price: "Pricing Available Upon Request",
        includes: ["Zomba plateau hiking", "Lake snorkeling", "Premium lodges", "Private guide"],
        highlight: "Exclusive dinner under the stars on the shores of Lake Malawi"
      }
    ],
    itinerary: [
      { day: 1, title: "Arrival Lilongwe", description: "Transfer to Liwonde National Park.", accommodation: "Kuthengo Camp" },
      { day: 2, title: "Liwonde Safari", description: "Morning walking safari, afternoon boat cruise.", accommodation: "Kuthengo Camp" },
      { day: 3, title: "To the Lake", description: "Scenic transfer to Lake Malawi.", accommodation: "Pumulani Lodge" },
      { day: 4, title: "Lake Malawi", description: "Snorkeling, kayaking, and sunset sailing.", accommodation: "Pumulani Lodge" },
      { day: 5, title: "Departure", description: "Morning swim, transfer back to Lilongwe.", accommodation: "None" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228160!2d34.3015!3d-13.2543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d3e3060f2b3a7b%3A0xa08be6839ddab630!2sMalawi!5e0!3m2!1sen!2sus!4v1"
  }
];
