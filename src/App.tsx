import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CitiesList from "./pages/CitiesList";
import CityDetail from "./pages/CityDetail";
import { ArrowUp } from "lucide-react";

function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("rajasthan-bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("rajasthan-bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  return { bookmarks, toggleBookmark };
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 p-3 bg-amber-600 hover:bg-amber-500 text-amber-50 rounded-full shadow-lg shadow-amber-900/30 transition-all duration-300 hover:scale-110"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

export default function App() {
  const { bookmarks, toggleBookmark } = useBookmarks();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-stone-950 text-amber-50">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home bookmarks={bookmarks} onToggleBookmark={toggleBookmark} />
              }
            />
            <Route
              path="/cities"
              element={
                <CitiesList
                  bookmarks={bookmarks}
                  onToggleBookmark={toggleBookmark}
                />
              }
            />
            <Route
              path="/city/:cityName"
              element={
                <CityDetail
                  bookmarks={bookmarks}
                  onToggleBookmark={toggleBookmark}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}
