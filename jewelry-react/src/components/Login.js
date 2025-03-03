import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ Function to Handle Login API Request
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );

      alert(response.data.message);
      setUser({ email }); // ✅ Store user data in state
      navigate("/header"); // ✅ Redirect to Header page after login
    } catch (error) {
      alert(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: "185px" }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
            </div>

            <p>Please login to your account</p>

            <form onSubmit={handleLogin}>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                labelClass="text-white"
                style={{ color: "black" }}
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                labelClass="text-white"
                style={{ color: "black" }}
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn type="submit" className="mb-4 w-100 gradient-custom-2">
                  Sign in
                </MDBBtn>
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </div>
            </form>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn
                outline
                className="mx-2"
                color="danger"
                onClick={() => navigate("/register")}
                labelClass="text-white"
                style={{ color: "white" }}
              >
                Register
              </MDBBtn>
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
