import './App.css';
import Cart from './pages/Cart';
import MarketPlace from './pages/MarketPlace';

import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
    <HashRouter>
      <Routes>
        <Route path='/' element={<MarketPlace />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;