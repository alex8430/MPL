import React from "react";
import Input from "./Input";
function Layout(){
    return (
        <section className="banner-large">
        <div className="banner-layout banner-dark">
        <picture>
        <img  src="https://www.mpl.live/static/banners/banner_desktop_mpl_live.png" alt="MPL banner" className=""></img>
        </picture>
        <div  className = "section-layout"> 
            <div className = "row banner-row">
                <div className="image-button-wrapper">
                    <div>
                    <h2 style={{color: "black"}} >Play Games &amp; Win Cash!</h2>
                    <h3>Play Free Fire, Fantasy Sports &amp; more to Win Prizes  Daily</h3>
                    </div>
                    <Input />
                </div>
            </div>
        
        </div>
        </div>
        </section>
    );
}

export default Layout;