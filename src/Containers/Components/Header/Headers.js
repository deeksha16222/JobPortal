import React,{useState,useEffect} from 'react'
import logo from "../../../assets/logo.svg"
import Login from "../../Pages/Login";
import { useProvideAuth } from "../../Pages/Login/api";
import Dropdown from 'react-bootstrap/Dropdown';

export const Headers = () => {
    const [color, setColor] = React.useState('transparent');
    const [modalShow, setModalShow] = React.useState(false);
    const {authUser, logout} = useProvideAuth()
    const listenScrollEvent = (e) => {
        if (window.scrollY < 100) {
       setColor('bg-dark')
        } else {
        setColor('bg-dark')
        }
      }
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
      },[])
      console.log(authUser, "authuser")
    return(
        <header style={{backgroundColor: color}} className={color}>
        <div className="container">
        <div className="d-flex justify-content-between header__wrap" >
            <img src={logo} alt="logo"/>
            <div className="right__header">
                {!authUser ? 
            <button type="button" class=" login-btn" onClick={() => 
                setModalShow(true)
                }>Login</button>
            : 
            <Dropdown>
        <Dropdown.Toggle className="">
         <span className="user__name-header">{authUser?.name?.charAt(0)}</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={logout}>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
            }
            </div>
        </div>
        </div>
        <Login
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </header>
    )
}