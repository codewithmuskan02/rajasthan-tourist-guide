import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { cities } from "../data/cities";
import TabPanel from "../components/TabPanel";
import AttractionCard from "../components/AttractionCard";
import HotelCard from "../components/HotelCard";
import FoodCard from "../components/FoodCard";
import {
  MapPin,
  Thermometer,
  Languages,
  Calendar,
  Bookmark,
  BookmarkCheck,
  Share2,
  ChevronRight,
  Plane,
  Train,
  Car,
  AlertCircle,
  Bus,
  ExternalLink,
} from "lucide-react";

interface CityDetailProps {
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
}

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "attractions", label: "Attractions" },
  { id: "hotels", label: "Hotels" },
  { id: "food", label: "Food" },
  { id: "festivals", label: "Festivals" },
  { id: "tips", label: "Travel Tips" },
];

export default function CityDetail({ bookmarks, onToggleBookmark }: CityDetailProps) {
  const { cityName } = useParams<{ cityName: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  const [hotelFilter, setHotelFilter] = useState<string>("all");

  const city = cities.find((c) => c.id === cityName);
  const isBookmarked = city ? bookmarks.includes(city.id) : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cityName]);

  if (!city) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-amber-200/60 text-lg mb-4">City not found</p>
          <Link
            to="/cities"
            className="text-amber-400 hover:text-amber-300 underline"
          >
            Browse all cities
          </Link>
        </div>
      </div>
    );
  }

  const filteredHotels =
    hotelFilter === "all"
      ? city.hotels
      : city.hotels.filter((h) => h.category === hotelFilter);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: `${city.name} - Rajasthan Guide`, url });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 pt-20">
      {/* Hero */}
      <section className="relative h-72 sm:h-80 md:h-96 overflow-hidden">
        <img
          src={city.image}
          alt={city.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-amber-200/50 mb-3">
            <Link to="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/cities" className="hover:text-amber-300 transition-colors">
              Cities
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-amber-300">{city.name}</span>
          </nav>

          <div className="flex items-start justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-amber-600/80 backdrop-blur-sm rounded-full text-xs font-medium text-amber-50 mb-2">
                {city.nickname}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-amber-50">
                {city.name}
              </h1>
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => onToggleBookmark(city.id)}
                className="p-2.5 rounded-xl bg-amber-950/60 backdrop-blur-sm border border-amber-800/30 hover:border-amber-600/40 transition-all"
                aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
              >
                {isBookmarked ? (
                  <BookmarkCheck className="w-5 h-5 text-amber-400" />
                ) : (
                  <Bookmark className="w-5 h-5 text-amber-200/60" />
                )}
              </button>
              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-amber-950/60 backdrop-blur-sm border border-amber-800/30 hover:border-amber-600/40 transition-all"
                aria-label="Share"
              >
                <Share2 className="w-5 h-5 text-amber-200/60" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-10">
        <div className="flex flex-wrap gap-3">
          {[
            { icon: <MapPin className="w-4 h-4" />, text: city.district },
            { icon: <Calendar className="w-4 h-4" />, text: city.bestTime },
            { icon: <Thermometer className="w-4 h-4" />, text: city.temperature },
            { icon: <Languages className="w-4 h-4" />, text: city.language },
          ].map((item) => (
            <span
              key={item.text}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-950/60 backdrop-blur-sm border border-amber-800/20 rounded-lg text-xs text-amber-200/70"
            >
              <span className="text-amber-400">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <TabPanel tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </section>

      {/* Tab Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-16">
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="bg-amber-950/30 rounded-2xl border border-amber-800/20 p-6">
              <h2 className="font-display text-2xl font-bold text-amber-50 mb-3">
                About {city.name}
              </h2>
              <p className="text-amber-100/60 leading-relaxed">
                {city.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-amber-950/30 rounded-xl border border-amber-800/20 p-5">
                <h3 className="font-display text-lg font-semibold text-amber-50 mb-3">
                  Quick Facts
                </h3>
                <div className="space-y-2.5">
                  {[
                    { label: "District", value: city.district },
                    { label: "Nickname", value: city.nickname },
                    { label: "Region", value: city.region },
                    { label: "Best Time", value: city.bestTime },
                    { label: "Temperature", value: city.temperature },
                    { label: "Languages", value: city.language },
                  ].map((fact) => (
                    <div key={fact.label} className="flex justify-between text-sm">
                      <span className="text-amber-200/50">{fact.label}</span>
                      <span className="text-amber-100 font-medium">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-950/30 rounded-xl border border-amber-800/20 p-5">
                <h3 className="font-display text-lg font-semibold text-amber-50 mb-3">
                  City Type
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {city.type.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-amber-900/40 text-amber-300 rounded-full text-sm capitalize"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={city.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === "attractions" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {city.attractions.map((a) => (
              <AttractionCard key={a.name} attraction={a} />
            ))}
          </div>
        )}

        {activeTab === "hotels" && (
          <div>
            <div className="flex gap-2 mb-6">
              {["all", "budget", "mid-range", "luxury"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setHotelFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all capitalize ${
                    hotelFilter === cat
                      ? "bg-amber-600 text-amber-50"
                      : "bg-amber-950/40 text-amber-200/60 hover:text-amber-200 border border-amber-800/30"
                  }`}
                >
                  {cat === "all" ? "All" : cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredHotels.map((h) => (
                <HotelCard key={h.name} hotel={h} />
              ))}
            </div>
          </div>
        )}

        {activeTab === "food" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.food.map((f) => (
              <FoodCard key={f.dish} food={f} />
            ))}
          </div>
        )}

        {activeTab === "festivals" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {city.festivals.map((f) => (
              <div
                key={f.name}
                className="bg-amber-950/30 rounded-xl border border-amber-800/20 p-5 hover:border-amber-700/40 transition-all"
              >
                <h4 className="font-display text-lg font-semibold text-amber-50 mb-1">
                  {f.name}
                </h4>
                <span className="inline-block text-xs px-2 py-0.5 bg-amber-900/40 text-amber-300/80 rounded-md mb-2">
                  {f.month}
                </span>
                <p className="text-amber-100/60 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "tips" && (
          <div className="space-y-6">
            {/* How to Reach */}
            <div className="bg-amber-950/30 rounded-2xl border border-amber-800/20 p-6">
              <h3 className="font-display text-xl font-bold text-amber-50 mb-4">
                How to Reach
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex gap-3 p-4 bg-amber-900/20 rounded-xl">
                  <Plane className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-amber-100 font-medium text-sm mb-1">By Air</p>
                    <p className="text-amber-200/60 text-sm">{city.travelTips.howToReach.air}</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 bg-amber-900/20 rounded-xl">
                  <Train className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-amber-100 font-medium text-sm mb-1">By Train</p>
                    <p className="text-amber-200/60 text-sm">{city.travelTips.howToReach.train}</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 bg-amber-900/20 rounded-xl">
                  <Car className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-amber-100 font-medium text-sm mb-1">By Road</p>
                    <p className="text-amber-200/60 text-sm">{city.travelTips.howToReach.road}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Transport */}
            <div className="bg-amber-950/30 rounded-2xl border border-amber-800/20 p-6">
              <h3 className="font-display text-xl font-bold text-amber-50 mb-4">
                Local Transport
              </h3>
              <div className="flex flex-wrap gap-2">
                {city.travelTips.localTransport.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-900/30 text-amber-200/70 rounded-lg text-sm"
                  >
                    <Bus className="w-3.5 h-3.5 text-amber-400" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-amber-950/30 rounded-2xl border border-amber-800/20 p-6">
              <h3 className="font-display text-xl font-bold text-amber-50 mb-4">
                Travel Tips
              </h3>
              <ul className="space-y-3">
                {city.travelTips.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-amber-100/70">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
