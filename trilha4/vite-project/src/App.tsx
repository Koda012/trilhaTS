<reference types="vite/client" />

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { BuscarUsuario } from './components/BuscarUsuario';
import { CriarUsuario } from './components/CriarUsuario';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div>
        <BuscarUsuario />
        <CriarUsuario />
      </div>
    </Router>
  );
}
