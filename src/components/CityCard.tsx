import { Link } from "react-router-dom";
import { MapPin, Bookmark, BookmarkCheck } from "lucide-react";
import type { City } from "../data/cities";

interface CityCardProps {
  city: City;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export default function CityCard({ city, isBookmarked, onToggleBookmark }: CityCardProps) {
  return (
    <div className="group relative bg-amber-950/40 rounded-2xl overflow-hidden border border-amber-800/20 hover:border-amber-600/40 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/20 hover:-translate-y-1">
      <Link to={`/city/${city.id}`} className="block">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={city.image}
            alt={city.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 via-amber-950/30 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4">
            <div className="flex items-center gap-1.5 text-amber-300/80 text-xs mb-1">
              <MapPin className="w-3 h-3" />
              <span>{city.district}</span>
            </div>
            <h3 className="font-display text-xl font-bold text-amber-50">
              {city.name}
            </h3>
          </div>
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 bg-amber-600/80 backdrop-blur-sm rounded-full text-xs font-medium text-amber-50">
              {city.nickname}
            </span>
          </div>
        </div>

        <div className="p-4">
          <p className="text-amber-100/60 text-sm line-clamp-2 leading-relaxed mb-3">
            {city.description}
          </p>
          <div className="flex items-center gap-3 text-xs text-amber-200/50">
            <span className="px-2 py-0.5 bg-amber-900/30 rounded-md">
              {city.bestTime.split(" to ")[0]}
            </span>
            <span className="px-2 py-0.5 bg-amber-900/30 rounded-md capitalize">
              {city.region}
            </span>
            {city.type.map((t) => (
              <span key={t} className="px-2 py-0.5 bg-amber-900/30 rounded-md capitalize">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggleBookmark(city.id);
        }}
        className="absolute top-3 left-3 p-1.5 rounded-full bg-amber-950/60 backdrop-blur-sm hover:bg-amber-900/60 transition-colors"
        aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
      >
        {isBookmarked ? (
          <BookmarkCheck className="w-4 h-4 text-amber-400" />
        ) : (
          <Bookmark className="w-4 h-4 text-amber-200/60" />
        )}
      </button>
    </div>
  );
}
