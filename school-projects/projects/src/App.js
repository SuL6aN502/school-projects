import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import React from 'react'
import MyThoughts from "./MyThoughts";
import Footer from "./components/Footer";
import Login from "./Login";
import Ideas from "./Ideas";
import AboutUs from "./About_us";
import YourIdea from './YourIdea';


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/MyThoughts' element={<MyThoughts/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Ideas' element={<Ideas/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/YourIdea' element={<YourIdea/>}/>
      </Routes>
      <Footer />
    </>
  );
}

