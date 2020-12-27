import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NavigationPage from "./components/NavigationPage";

import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/services" component={NavigationPage} />
          <Route path="/about" component={NavigationPage} />
          <Route path="/blog" component={NavigationPage} />
          <Route path="/contact" component={NavigationPage} />
        </Switch>
      </main>
    </>
  );
}
