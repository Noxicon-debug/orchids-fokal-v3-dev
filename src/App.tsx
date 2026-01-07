import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import BookingPage from './pages/BookingPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from 'react-hot-toast';
import { Toaster as Sonner } from 'sonner';
import HoverReceiver from "@/visual-edits/VisualEditsMessenger";

const queryClient = new QueryClient();

function App() {
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HoverReceiver />
        <Layout>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="*" element={<NotFoundPage />} />

            </Routes>
          </AnimatePresence>
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
