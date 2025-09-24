import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Restaurant from "./pages/Restaurant";

const queryClient = new QueryClient();

const RestaurantApp = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Restaurant />
    </TooltipProvider>
  </QueryClientProvider>
);

export default RestaurantApp;