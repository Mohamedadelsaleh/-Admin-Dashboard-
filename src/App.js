import React from 'react';
import './App.css';
import MainDashboard from './Components/Dashboard/MainDashboard';
import RightSide from './Components/RightSide/RightSide';
import Sidebar from './Components/SideBar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDashboard />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
