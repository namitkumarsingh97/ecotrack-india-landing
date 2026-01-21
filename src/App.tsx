import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import About from "./pages/About";
import Product from "./pages/Product";
import Industries from "./pages/Industries";
import Impact from "./pages/Impact";
import UseCases from "./pages/UseCases";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Careers from "./pages/Careers";
import WhatIsSMB from "./pages/WhatIsSMB";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if ((window as any).chatbase) return;

    (function () {
      if (
        !(window as any).chatbase ||
        (window as any).chatbase("getState") !== "initialized"
      ) {
        (window as any).chatbase = (...args: any[]) => {
          if (!(window as any).chatbase.q) {
            (window as any).chatbase.q = [];
          }
          (window as any).chatbase.q.push(args);
        };

        (window as any).chatbase = new Proxy((window as any).chatbase, {
          get(target, prop) {
            if (prop === "q") {
              return target.q;
            }
            return (...args: any[]) => target(prop, ...args);
          },
        });
      }

      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = import.meta.env.VITE_CHATBOT_ID;
      script.setAttribute("domain", "www.chatbase.co");
      document.body.appendChild(script);
    })();
  }, []);

  return <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/what-is-smb" element={<WhatIsSMB />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Analytics />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;
};

export default App;
