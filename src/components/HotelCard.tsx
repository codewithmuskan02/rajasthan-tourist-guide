import { Star, IndianRupee } from "lucide-react";
import type { Hotel } from "../data/cities";

interface HotelCardProps {
  hotel: Hotel;
}

const categoryColors: Record<string, string> = {
  budget: "bg-green-900/40 text-green-300 border-green-700/30",
  "mid-range": "bg-blue-900/40 text-blue-300 border-blue-700/30",
  luxury: "bg-amber-900/40 text-amber-300 border-amber-700/30",
};

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="bg-amber-950/30 rounded-xl border border-amber-800/20 p-5 hover:border-amber-700/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/10">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-display text-lg font-semibold text-amber-50">
          {hotel.name}
        </h4>
        <span className={`text-xs px-2 py-0.5 rounded-full border capitalize ${categoryColors[hotel.category]}`}>
          {hotel.category}
        </span>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span className="flex items-center gap-1 text-amber-300/70">
          <IndianRupee className="w-3.5 h-3.5" />
          {hotel.priceRange}
        </span>
        <span className="flex items-center gap-1 text-amber-300/70">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          {hotel.rating}
        </span>
      </div>
    </div>
  );
}
