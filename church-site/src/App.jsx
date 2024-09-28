// import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from './Route/HomePage/HomePage';
import Metro from './pages/Metro/Metro';
import Header from './Components/Header/Header';
import ShiftingTurnings from './pages/ShiftingTurnings/ShiftingTurnings';
import SignsWonders from './pages/signsWonders/SignsWonders';
import StreetChurch from './pages/streetChurch/StreetChurch';
import Footer from './Components/Footer/Footer';




function App() {

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="metro" element={<Metro />} />
          <Route path="shiftingTurnings" element={<ShiftingTurnings />} />
          <Route path='signs' element={<SignsWonders />} />
          <Route path='streetchurch' element={<StreetChurch />} />



        </Routes>
        <Footer /> 
        
      </div>

    </>
  )
}

export default App
