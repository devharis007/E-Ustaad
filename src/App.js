import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import Footer from './components/Footer';
import {StudentDashboard} from './components/StudentDashboard';
import {StudentDashboardNav} from './components/StudentDashboardNav';

//import {Footer} from './components/Footer';

import Register from './components/Register';
import Login from './components/Login'
import RegisterAsStudent from './components/RegisterAsStudent'

import {Index} from './components/Index';
import {LearnOrEarnNav} from './components/LearnOrEarnNav';
import {LearnOrEarn} from './components/LearnOrEarn';

import PostQuery from './components/PostQuery';



import {BrowserRouter as Router,Route,Link,NavLink,Routes,Navigate, BrowserRouter} from "react-router-dom";
import React , {useState} from 'react' 


function App() {
  return (
    <div>
        <>
          <BrowserRouter>

          <Link to="/"></Link>
          <Link to="/learnOrEarn"></Link>
          <Link to="/login"></Link>
          <Link to="/registerAsStudent"></Link>
          <Link to="/studentdashboard"></Link>
          <Link to="/postquery"></Link>





          <Routes>
          
              <Route path="/" element={<><Header /><Index/><Footer/></>}>

              </Route>
  
          </Routes>


          
          <Routes>
          
              <Route path="/register" element={<><Header /><Register/><Footer/></>}>

              </Route>
  
          </Routes>

          <Routes>
          
              <Route path="/login" element={<><Header /><Login/><Footer/></>}>

              </Route>

          </Routes>
          <Routes>
          
              <Route path="/learnOrEarn" element={<><LearnOrEarnNav /><LearnOrEarn/><Footer/></>}>

              </Route>
  
          </Routes>

          <Routes>
          
              <Route path="/registerAsStudent" element={<><LearnOrEarnNav /><RegisterAsStudent/><Footer/></>}>

              </Route>
  
          </Routes>

          <Routes>
          
              <Route path="/studentdashboard" element={<><StudentDashboardNav /><StudentDashboard/><Footer/></>}>

              </Route>

          </Routes>
          <Routes>
          
              <Route path="/postquery" element={<><StudentDashboardNav /><PostQuery/><Footer/></>}>

              </Route>

          </Routes>
          </BrowserRouter>
        </>
    </div>  
  );
}

export default App;
