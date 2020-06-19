import React from "react";
import games from "../GameApps.js";
import GameApps from "./GameApps.jsx";

var obj = {flag:false};

function change(){
  if(obj.flag){
    obj.flag = false;
  }else{
    obj.flag = true;
  }
  
  var bar2 = document.getElementsByClassName("bar2")[0];
  document.getElementsByClassName("bar1")[0].classList.toggle("change-bar1");
  document.getElementsByClassName("bar3")[0].classList.toggle("change-bar3");
  if(bar2.style.visibility == "hidden"){
    bar2.style.visibility = "visible";
  }else{
    bar2.style.visibility = "hidden";
  }
}


function Navbar(){
    return (
<header className="header-section">
  <div className = "logo-menu">
      <a  href="/" className = "header-logo mpl-logo"><img src="https://www.mpl.live/static/MPL_Logo.png" alt="MPL Logo" className="mpl-logo"></img></a>
    <div className = "logo-menu menu-icon change">
    <a onClick= {change}  id ="nav-icon" href="#app-download"> 
      <div className="bar1"></div>
        <div className="bar2"></div>
          <div className="bar3"></div>
          </a>
      <div className = "game-app">
      <div className = "game-app-sub">
        <nav className= "apps">
            {games.map(x => <GameApps key = {x.key} url = {x.url} name = {x.name} />)}
        </nav>
      </div>
      </div>
    </div>
  </div>
</header>
    );
}

console.log(obj.flag);


export {Navbar,obj};

