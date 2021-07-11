import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Footer from "./Conponents/Footer";
import Nav from "./Conponents/Nav";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />

      <Route exact path="/login" component={Login} />

      <Footer />
    </Router>
  );
}

export default App;
