import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhatIsIslam from "./pages/WhatIsIslam";
import CoreBeliefs from "./pages/CoreBeliefs";
import PurposeOfLife from "./pages/PurposeOfLife";
import ProphetMuhammad from "./pages/ProphetMuhammad";
import Misconceptions from "./pages/Misconceptions";
import FAQ from "./pages/FAQ";
import Quran from "./pages/Quran";
import BeautyOfIslam from "./pages/BeautyOfIslam";
import Reflection from "./pages/Reflection";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/islam" element={<WhatIsIslam />} />
          <Route path="/beliefs" element={<CoreBeliefs />} />
          <Route path="/purpose" element={<PurposeOfLife />} />
          <Route path="/prophet" element={<ProphetMuhammad />} />
          <Route path="/misconceptions" element={<Misconceptions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/beauty" element={<BeautyOfIslam />} />
          <Route path="/reflection" element={<Reflection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
