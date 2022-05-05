import './App.css';
import { Route, Routes, NavLink, Link } from 'react-router-dom';

import Blog from './components/Blog'
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/blog' element={ <Blog /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
