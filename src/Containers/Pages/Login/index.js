import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { useProvideAuth } from "./api.js";

export default function Login(props) {

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { userLogin, error,  isLoading } = useProvideAuth();
  const [validated, setValidated] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      userLogin(values);
      setValidated(true);
      if (isLoading) {
        console.log(props.show(), " props.show()");
      } else {
        console.log(props.show(), isLoading, " props.show()");
        if (error?.response?.status !== 401 && !error) {
          e.preventDefault();
          e.stopPropagation();
          props.onHide();
        } else {
          props.show();
        }
      }
    }
  }
  return (
    <>
      {/* <button onClick={handleShow}>open me</button> */}
      <div>
        {/* <Modal show={show} onHide={handleClose}> */}
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="login__modal"
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Email address{" "} */}
            {/* <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />{" "} */}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  
                />
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                  
                />
                <div className="invalid-feedback text-right">
                  Please enter a valid valid password.
                </div>
                {error?.response?.status === 401 ? (
                  <p className="text-error">Incorrect email or password</p>
                ) : (
                  ""
                )}
              </Form.Group>
              <br />
              <div className="text-center">
                <button type="submit" className="primary-btn">
                  Login
                </button>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <br />
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
