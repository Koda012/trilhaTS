<reference types="vite/client" />

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { BuscarUsuario } from './components/BuscarUsuario';
import { CriarUsuario } from './components/CriarUsuario';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;
const Rooms = () => <h1>Rooms</h1>;
const RoomDetails = () => <h1>Room Details</h1>;
const BookingSuccess = () => <h1>Booking Success</h1>;

export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
      <div>
        <BuscarUsuario />
        <CriarUsuario />
      </div>
    </Router>
  );
}
