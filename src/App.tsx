import React from "react";

import "./App.css";
import { Navbar } from "./components/Lesson no1/Navbar";
import { Page } from "./pages/Pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="md:flex hidden">
          {/* This space is for your additional content, hidden on md and up */}
          <br />
          <br />
          <br />
        </div>

        <div className="overflow-auto">
          <Routes>
            <Route path="/">
              <Route path="/" element={<Page />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
