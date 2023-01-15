import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import MyCijiji from './pages/MyCijiji';
import Post from './pages/Post';
import Favourites from './pages/Favourites';
import Messages from './pages/Messages';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myCijiji' element={<MyCijiji />} />
        <Route path='/post' element={<Post />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
