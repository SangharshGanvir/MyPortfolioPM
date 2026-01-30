import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import LetsTalk from './pages/LetsTalk';
import ProjectDetail from './pages/projects/ProjectDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="lets-talk" element={<LetsTalk />} />
          <Route path="projects/:projectId" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
