import React, { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RegistrationForm from './pages/Admission/RegistrationForm'
import ApplicantProfile from './pages/Admission/ApplicantProfile'
import FamilyProfile from './pages/Admission/FamilyProfile'
import EducationalProfile from './pages/Admission/EducationalProfile'
import UploadRequirements from './pages/Admission/UploadRequirements'
import ScheduleAppointment from './pages/Admission/ScheduleAppointment'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/ApplicantProfile" element={<ApplicantProfile />} />
        <Route path="/FamilyProfile" element={<FamilyProfile />} />
        <Route path="/EducationalProfile" element={<EducationalProfile />} />
        <Route path="/UploadRequirements" element={<UploadRequirements />} />
        <Route path="/ScheduleAppointment" element={<ScheduleAppointment />} />
      </Routes>
    </Router>
  )
}

export default App
