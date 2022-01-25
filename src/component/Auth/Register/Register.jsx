import * as React from "react";
import { Link } from "react-router-dom";
import "../css/register.css";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { tiketContext } from "../../MyContext/MyContext";
import { ThemeProvider } from "@emotion/react";
import { Avatar, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// const theme = createTheme();

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



    //         <p>
    //           Don't have an account?
    //           <span>Вход в аккаунт</span>
    //         </p>

    //         <Link to="/register">
    //           <button type="submit" >Вход в аккаунт</button>
    //         </Link>

    //         <p>
    //           Have an account?
    //           <span>Регистрация</span>
    //         </p>
    //       </div>
    //     </div>
    //   </div>

  
  <Container>
  <CssBaseline />
  <div className="login">
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <LockOutlinedIcon />
    </Avatar>
  <div className="loginContainer">

    <Typography component="h1" variant="h5">
      Sign up
    </Typography>
    <Box component="form" noValidate onSubmit={handleSubmit} >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            // label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            // label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
      </Grid>
      <button
        type="submit"
      >
        Sign Up
      </button>
      <Grid container justifyContent="flex-end">
      </Grid>
    </Box>
  </div>
  </div>
</Container>

            <p>
              Don't have an account?
              <span>Вход в аккаунт qweqweqwe</span>
            </p>



  );
}