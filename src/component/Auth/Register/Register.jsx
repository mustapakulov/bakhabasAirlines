import * as React from "react";
import { Link } from "react-router-dom";
import "../css/register.css";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { tiketContext } from "../../MyContext/MyContext";

const theme = createTheme();

export default function Register() {
  const { signUp } = React.useContext(tiketContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    handleSignUp(data.get("email"), data.get("password"));
    navigate("/");
  };

  async function handleSignUp(email, password) {
    try {
      await signUp(email, password);
    } catch (error) {
      console.log(error);
    }
  }

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
              <span>Вход в аккаунт qweqweqwe</span>
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
}
