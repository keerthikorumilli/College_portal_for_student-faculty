import React from 'react';
import AssignTeamPage from './components/AssignPages/AssignPage';
import Project from './components/AssignPages/ProjectAssign.js';
import AdminCards from './components/Home/AdminCrads.js';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from './components/navbar/NavBar.js';
import Notify from './components/Announcements/NotificationPage.js';
import Notes from './components/Courses/ReferenceNotes.js';
import Savednotes from './components/Courses/NotesSummary.js';
import Attendance from './components/Attendance/Attendance.js';
import AttendanceSummary from './components/Attendance/AttendanceSummary.js';
import Todo from './components/Todo/todo';
import Login from './components/Login/login'
import AdminLogin from './components/Login/AdminLogin';
import Calendar from "./components/calender/Calendar";
import TeamCreate from './components/teams/TeamCreate';
import DeleteTeam from './components/teams/DeleteTeam';
import EditTeam from './components/teams/EditTeam';

// import Register from './components/Login/register'
import './App.css'

export default function App() {
  return( 
 
   <BrowserRouter>
    <Header/>
    <Routes>
      {/* <Route path="/" exact element={<Main />}></Route> */}
      <Route path="/login" exact element={<Login />}></Route>
      <Route path="/Adminlogin" exact element={<AdminLogin />}></Route>
      {/* <Route path="/register" exact element={<Register />}></Route> */}
      <Route path="/admin-home" exact element={<AdminCards />}></Route>
      <Route path="/notify" exact element={<Notify />}></Route>
      <Route path="/projectassign" exact element={<Project />}></Route>
      <Route path="/teamassign" exact element={<AssignTeamPage />}></Route>
      <Route path="/notes" exact element={<Notes />}></Route>
      <Route path="/saved-data" exact element={<Savednotes />}></Route>
      <Route path="/attendance" exact element={<Attendance />}></Route>
      <Route path="/get-attendance" element={<AttendanceSummary />}></Route>
      <Route path="/todo" exact element={<Todo />}></Route>
      <Route path="/calender" exact element={<Calendar/>}></Route>
      <Route path="/admin-TeamCreate" exact element={<TeamCreate/>}></Route>
      <Route path="/Admin-Teamedit" exact element={<EditTeam/>}></Route>
      <Route path="/Admin-TeamDelete" exact element={<DeleteTeam/>}></Route>
      
    </Routes>
   </BrowserRouter>
 
  )
}