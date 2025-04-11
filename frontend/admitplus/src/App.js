import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeroTwo from './components/HeroTwo';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>


   </Routes>
   </BrowserRouter>
  );
}

export default App;
