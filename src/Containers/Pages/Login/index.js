import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useProvideAuth } from "./api.js";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { userLogin, error, isLoading } = useProvideAuth();
  const [validated, setValidated] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      userLogin(values);
     

    }
  }
  console.log(!error, "error")
  return (
    <>
      <div>
        <div className="bg-dark background__wrap"></div>
        <div className="login-blk">
          <div className="login-wrap">
            <p className="title">Login</p>
            <div className="input-wrap">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                    required
                    className={!error ? "" : "invalid-input"}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom02">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                    className={!error ? "" : "invalid-input"}

                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter password
                  </Form.Control.Feedback>
                  {error?.response?.status === 401 ? (
                    <p className="text-error">Incorrect email or password</p>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <br />
                <div className="text-center">
                  <button type="submit" disabled={isLoading} className="primary-btn">
                    Login
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>      
      </div>
    </>
  );
}
