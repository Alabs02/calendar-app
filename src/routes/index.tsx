import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import { HomePage, CalendarPage } from '@/pages';

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
