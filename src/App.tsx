import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-amber-50">
        <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-lg border-b-4 border-orange-500/10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-black tracking-tight text-orange-500 flex items-center gap-2">
              SABOR<span className="text-stone-800">CRIOLLO</span> 🥟
            </h1>
            <div className="hidden md:flex gap-8 text-sm font-black uppercase text-stone-500 tracking-widest">
              <a href="#" className="hover:text-orange-500 transition-colors">Inicio</a>
              <a href="#menu" className="hover:text-orange-500 transition-colors">Menú</a>
              <a href="#servicios" className="hover:text-orange-500 transition-colors">Servicios</a>
              <a href="#contacto" className="bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition-all shadow-md shadow-orange-500/20">Pide Aquí</a>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
