import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // ✅ Reusing Login styles
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

function Register() {
  const [name, setName] = useState(""); // ✅ Added Name Field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ Function to Handle Registration API Request
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
      });

      alert("Registration successful. Please login.");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed.");
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
              <h4 className="mt-1 mb-5 pb-1">Join The Lotus Team</h4>
            </div>

            <p>Create an account</p>

            <form onSubmit={handleRegister}>
              <MDBInput
                wrapperClass="mb-4"
                label="Full Name"
                id="form1"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                labelClass="text-white"
                style={{ color: "black" }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form2"
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
                id="form3"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                labelClass="text-white"
                style={{ color: "black" }}
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn type="submit" className="mb-4 w-100 gradient-custom-2">
                  Register
                </MDBBtn>
              </div>
            </form>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Already have an account?</p>
              <MDBBtn outline className="mx-2" color="danger" onClick={() => navigate("/login")}>
                Login
              </MDBBtn>
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">Join our community</h4>
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

export default Register;
