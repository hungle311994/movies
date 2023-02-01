import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { googleLogin, logIn, signUp } from "../../firebase/firebase";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";

const Account = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState(true);
  const [accountActive, setAccountActive] = useState("Login");
  const [showPassLogin, setShowPassLogin] = useState(false);
  const [showPassSignup, setShowPassSignup] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const currrentUser = useAuth();

  const handleLoginTab = (value) => {
    setAccount(true);
    setAccountActive(value);
  };
  const handleSignupTab = (value) => {
    setAccount(false);
    setAccountActive(value);
  };
  const handleLogin = async () => {
    try {
      await logIn(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      toast.warning("Email or password was wrong !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const handleSignup = async () => {
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      toast.warning("Email already in use !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currrentUser) {
      navigate("/");
    }
  }, [currrentUser, navigate]);

  return (
    <div className="account">
      <div className="account-background">
        <img
          src={require("../../assets/poster-background.png")}
          alt="poster-background"
          className="account-background-image"
        />
      </div>

      <div className="account-content">
        <div className="account-content-wrapper">
          <div className="account-content-heading">
            <button
              className={`account-content-loginTab ${
                accountActive === "Login" ? "accountActive" : ""
              }`}
              onClick={() => handleLoginTab("Login")}
            >
              Login
            </button>
            <ToastContainer />

            <button
              className={`account-content-signupTab ${
                accountActive === "Signup" ? "accountActive" : ""
              }`}
              onClick={() => handleSignupTab("Signup")}
            >
              Sign up
            </button>
            <ToastContainer />
          </div>

          {account ? (
            <div className="account-content-detail">
              <div className="account-content-item">
                <label className="account-content-title">Email</label>
                <input
                  className="account-content-input"
                  type="email"
                  placeholder="example@mail.com"
                  ref={emailRef}
                />
              </div>

              <div className="account-content-item">
                <label className="account-content-title">Password</label>
                <input
                  className="account-content-input"
                  type={showPassLogin ? "text" : "password"}
                  placeholder="at least 6 characters"
                  ref={passwordRef}
                />
                {showPassLogin ? (
                  <AiOutlineEyeInvisible
                    className="account-content-showPass"
                    onClick={() => setShowPassLogin((prev) => !prev)}
                  />
                ) : (
                  <AiOutlineEye
                    className="account-content-showPass"
                    onClick={() => setShowPassLogin((prev) => !prev)}
                  />
                )}
              </div>

              <button className="account-content-btn" onClick={handleLogin}>
                Login
              </button>

              <button
                className="account-content-google"
                onClick={handleGoogleLogin}
              >
                <FcGoogle />
                <span>Login with Google</span>
              </button>
            </div>
          ) : (
            <div className="account-content-detail">
              <div className="account-content-item">
                <label className="account-content-title">Email</label>
                <input
                  className="account-content-input"
                  type="email"
                  placeholder="example@mail.com"
                  ref={emailRef}
                />
              </div>

              <div className="account-content-item">
                <label className="account-content-title">Password</label>
                <input
                  className="account-content-input"
                  type={showPassSignup ? "text" : "password"}
                  placeholder="at least 6 characters"
                  ref={passwordRef}
                />
                {showPassSignup ? (
                  <AiOutlineEyeInvisible
                    className="account-content-showPass"
                    onClick={() => setShowPassSignup((prev) => !prev)}
                  />
                ) : (
                  <AiOutlineEye
                    className="account-content-showPass"
                    onClick={() => setShowPassSignup((prev) => !prev)}
                  />
                )}
              </div>

              <button className="account-content-btn" onClick={handleSignup}>
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
