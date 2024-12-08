
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import FileUpload from './Components/Upload/Upload'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
    </div>
  );
};

const HomeUpload = () => {
  return (
    <div>
      <Navbar/>
      <FileUpload/>
    </div>
  );
};

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/upload" element={<HomeUpload/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App
