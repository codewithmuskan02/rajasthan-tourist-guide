import { Castle, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-amber-950 border-t border-amber-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Castle className="w-6 h-6 text-amber-400" />
              <span className="font-display text-xl font-bold text-amber-50">
                Rajasthan<span className="text-amber-400">Guide</span>
              </span>
            </Link>
            <p className="text-amber-200/70 text-sm leading-relaxed">
              Your complete guide to exploring the royal land of Rajasthan.
              Discover magnificent forts, vibrant culture, and timeless heritage.
            </p>
          </div>

          <div>
            <h3 className="font-display text-amber-50 font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Cities"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : "/cities"}
                    className="text-amber-200/70 hover:text-amber-300 text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-amber-50 font-semibold mb-4">
              Popular Cities
            </h3>
            <ul className="space-y-2">
              {["jaipur", "jodhpur", "udaipur", "jaisalmer"].map((id) => (
                <li key={id}>
                  <Link
                    to={`/city/${id}`}
                    className="text-amber-200/70 hover:text-amber-300 text-sm transition-colors capitalize"
                  >
                    {id}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-amber-800/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-amber-200/50 text-xs">
            &copy; {new Date().getFullYear()} RajasthanGuide. All rights reserved.
          </p>
          <p className="text-amber-200/50 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400" /> for Rajasthan
          </p>
        </div>
      </div>
    </footer>
  );
}
