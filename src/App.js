import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from "./components/Main"
import Schedule from "./components/Schedule";
import Ticket from "./components/Ticket";
import Team from "./components/Team";
import Contact from "./components/Contact";
function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/schedule" element={<Schedule />} />
            <Route exact path="/tickets" element={<Ticket />} />
            <Route exact path="/team" element={<Team/>} />               
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
