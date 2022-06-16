import './App.css';
import MiniDrawer from './Components/Drawer/Drawer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/Home/HomePage';
import Profile from './Components/Profile/Profile';
import Login from './Components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './actions/trade';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.user);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <MiniDrawer comp={<HomePage />} /> : <Login />} />
          <Route path="/profile" element={<MiniDrawer comp={<Profile />} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
