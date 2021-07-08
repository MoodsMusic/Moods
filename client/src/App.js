import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from "./Conponents/Nav";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
