import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Services from "./Pages/Services";
import ContactUs from "./Pages/Contact-us";
import AddNewUser from "./Pages/AddNewUser";
import { WebcamCapture } from "./Pages/FaceScan";
import ParentForm from "./Pages/ParentForm";
import StudentDisplay from "./Pages/StudentDisplay";
// import Navbar2 from "./Components/Navbar2";


function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Navbar />
        {/* <Navbar2 /> */}
        <Switch>
          <Route path='/' exact>
            <Landing />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/contactus'>
            <ContactUs />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/addnewuser'>
            <AddNewUser />
          </Route>
          <Route path='/face-scan'>
            <WebcamCapture />
          </Route>
          <Route path='/parent-form'>
            <ParentForm />
          </Route>
          <Route path='/student-display'>
            <StudentDisplay />
          </Route>
        </Switch>

      </BrowserRouter>

    </div>

  );
}

export default App;
