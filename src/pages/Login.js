import React,{useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

export default function Login(){
    const [values, setValues] = useState({
        email: "",
        pass: ""
    });

    function handleSubmit(e){
        e.preventDefault();
        axios
            .post("https://jobs-api.squareboat.info/api/v1/auth/login", {
                email: values.email,
                password: values.pass,
            })
            .then((res) => {
                localStorage.setItem("token", res.data.token);
            })
            .catch((err) => console.error(err));
    };


    return(
    <>
    <Modal onClick={handleModal}>
    <Modal.Header>Login</Modal.Header>
    <Modal.Body>
    Email address <input type="email" placeholder='Enter your email' onChange={(e) => setValues({ ...values, email: e.target.value })}/>
    Password <input type="password" placeholder='Enter your password' onChange={(e) => setValues({ ...values, pass: e.target.value })}/>
    </Modal.Body>
    <Modal.Footer>
    <button onClick={handleSubmit}>Login</button> 
    </Modal.Footer> 
    </Modal>
    </>
    )
}