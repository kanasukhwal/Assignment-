import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import Home from './pages/Home';  

function App() {
  return (
    <Router> 
      <Routes>

        <Route path="/" element={<Home />} /> {/* Default Route */} 
         
      </Routes>
    </Router>
  );
}

export default App;
