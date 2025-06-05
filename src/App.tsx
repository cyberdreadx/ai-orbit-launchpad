
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services99 from "./pages/Services99";
import ChatbotService from "./pages/ChatbotService";
import WorkflowService from "./pages/WorkflowService";
import ContentService from "./pages/ContentService";
import BookingService from "./pages/BookingService";
import PromptsService from "./pages/PromptsService";
import WorkflowExamples from "./pages/WorkflowExamples";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services99 />} />
          <Route path="/services/chatbot" element={<ChatbotService />} />
          <Route path="/services/workflow" element={<WorkflowService />} />
          <Route path="/services/content" element={<ContentService />} />
          <Route path="/services/booking" element={<BookingService />} />
          <Route path="/services/prompts" element={<PromptsService />} />
          <Route path="/workflow-examples" element={<WorkflowExamples />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
