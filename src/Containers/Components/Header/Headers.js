import React, { useEffect } from "react"
import logo from "../../../assets/logo.svg"
import Login from "../../Pages/Login";

export const Headers = () => {
    const [color, setColor] = React.useState('transparent');
    const [modalShow, setModalShow] = React.useState(false);
    const listenScrollEvent = (e) => {
        if (window.scrollY < 100) {
       setColor('transparent')
        } else {
        setColor('white')
        }
      }
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
      },[])
    return(
        <header style={{backgroundColor: color}} className={color}>
        <div className="container">
        <div className="d-flex justify-content-between header__wrap" >
            <img src={logo} alt="logo"/>
            <div className="right__header">
            <button type="button" class=" login-btn" onClick={() => 
                setModalShow(true)
                }>Login</button>
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