import { Container } from "@mui/material";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Box from "@mui/material/Box";
import RegisterForm from "./components/RegisterForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box sx={{ display: "flex", margin: 2 }}>
      <Sidebar />

      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="register" element={<RegisterForm/>}/>
        </Routes>
      </Router>
      
    </Box>
  );
}

export default App;
