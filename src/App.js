import React from 'react';
import './App.css';
import MainDashboard from './Components/Dashboard/MainDashboard';
import Sidebar from './Components/SideBar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDashboard />
      </div>
    </div>
  );
}

export default App;
