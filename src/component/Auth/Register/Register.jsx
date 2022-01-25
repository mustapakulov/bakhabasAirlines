import React from "react";
import { Link } from "react-router-dom";
import "../css/register.css";

const Register = () => {
  return (
    <div>
      <div className="login">
        <div className="loginContainer">
          <label>Ваша имя:</label>
          <input type="text" autoFocus required />
          <p className="errorMsg">qwert</p>
          <label>Ваш пароль:</label>
          <input type="password" required />
          <div className="btnContainer">
            <Link to="/register">
              <button onClick>Регистрация</button>
            </Link>

            <p>
              Don't have an account?
              <span>Вход в аккаунт</span>
            </p>

            <Link to="/login">
              <button>Вход в аккаунт</button>
            </Link>

            <p>
              Have an account?
              <span>Регистрация</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
