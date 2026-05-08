import { Clock, Ticket } from "lucide-react";
import type { Attraction } from "../data/cities";

interface AttractionCardProps {
  attraction: Attraction;
}

export default function AttractionCard({ attraction }: AttractionCardProps) {
  return (
    <div className="bg-amber-950/30 rounded-xl border border-amber-800/20 p-5 hover:border-amber-700/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/10">
      <h4 className="font-display text-lg font-semibold text-amber-50 mb-2">
        {attraction.name}
      </h4>
      <p className="text-amber-100/60 text-sm leading-relaxed mb-3">
        {attraction.description}
      </p>
      <div className="flex flex-wrap gap-3 text-xs">
        <span className="flex items-center gap-1 text-amber-300/70 bg-amber-900/30 px-2.5 py-1 rounded-md">
          <Clock className="w-3 h-3" />
          {attraction.timings}
        </span>
        <span className="flex items-center gap-1 text-amber-300/70 bg-amber-900/30 px-2.5 py-1 rounded-md">
          <Ticket className="w-3 h-3" />
          {attraction.entryFee}
        </span>
      </div>
    </div>
  );
}
