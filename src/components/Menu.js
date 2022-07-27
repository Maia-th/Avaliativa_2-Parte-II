import React from "react";
import './Stylemenu.css'; 
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <>
    <header className="menu">
    <nav>
            <ul>
                <li><Link to="/Home"> Home </Link></li>
                <li><Link to="/Sobre"> Sobre </Link></li>
            </ul>
        </nav>
    </header>
    </>
);
  
}