import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import History from './Components/History';
import Curiosity from './Components/Curiosity';

export default function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/curiosity" element={<Curiosity />} />
      </Routes>
    </Router>
  )
}

