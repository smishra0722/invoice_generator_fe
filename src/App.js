import React from "react";
import PageRoutes from "./routes";
import { Routes, Route } from "react-router";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Sidebar from './components/sidebar'
import Header from './components/header'


function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
          <Toolbar />
          <Routes>
            {PageRoutes.map((route) => (
              <Route {...route} />
            ))}
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default App;
