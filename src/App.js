import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Communication from './Communication';
import Login from './Login';
import StaffDetails from './StaffDetails';
import StaffHome from './StaffHome';
import StaffLogin from './StaffLogin';
import StudentHome from './StudentHome';
import StudentSignup from './StudentSignup';
import TrainerDetails from './TrainerDetails';

function App() {
  useEffect(()=>{
    var user = localStorage.getItem("userName");
    if(user === ""){
      
    }

  },[]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StaffLogin/>}/>
          <Route path='studentHome' element={<StudentHome/>}/>
          <Route path='staffHome' element={<StaffHome/>}/>
          <Route path='staffDetails' element={<StaffDetails/>}/>
          <Route path='trainerDetails' element={<TrainerDetails/>}/>
          <Route path='studentSignup' element={<StudentSignup/>}/>
          <Route path='/studentLogin' element={<Login/>}/>
          <Route path='communication' element={<Communication/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
