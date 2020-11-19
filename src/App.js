import React from 'react';
import logo from './logo.svg';
import Fullname from './Component/Profile/FullName.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Address from "./Component/Profile/Address.js";
import Profile from "./Component/Profile/ProfilPhoto.js";
import Content from "./Component/Profile/Content.js";

function App() {
  return (
    <>
    <div className="container container1">
          <div className="row">
            <div className="col-1">
            <Profile />
            </div>
            <div className="col -5">
            <Fullname />
            </div>
            
          </div>



    </div>
      <div className="container container2">
        
      <div className="row">
        <div className="col-2"></div>
        <div className="col-6">
            <Address />
            </div>
            </div>

      </div>

    <div className="container container3">
      <div className="row">
        <div className="row-8">
    <Content/>
    </div>
    </div>
    </div>  

    </>

      );
}

export default App;
