import { createRoot } from "react-dom/client";
import RestaurantApp from "./restaurant/RestaurantApp.tsx";
import "./index.css";

createRoot(document.getElementById("restaurant-root")!).render(<RestaurantApp />);