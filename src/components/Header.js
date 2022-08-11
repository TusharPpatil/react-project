import React from "react";
//  import "./header.css"
  import { NavLink } from "react-router-dom";
   import "./Header.css"
 const Header=()=>
 {
    return(   
        <nav className="Headerdemo" >
        <ul>
           <li>
           < NavLink exact='true' activeclassname="active" to="/login">Login</NavLink>
            </li> 
            <li>
            < NavLink exact='true' activeclassname="active" to="/register">Register</NavLink>
            </li>
        </ul></nav>

    
    )
 }
  export default Header;