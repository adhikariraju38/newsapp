// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar/>
          <Routes>
          <Route
              exact
              path=""
              element={
                <News key="general" pageSize={12} category="general" />
              }
            />

            <Route
              exact
              path="business"
              element={
                <News key="business" pageSize={12} category="business" />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={12}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={<News key="general" pageSize={12} category="general" />}
            />
            <Route
              exact
              path="/sports"
              element={<News key="sports" pageSize={12} category="sports" />}
            />
            <Route
              exact
              path="/science"
              element={<News key="science" pageSize={12} category="science" />}
            />
          </Routes>

        </Router>
      </div>
    </>
    
  );
  
}



