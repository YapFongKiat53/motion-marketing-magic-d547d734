import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ScrollToTop from "@/components/ScrollToTop";
import { ContentProvider } from "@/contexts/ContentContext";

const queryClient = new QueryClient();

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ContentProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <Outlet />
        </ContentProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
