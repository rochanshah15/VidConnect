import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Videoroom from './components/videoroom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomid" element={<Videoroom />} />
      </Routes>
    </Router>
  );
}

export default App;
