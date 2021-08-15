import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Members from "./Pages/Members";
import Register from "./Pages/Register";
import Footer from "./Components/Footer";

function App() {

  // Add scrolling conditions to add or remove classes to/from nav-bar
  // Classes add or remove background from nav-bar depending if it is at top of page or not
  useEffect(() => {
    const nav = document.querySelector(".nav");

    document.addEventListener('scroll', () => {
      const isScrolled = window.scrollY > 60;
      const isTop = window.scrollY === 0;

      if (isScrolled) {
        nav.classList.remove("nav-not-scrolled")
        nav.classList.add("nav-scrolled");
      } else if (isTop) {
        nav.classList.remove("nav-scrolled");
        nav.classList.add("nav-not-scrolled");
      }
    });

  }, []);

  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />

      <Route exact path="/login" component={Login} />

      <Route exact path="/register" component={Register} />

      <Route exact path="/members" component={Members} />

      <Footer />
    </Router>
  );
}

export default App;
