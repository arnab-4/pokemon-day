import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

// importing components
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Pokemon from './routes/Pokemon';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon' element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
