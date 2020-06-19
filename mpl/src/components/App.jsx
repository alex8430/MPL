import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Layout from "./Layout"
import GameMenu from "./GameMenu"
import {obj} from "./Navbar";




function App(){
    return (
    <div className ="main">
    <Header />
    {obj.flag ? <Layout /> : <GameMenu />}
    
    </div>);
}





export default App;

