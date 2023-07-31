import { useState } from "react";
import { login } from "../features/account/accountSlice";
import { useDispatch } from "react-redux";
import db from "../db";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const [userEmail, setUserEmail] = useState("ivan@gmail.com");
  const [userPassword, setUserPassword] = useState("123");
  const [showWrongUser, setShowWrongUser] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const isUserExist = db.usersDb.find((el) => el.email === userEmail);
    if (isUserExist) {
      if (isUserExist.password === userPassword) {
        dispatch(login(isUserExist));
        navigate("/favourites");
      }
      setShowWrongUser(true);
    } else {
      setShowWrongUser(false);
    }
  };

  return (
    <div className="columns">
      <form className="userForm" onSubmit={handleSubmit}>
        <h2 className="title">Secure Sign In</h2>
        <p className="desription">For current customers</p>

        <div className="error">Invalid email address or password.</div>

        <label>
          <input
            type="email"
            placeholder="Email Address"
            data-name="email"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
            required
          />
        </label>
        {!showWrongUser && (
          <div style={{ color: "red", marginBottom: "15px" }}>
            WRONG USER EMAIL!!!
          </div>
        )}

        <label>
          <input
            type="password"
            autoComplete="off"
            placeholder="Password"
            data-name="password"
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
            required
          />
        </label>

        <button className="btn">Sign in</button>
      </form>

      {/* <form id="RegistrationForm" className="userForm">
        <h2 className="title">Quick Registration</h2>
        <p className="desription">For new customers</p>

        <div className="error">Invalid email address or password.</div>

        <label>
          <input
            type="text"
            placeholder="Full name"
            data-name="name"
            value="Ivan"
            required
          />
        </label>

        <label>
          <input
            type="email"
            placeholder="Email Address"
            data-name="email"
            value="ivan@gmail.com"
            required
          />
        </label>

        <label>
          <input
            type="password"
            placeholder="Password"
            data-name="password"
            value="123"
            required
          />
        </label>

        <label>
          <input
            type="password"
            placeholder="Verify Password"
            data-name="passwordVerify"
            value="123"
            required
          />
        </label>

        <button className="btn">Create Account</button>
      </form> */}
    </div>
  );
}
