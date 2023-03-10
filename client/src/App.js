import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useApi } from './hooks/use-api';

// pages & components
import Navbar from './components/Navbar'
import Home from './pages/Home'


function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
