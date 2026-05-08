import { useState, useMemo } from "react";
import { cities } from "../data/cities";
import CityCard from "../components/CityCard";
import SearchBar from "../components/SearchBar";

interface CitiesListProps {
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
}

const regions = ["All", "North", "South", "East", "West"] as const;
const types = ["All", "heritage", "nature", "religious"] as const;

export default function CitiesList({ bookmarks, onToggleBookmark }: CitiesListProps) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<string>("All");
  const [type, setType] = useState<string>("All");
  const [showBookmarked, setShowBookmarked] = useState(false);

  const filtered = useMemo(() => {
    return cities.filter((city) => {
      const matchesSearch =
        city.name.toLowerCase().includes(search.toLowerCase()) ||
        city.nickname.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = region === "All" || city.region === region;
      const matchesType = type === "All" || city.type.includes(type as "heritage" | "nature" | "religious");
      const matchesBookmark = !showBookmarked || bookmarks.includes(city.id);
      return matchesSearch && matchesRegion && matchesType && matchesBookmark;
    });
  }, [search, region, type, showBookmarked, bookmarks]);

  return (
    <div className="min-h-screen bg-stone-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-amber-50 mb-2">
            Explore Cities
          </h1>
          <p className="text-amber-200/60">
            Discover {cities.length} incredible cities across Rajasthan
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <SearchBar value={search} onChange={setSearch} />

          <div className="flex flex-wrap gap-2">
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="px-3 py-2 bg-amber-950/40 border border-amber-800/30 rounded-lg text-amber-100 text-sm focus:outline-none focus:border-amber-600/50"
            >
              {regions.map((r) => (
                <option key={r} value={r} className="bg-amber-950">
                  {r === "All" ? "All Regions" : r}
                </option>
              ))}
            </select>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="px-3 py-2 bg-amber-950/40 border border-amber-800/30 rounded-lg text-amber-100 text-sm focus:outline-none focus:border-amber-600/50"
            >
              {types.map((t) => (
                <option key={t} value={t} className="bg-amber-950">
                  {t === "All" ? "All Types" : t.charAt(0).toUpperCase() + t.slice(1)}
                </option>
              ))}
            </select>

            <button
              onClick={() => setShowBookmarked(!showBookmarked)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                showBookmarked
                  ? "bg-amber-600 text-amber-50"
                  : "bg-amber-950/40 border border-amber-800/30 text-amber-200/60 hover:text-amber-200"
              }`}
            >
              Bookmarked
            </button>
          </div>
        </div>

        {/* Results count */}
        <p className="text-amber-200/40 text-sm mb-6">
          Showing {filtered.length} of {cities.length} cities
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((city) => (
              <CityCard
                key={city.id}
                city={city}
                isBookmarked={bookmarks.includes(city.id)}
                onToggleBookmark={onToggleBookmark}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-amber-200/40 text-lg">No cities found matching your filters.</p>
            <button
              onClick={() => {
                setSearch("");
                setRegion("All");
                setType("All");
                setShowBookmarked(false);
              }}
              className="mt-3 text-amber-400 hover:text-amber-300 text-sm underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
