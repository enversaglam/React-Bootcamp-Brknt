import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
