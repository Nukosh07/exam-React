
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/e3';
import Projects from './pages/e2';
import About from './pages/e1';
import NotFound from './pages/e4';

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