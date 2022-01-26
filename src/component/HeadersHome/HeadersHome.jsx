import {
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { blue } from "@mui/material/colors";
import "../HeadersHome/HeadersHome.css";

const color = blue[50];
const HeadersHome = () => {
  return (
    <Container>
      <CssBaseline />
      <div className="login">
        <div className="loginContainers">
          <Typography component="h1" variant="h5" color={color}>
            Поиск
          </Typography>
          <Box component="form" noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <p className="errorMsg">от куда</p>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  sx={{ borderRadius: "50%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <p className="errorMsg">куда:</p>
                <TextField
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <div className="btnContainer">
              <>
                <button type="submit">Поиск</button>
              </>
            </div>
          </Box>
        </div>
      </div>
    </Container>
  );
};

export default HeadersHome;
