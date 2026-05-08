import { Link } from "react-router-dom";
import { cities } from "../data/cities";
import CityCard from "../components/CityCard";
import {
  MapPin,
  Thermometer,
  Users,
  Compass,
  ArrowRight,
  Crown,
  Landmark,
  Mountain,
} from "lucide-react";

interface HomeProps {
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
}

const featuredCities = cities.filter((c) =>
  ["jaipur", "jodhpur", "udaipur", "jaisalmer", "pushkar", "bikaner"].includes(c.id)
);

export default function Home({ bookmarks, onToggleBookmark }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/70 via-amber-950/50 to-amber-950" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-600/20 border border-amber-600/30 rounded-full mb-6">
            <Crown className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">
              Land of Kings
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-amber-50 mb-6 leading-tight">
            Discover{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Rajasthan
            </span>
          </h1>
          <p className="text-amber-100/70 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore the royal heritage, vibrant culture, and timeless beauty of
            India's most magnificent state. From golden deserts to serene lakes,
            every city tells a story.
          </p>
          <Link
            to="/cities"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-amber-50 font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-amber-900/30 hover:shadow-amber-800/40"
          >
            Explore Cities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />
      </section>

      {/* Quick Stats */}
      <section className="relative -mt-16 z-20 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            {
              icon: <MapPin className="w-5 h-5" />,
              value: "342,239 km²",
              label: "Total Area",
            },
            {
              icon: <Users className="w-5 h-5" />,
              value: "68.5M",
              label: "Population",
            },
            {
              icon: <Thermometer className="w-5 h-5" />,
              value: "Oct - Mar",
              label: "Best Time",
            },
            {
              icon: <Compass className="w-5 h-5" />,
              value: "30+",
              label: "Cities to Explore",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-amber-950/60 backdrop-blur-md border border-amber-800/30 rounded-xl p-4 text-center hover:border-amber-700/40 transition-all"
            >
              <div className="flex justify-center text-amber-400 mb-2">
                {stat.icon}
              </div>
              <p className="font-display text-xl md:text-2xl font-bold text-amber-50">
                {stat.value}
              </p>
              <p className="text-amber-200/50 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-amber-50 mb-3">
            Experience Rajasthan
          </h2>
          <p className="text-amber-200/60 max-w-xl mx-auto">
            From majestic forts to spiritual retreats, discover the many facets
            of this royal land
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Landmark className="w-8 h-8" />,
              title: "Heritage & Forts",
              count: cities.filter((c) => c.type.includes("heritage")).length,
              desc: "Magnificent forts, palaces, and havelis that echo with centuries of royal history",
              color: "from-amber-600/20 to-amber-800/20",
              border: "border-amber-700/30",
            },
            {
              icon: <Mountain className="w-8 h-8" />,
              title: "Nature & Wildlife",
              count: cities.filter((c) => c.type.includes("nature")).length,
              desc: "Tiger reserves, bird sanctuaries, lakes, and the only hill station in Rajasthan",
              color: "from-emerald-600/20 to-emerald-800/20",
              border: "border-emerald-700/30",
            },
            {
              icon: <Crown className="w-8 h-8" />,
              title: "Spiritual & Religious",
              count: cities.filter((c) => c.type.includes("religious")).length,
              desc: "Sacred temples, Sufi shrines, Jain pilgrimage sites, and holy cities",
              color: "from-rose-600/20 to-rose-800/20",
              border: "border-rose-700/30",
            },
          ].map((cat) => (
            <div
              key={cat.title}
              className={`bg-gradient-to-br ${cat.color} border ${cat.border} rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="text-amber-400 mb-4">{cat.icon}</div>
              <h3 className="font-display text-xl font-bold text-amber-50 mb-2">
                {cat.title}
              </h3>
              <p className="text-amber-200/60 text-sm leading-relaxed mb-3">
                {cat.desc}
              </p>
              <span className="text-amber-400 text-sm font-medium">
                {cat.count} cities
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Cities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-amber-50 mb-2">
              Featured Cities
            </h2>
            <p className="text-amber-200/60">
              Start your journey with these iconic destinations
            </p>
          </div>
          <Link
            to="/cities"
            className="hidden sm:flex items-center gap-1 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCities.map((city) => (
            <CityCard
              key={city.id}
              city={city}
              isBookmarked={bookmarks.includes(city.id)}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/cities"
            className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 text-sm font-medium"
          >
            View all cities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
