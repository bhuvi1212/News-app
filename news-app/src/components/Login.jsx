import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      {/*Creating a welcome page*/}
      <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" >News-App</a>
    </div>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="Auth.js"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
      </div>
    </nav>
      <h1 id="welcome">Welcome</h1>
    </div>
  );
}

export default App;
