import React,{useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
export default function Login(){
const[email,setEmail] = useState();
const[password,setPassword] = useState();

function Login(){
    const history = useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        history.push("/add")
    },[])
}
async function login(){
    let item={email,password}
    let result=await fetch('https://jobs-api.squareboat.info/api/v1/auth/login',{
        method : 'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem('user-info',JSON.stringify(result));
    history.push("/add");
}

    return(
    <>
    <Modal onClick={handleModal}>
    <Modal.Header>Login</Modal.Header>
    <Modal.Body>
    Email address <input type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/>
    Password <input type="password" placeholder='Enter your password' onChange={(e)=>setEmail(e.target.value)}/>
    </Modal.Body>
    <Modal.Footer>
    <button onClick={login}>Login</button> 
    </Modal.Footer> 
    </Modal>
    </>
    )
}