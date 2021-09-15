import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ContactUs from "./Pages/Contact-us";



function App() {
  return (


    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Landing />
          </Route>
          {/* <Route path='/services'>
            <Services /> */}
          {/* </Route> */}
          <Route path='/contactus'>
            <ContactUs />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
        </Switch>

      </BrowserRouter>

    </div>

  );
}

export default App;
