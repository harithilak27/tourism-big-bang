// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Pages/Home';
import Userregister from './Components/UserRegister/Userregister';
import Login from './Components/Login/Login';
import AdminIndex from './Components/AdminPage/AdminIndex';
import Agentregister from './Components/AgentRegister/Agentregister';
import FeedbackForm from './Components/Pages/FeedbackForm';
import agentmainpage from './Components/AgentPages/AgentMain';
import DisplayHotel from './Components/AgentPages/DisplayHotel';
import AllPlaes from './Components/AgentPages/AllPlaes';
import Allspots from './Components/AgentPages/Allspots';
import PackageDetails from './Components/AgentPages/PackageDetails';
import ManagePackage from './Components/Pages/ManagePackage';
import UserBooking from './Components/Booking/UserBooking';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/register' Component={Userregister} />
        <Route path='/adminpage' Component={AdminIndex}/>
        <Route path='/agentregister' Component={Agentregister}/>
        <Route path='/feedback' Component={FeedbackForm}/>
        <Route path='/agentmainpage' Component={agentmainpage}/>
        <Route path= '/addhotels' Component={DisplayHotel}/>
        <Route path='/agentaddplaces' Component={AllPlaes}/>
        <Route path='/viewallspots' Component={Allspots}/>
        <Route path='/packagedetails' Component={PackageDetails}/>
        <Route path='/getallpacks' Component={ManagePackage}/>
        <Route path='/userbooking' Component={UserBooking}/>
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
