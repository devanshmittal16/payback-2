import React from 'react'
import './Home.css';
import Logo from '../Assets/Payback-2-removebg-preview.png';
import { CgProfile } from "react-icons/cg";
import { FaCalculator } from "react-icons/fa";

const Home = () => {
  return (
    <div className='banner'>
        <div className="navbar">
            <img src={Logo} className='logo' />
            <ul>
                <li><FaCalculator /></li>
                <li><CgProfile/></li>
            </ul>
        </div>
        <div className="content">
            <h1>PAYBACK</h1>
            <p>It is a free website that helps you keep track of shared expenses with <br /> friends and family. 

It's great for splitting bills for trips, rent, or other shared <br />costs. You can easily add expenses, see who owes whom, and even <br />settle up directly through the website.</p>
        </div>
    </div>
  )
}

export default Home