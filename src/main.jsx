import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyB0AnaoC1ymXUsIy5Scw54QNiQDyaep4zg",
  authDomain: "envirobit--movies.firebaseapp.com",
  projectId: "envirobit--movies",
  storageBucket: "envirobit--movies.appspot.com",
  messagingSenderId: "256433798591",
  appId: "1:256433798591:web:c9f296448b3a30817c750a",
  measurementId: "G-KDBWXJ8Z20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
