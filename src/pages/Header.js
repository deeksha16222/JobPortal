import React from 'react';

import MyJobs from '../screenshot/MyJobs.png';
import '../style/Header.css';
export default function Header(){
    return(
    <>
    <div>
    <img src={MyJobs} className="App-logo" alt="logo" />
    <button className='primary btn'> Login </button>
    </div>
    </>
  )
 }