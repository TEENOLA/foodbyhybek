import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import NotFoundPage from "./pages/NotFoundPage";
import QuotePage from "./pages/QuotePage";
import ServicesPage from "./pages/ServicesPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="quote" element={<QuotePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
