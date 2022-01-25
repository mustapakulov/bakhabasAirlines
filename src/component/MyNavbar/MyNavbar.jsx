import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import PersonIcon from "@mui/icons-material/Person";
import FlightIcon from "@mui/icons-material/Flight";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

import logo from "./img/logo.png";
function Navbar(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

Navbar.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

export default function MyNavbar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            <img width="100" src={logo} alt="logo" />
          </Typography>
          <Typography variant="h6" component="div">
            <FlightIcon sx={{ color: "text.secondary" }} />
            <LocalGroceryStoreIcon sx={{ color: "text.secondary" }} />
            <PersonIcon sx={{ color: "text.secondary" }} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}>
          
          {/* {[...new Array(10000)].map(() => `lorem50`).join("\n")} */}
        </Box>
      </Container>
      <Navbar {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Navbar>
    </React.Fragment>
  );
}
