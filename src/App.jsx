
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;