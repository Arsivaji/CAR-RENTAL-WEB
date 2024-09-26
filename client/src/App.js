import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import SearchResults from './Pages/SearchResults';
import VehicleDetails from './Pages/VehicleDetails';
import ProtectedRoute from './utils/ProtectedRoute';
import ThemeToggle from './components/ThemeToggle';



function App() {
  // State to manage dark/light mode
  const [darkMode, setDarkMode] = useState(false);

  // Create Material UI theme with dark/light mode
  const theme = useMemo(() => 
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
    }), 
  [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/vehicle/:id" element={<VehicleDetails />} />

          {/* Protected routes (if needed for authorized users) */}
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <h1>Protected Content</h1> {/* Replace with actual protected component */}
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
