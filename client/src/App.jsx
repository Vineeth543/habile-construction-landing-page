import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import HomeLayout from "./Layouts/Home/Home.Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
