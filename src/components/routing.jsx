import { Route, Routes } from 'react-router-dom';
import BookingPage from '../pages/BookingPage';
import HomePage from '../pages/HomePage';
import Confirmed from '../pages/Confirmed';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/confirmed" element={<Confirmed />} />
    </Routes>
  );
}