
// importing components from react-router-dom package
import {BrowserRouter as Router,Routes ,Route,Redirect,
} from "react-router-dom";

// import Home component
import Home from "./components/Home";
function App() {
return (
	<>
	{/* This is the alias of BrowserRouter i.e. Router */}
	<Router>
		<Switch>
		{/* This route is for home component
		with exact path "/", in component props
		we passes the imported component*/}
		<Route path="/" element={<Home></Home>} />
			
		<Redirect to="/" />
		</Switch>
	</Router>
	</>
);
}

export default App;
