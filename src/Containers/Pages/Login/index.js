import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useProvideAuth } from "./api.js";

export default function Login(props) {
  console.log(props, "props");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const { userLogin } = useProvideAuth();

  function handleSubmit(e) {
    e.preventDefault();
    props.onHide();
    userLogin(values);
    /* axios
            .post("https://jobs-api.squareboat.info/api/v1/auth/login", {
                email: values.email,
                password: values.pass,
            })
            .then((res) => {
                localStorage.setItem("token", res.data.token);
            })
            .catch((err) => console.error(err)); */
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
            <Form validated={true} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <br/>
              <div className="text-center">

              <button type="submit" className="primary-btn">
                Login
              </button>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <br/>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
