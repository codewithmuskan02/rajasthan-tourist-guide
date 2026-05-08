import { MapPin } from "lucide-react";
import type { Food } from "../data/cities";

interface FoodCardProps {
  food: Food;
}

export default function FoodCard({ food }: FoodCardProps) {
  return (
    <div className="bg-amber-950/30 rounded-xl border border-amber-800/20 p-5 hover:border-amber-700/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/10">
      <h4 className="font-display text-lg font-semibold text-amber-50 mb-1">
        {food.dish}
      </h4>
      <span className="inline-block text-xs px-2 py-0.5 bg-amber-900/40 text-amber-300/80 rounded-md capitalize mb-2">
        {food.type}
      </span>
      <div className="flex items-center gap-1.5 text-amber-200/50 text-sm">
        <MapPin className="w-3.5 h-3.5" />
        <span>{food.where}</span>
      </div>
    </div>
  );
}
