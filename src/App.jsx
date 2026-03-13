import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import LetsTalk from './pages/LetsTalk';
import SmartHealthcareAccessPlatform from './pages/projects/SmartHealthcareAccessPlatform';
import AIJobMatchingPlatform from './pages/projects/AIJobMatchingPlatform';
import AIGovernmentServicePlatform from './pages/projects/AIGovernmentServicePlatform';
import NeuroCareAI from './pages/projects/NeuroCareAI';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <Loader />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="lets-talk" element={<LetsTalk />} />
          <Route path="projects/smart-healthcare-access-platform" element={<SmartHealthcareAccessPlatform />} />
          <Route path="projects/ai-job-matching-platform" element={<AIJobMatchingPlatform />} />
          <Route path="projects/ai-government-service-platform" element={<AIGovernmentServicePlatform />} />
          <Route path="projects/neurocare-ai" element={<NeuroCareAI />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
