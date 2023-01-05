import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import MyCijiji from './pages/MyCijiji';
import Post from './pages/Post';
import Favourites from './pages/Favourites';
import Messages from './pages/Messages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<MyCijiji />} />
        <Route path='/' element={<Post />} />
        <Route path='/' element={<Favourites />} />
        <Route path='/' element={<Messages />} />
      </Routes>
    </div>
  );
}

export default App;
