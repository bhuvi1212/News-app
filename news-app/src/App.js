import "./App.css";
import Homepage from "./Homepage";
<<<<<<< Updated upstream
import Login from "./login";
=======
import Login from "./login"; 
import Landing from "./Landing";
>>>>>>> Stashed changes
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./signup";
function App() {
  return (
    <div> 
	  <nav>
      <Link to="/" className="nav-item"id="logo"><h3>News-App</h3></Link>
      <Link to ="/signup" className="nav-item"id="signup"><h3>Signup</h3></Link>
      <Link to="/Login" className="nav-item"id="login"><h3>Login</h3></Link>
      
	  </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
    


<<<<<<< Updated upstream
    
  );
=======
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/signin" element={<signin />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/landing" element={<Landing props={{loggedIn, username}}/>}></Route>
    </Routes>
  </div>);
>>>>>>> Stashed changes
};

export default App;
