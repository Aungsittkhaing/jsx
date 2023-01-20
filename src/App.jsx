import './App.css';
import React from 'react'
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import "./App.css";
// import style from "./App.module.css";
import Main from './components/Main';

const App = () => {
  const data = ["aung","sitt","khaing","po","po"];
  return (
    <div className="container">
      <Nav/>
      <div className="midContainer">
      <SideBar/>
      <Main name={data[0]} age = {21}/>
      <Main name={data[1]} age = {21}/>
      <Main name={data[2]} age = {21}/>

      </div>
      <Footer/>
    </div>
    
  )
}

export default App
