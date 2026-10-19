import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import WhatsAppButton from "./WhatsAppButton";

// Start each new page at the top instead of keeping the old scroll position
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function Layout() {
  return (
    <div className="bg-black text-[#F3EEE3] antialiased">
      <ScrollToTop />
      <Nav />
      {/* pt-24 matches the fixed nav height, so each page starts below it */}
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
