// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import Login from './Pages/login/Login.jsx';
import Register from './Pages/register/Register.jsx'



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />     
        <Route path="/Register" element={<Register/>}  />     
        <Route path="/Login" element={<Login/>} />         
        {/* <Route element={<PrivateRoutes/>} >
          <Route path="/Home/Admin" element={<Admin />} />  
        </Route>  */}
        {/* <Route element={<TravelAgencies/>}>
          <Route path="/Home/Doctor" element={<Doctor/>} />  
        </Route>    */}
        {/* <Route path="/Home/User" element={<User/>} />      */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
