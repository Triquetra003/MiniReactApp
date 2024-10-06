import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function navbar(){

    return(
        <>
        <nav class="navbar navbar-dark bg-dark navbar-fixed-top homepg-navbar" style={{position:"sticky",top:0}}>
           <div class="container-fluid" className="navbar-links-div">
            <Link to="/" style={{marginLeft:"2vw"}}>Home </Link>
            <Link to="/react-trivia">React-Trivia </Link>
            <Link to="/to-do-list">To-Do-List </Link>
           </div>
       </nav>
        <Footer/>

        <main>
            <Outlet/>
        </main>
        </>
    )
}

export default navbar