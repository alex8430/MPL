import React from "react";

function Navbar(){
    return (
<header className="header-section">
  <div className = "logo-menu">
      <a href="/" className = "header-logo mpl-logo"><img src="https://www.mpl.live/static/MPL_Logo.png" alt="MPL Logo" className="mpl-logo"></img></a>
    <div className = "logo-menu menu-icon">
    <a href="#app-download"> </a>
      <div className="bar1"></div>
        <div className="bar2"></div>
          <div className="bar3"></div> 
      <div className = "logo-menu hide">
        <nav>
          <div><a href ="#fantasy">Play Fantasy</a><div id="shade" className="header-logo mobile"></div></div>
          <div className="header-logo"><a href="/bubble-shooter" className="header-logo">Bubble Shooter</a></div>
          <div className="header-logo"><a href="/fantasy-cricket" className="header-logo">Fantasy Cricket</a></div>
          <div className="header-logo"><a href="/fantasy-football/" className="header-logo">Fantasy Football</a></div>
          <div className="header-logo"><a href="/fantasy-football/" className="header-logo">Rumy</a></div>
          <div className="header-logo"><a href="/fantasy-football/" className="header-logo">Ludo</a></div>
          <div className="header-logo"><a href="/fantasy-football/" className="header-logo">Fruit Slice</a></div>
          <div className="header-logo"><a href="/fantasy-football/" className="header-logo">Fruit Chop</a></div>
          <div className="header-logo"><a href="/fantasy-football/" className="header-logo">More Games</a></div>
        </nav>
      </div>
    </div>
  </div>
</header>
    );
}

export default Navbar;

