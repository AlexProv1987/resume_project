import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nav/NavBar';
import Footer from './components/Footer/Footer';
import ContactPage from "./components/Pages/ContactPage";
import HomePage from "./components/Pages/HomePage";
import ProjectPage from "./components/Pages/ProjectPage";
import Resume from "./components/Pages/Resume";
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return(
  <React.StrictMode>
    <Router>
    <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/projects' element={<ProjectPage/>}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
  );
}

export default App;
