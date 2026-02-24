import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const HomePage = lazy(() => import("@/pages/HomePage"));
const ExperiencePage = lazy(() => import("@/pages/ExperiencePage"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));

/** Loading fallback for lazy-loaded routes */
function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  );
}

/** Inner layout that has access to router context for useScrollToTop */
function AppLayout() {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col bg-dark-500 font-sans text-white">
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

/** Root application component with router */
export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
