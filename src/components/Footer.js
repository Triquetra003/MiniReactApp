import React from "react";

function Footer(){

    let newDate = new Date()
    let year = newDate.getFullYear();

return(
    <footer className="text-white text-center" style={{position:"fixed",width:"100vw",bottom:"0",marginTop:"5vh"}}>
    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
    © {year} 
    <a className="text-white" href="https://github.com/Triquetra003/" style={{marginLeft:"2%"}}>Triquetra003</a>
    </div>
   </footer>
)

}

export default Footer