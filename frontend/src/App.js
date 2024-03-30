import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import PasswordRecovery from './Components/LoginSignup/PasswordRecovery';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<LoginSignup />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
        </Routes>
    </Router>
);
}

export default App;
