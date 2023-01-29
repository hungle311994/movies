import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Account = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState(true);
  const [accountActive, setAccountActive] = useState("Login");
  const [showPassLogin, setShowPassLogin] = useState(false);
  const [showPassSignup, setShowPassSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { googleLogin, user } = useContext(AuthContext);

  const handleLoginTab = (value) => {
    setAccount(true);
    setAccountActive(value);
  };
  const handleSignupTab = (value) => {
    setAccount(false);
    setAccountActive(value);
  };
  const handleLogin = () => {
    toast.success("Login success !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const handleSignup = () => {
    toast.success("Create new account success !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user, navigate]);

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
              className={`account-content-loginBtn ${
                accountActive === "Login" ? "accountActive" : ""
              }`}
              onClick={() => handleLoginTab("Login")}
            >
              Login
            </button>

            <button
              className={`account-content-signupBtn ${
                accountActive === "Signup" ? "accountActive" : ""
              }`}
              onClick={() => handleSignupTab("Signup")}
            >
              Sign up
            </button>
          </div>

          <div className="account-content-detail">
            {account ? (
              <div className="account-content-login">
                <div className="account-content-login-item">
                  <label className="account-content-title">Email</label>
                  <input
                    className="account-content-input"
                    type="email"
                    placeholder="example@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="account-content-login-item">
                  <label className="account-content-title">Password</label>
                  <input
                    className="account-content-input"
                    type={showPassLogin ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                <ToastContainer />

                <button
                  className="account-content-google"
                  onClick={handleGoogleLogin}
                >
                  <FcGoogle />
                  <span>Login with Google</span>
                </button>
              </div>
            ) : (
              <div className="account-content-signup">
                <div className="account-content-signup-item">
                  <label className="account-content-title">Name</label>
                  <input
                    className="account-content-input"
                    type="text"
                    placeholder="James Bond"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="account-content-signup-item">
                  <label className="account-content-title">Email</label>
                  <input
                    className="account-content-input"
                    type="email"
                    placeholder="example@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="account-content-signup-item">
                  <label className="account-content-title">Password</label>
                  <input
                    className="account-content-input"
                    type={showPassSignup ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                <ToastContainer />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
