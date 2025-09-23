import { useState } from "react";
import { X } from "lucide-react";

// Toggle this flag in code to show/hide the banner on landing
const SHOW_BANNER = false;

export const TopBanner = () => {
  const [visible, setVisible] = useState(SHOW_BANNER);

  const close = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
      <div className="relative w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 max-h-[85vh] flex items-center justify-center">
        <div className="absolute right-2 top-2 z-50">
          <button
            aria-label="close banner"
            onClick={close}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") close();
              if (e.key === "Escape") close();
            }}
            className="text-white/90 hover:text-white bg-black/30 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
          >
          CLOSE  <X className="h-5 w-5" />
          </button>
        </div>

        <div className="bg-black rounded-md shadow-lg overflow-hidden inline-block max-w-[90vw] sm:max-w-[70vw] md:max-w-[50vw]">
          <img
            src="/assets/banner.jpg"
            alt="Banner"
            className="block w-full h-auto max-h-[80vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
