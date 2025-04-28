import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react'
import logo from './logo.svg';
import './App.css';
import Weather from './Weather';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            {/* Public Route for Login */}
            <Route path="/login" element={<Login />} />
            
            {/* Public Route for Register */}
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route
              path="/weather"
              element={<ProtectedRoute element={Weather} />}
            />

            {/* Default route - Redirect to login if no route is matched */}
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
