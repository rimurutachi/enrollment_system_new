import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login/LoginPage";
import StudentPageLogin from "./pages/Login/StudentPageLogin";
import AdminPageLogin from "./pages/Login/AdminPageLogin.jsx";
import FacultyPageLogin from "./pages/Login/FacultyPageLogin";
import RegistrationForm from "./pages/Admission/RegistrationForm";
import ApplicantProfile from "./pages/Admission/ApplicantProfile";
import FamilyProfile from "./pages/Admission/FamilyProfile";
import EducationalProfile from "./pages/Admission/EducationalProfile";
import UploadRequirements from "./pages/Admission/UploadRequirements";
import ScheduleAppointment from "./pages/Admission/ScheduleAppointment";
import StudentPageHome from "./pages/Student/StudentPageHome.jsx";
import StudentPageEnrollment from "./pages/Student/StudentPageEnrollment.jsx";
import StudentPageAccounts from "./pages/Student/StudentPageAccounts.jsx";
import StudentPageSchedule from "./pages/Student/StudentPageSchedule.jsx";
import StudentPageGrades from "./pages/Student/StudentPageGrades.jsx";
import StudentPageProfile from "./pages/Student/StudentPageProfile.jsx";
import StudentPageChangePass from "./pages/Student/StudentPageChangePass.jsx";
import StudentPageInboxDetail from "./pages/Student/StudentPageInboxDetail.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import AdminStudentMasterlist from "./pages/Admin/AdminStudentMasterlist.jsx";
import AdminFacultyMasterlist from "./pages/Admin/AdminFacultyMasterlist.jsx";
import AdminAnnouncements from "./pages/Admin/AdminAnnouncements.jsx";
import AdminAdmission from "./pages/Admin/AdminAdmission.jsx";
import AdminCreateFaculty from "./pages/Admin/AdminCreateFaculty.jsx";
import AdminCreateStudent from "./pages/Admin/AdminCreateStudent.jsx";
import AdminFacultySchedule from "./pages/Admin/AdminFacultySchedule.jsx";
import AdminStudentSchedule from "./pages/Admin/AdminStudentSchedule.jsx";
import AdminUploadedDocuments from "./pages/Admin/AdminUploadedDocuments.jsx";
import FacultyDashboard from "./pages/Faculty/FacultyDashboard.jsx";
import FacultyMasterlist from "./pages/Faculty/FacultyMasterlist.jsx";
import FacultyPageSchedule from "./pages/Faculty/FacultyPageSchedule.jsx";
import FacultyPageAdvising from "./pages/Faculty/FacultyPageAdvising.jsx";


import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/StudentPageLogin" element={<StudentPageLogin />} />
        <Route path="/AdminPageLogin" element={<AdminPageLogin/>} />
        <Route path="/FacultyPageLogin" element={<FacultyPageLogin />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/ApplicantProfile" element={<ApplicantProfile />} />
        <Route path="/FamilyProfile" element={<FamilyProfile />} />
        <Route path="/EducationalProfile" element={<EducationalProfile />} />
        <Route path="/UploadRequirements" element={<UploadRequirements />} />
        <Route path="/ScheduleAppointment" element={<ScheduleAppointment />} />
        <Route path="/StudentPageHome" element={<StudentPageHome />} />
        <Route path="/StudentPageEnrollment" element={<StudentPageEnrollment />} />
        <Route path="/StudentPageAccounts" element={<StudentPageAccounts />} />
        <Route path="/StudentPageSchedule" element={<StudentPageSchedule />} />
        <Route path="/StudentPageGrades" element={<StudentPageGrades />} />
        <Route path="/StudentPageProfile" element={<StudentPageProfile />} />
        <Route path="/StudentPageChangePass" element={<StudentPageChangePass />} />
        <Route path="/StudentPageInboxDetail" element={<StudentPageInboxDetail />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/AdminStudentMasterlist" element={<AdminStudentMasterlist />} />
        <Route path="/AdminCreateStudent" element={<AdminCreateStudent />} />
        <Route path="/AdminAdmission" element={<AdminAdmission />} /> 
        <Route path="/AdminStudentSchedule" element={<AdminStudentSchedule />} />
        <Route path="/AdminFacultyMasterlist" element={<AdminFacultyMasterlist />} />
        <Route path="/AdminCreateFaculty" element={<AdminCreateFaculty />} />
        <Route path="/AdminFacultySchedule" element={<AdminFacultySchedule />} />
        <Route path="/AdminAnnouncements" element={<AdminAnnouncements />} />
        <Route path="/AdminUploadedDocuments" element={<AdminUploadedDocuments/>} />
        <Route path="/FacultyDashboard" element={<FacultyDashboard/>} />
        <Route path="/FacultyMasterlist" element={<FacultyMasterlist/>} />
        <Route path="/FacultyPageSchedule" element={<FacultyPageSchedule/>} />
        <Route path="/FacultyPageAdvising" element={<FacultyPageAdvising/>} />
      </Routes>
    </Router>
  );
}

export default App;
