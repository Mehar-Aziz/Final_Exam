import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Dragons from './components/Dragons';
import Missions from './components/Missions';
import { fetchMissions } from './redux/missions/missionsSlice';
import './App.css';
import Myprofile from './components/MyProfile';
import { fetchDragons } from './app/dragon/dragonSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
    dispatch(fetchDragons());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/profile" element={<Myprofile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
