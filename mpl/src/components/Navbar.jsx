import React from "react";

function Navbar(){
    return (
<header className="header-section">
  <div className = "logo-menu">
      <a href="/" className = "header-logo mpl-logo"><img src="https://www.mpl.live/static/MPL_Logo.png" alt="MPL Logo" class="mpl-logo"></img></a>
    <div className = "logo-menu menu-icon">
    <a href="#app-download"> </a>
      <div className="bar1"></div>
        <div className="bar2"></div>
          <div className="bar2"></div> 
      <div className = "logo-menu hide">
        <nav>
          <div><a href ="#fantasy">Play Fantasy</a><div id="shade" class="header-logo mobile"></div></div>
          <div class="header-logo"><a href="/bubble-shooter" class="header-logo">Bubble Shooter</a></div>
          <div class="header-logo"><a href="/fantasy-cricket" class="header-logo">Fantasy Cricket</a></div>
          <div class="header-logo"><a href="/fantasy-football/" class="header-logo">Fantasy Football</a></div>
          <div class="header-logo"><a href="/fantasy-football/" class="header-logo">Rumy</a></div>
          <div class="header-logo"><a href="/fantasy-football/" class="header-logo">Ludo</a></div>
          <div class="header-logo"><a href="/fantasy-football/" class="header-logo">Fruit Slice</a></div>
          <div class="header-logo"><a href="/fantasy-football/" class="header-logo">Fruit Chop</a></div>
          <div class="header-logo"><a href="/fantasy-football/" class="header-logo">More Games</a></div>
        </nav>
      </div>
    </div>
  </div>
</header>
    );
}

export default Navbar;

