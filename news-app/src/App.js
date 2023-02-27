import "./App.css";
import Homepage from "./Homepage";
import Login from "./login";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div> 
	  <nav>
      <Link to="/" className="nav-item"id="logo"><h3>News-App</h3></Link>
      <Link to="/Login" className="nav-item"id="login"><h3>Login</h3></Link>
    
	  </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
    


    
  );
};

export default App;
