import React from "react";

function GameApp(props){
    return (
            <div className="header-logo hide">
                <div  className="header-logo "><a href={props.url} className="header-logo">{props.name}</a></div>
            </div>
    );
}

export default GameApp;
