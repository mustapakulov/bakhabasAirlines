import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const FooterFot = () => (
  <>
    <AppBar position="static" elevation={0} component="footer" >
      <Toolbar style={{ justifyContent: "center" }}>

        <Typography variant="caption">©2020</Typography>
      </Toolbar>
    </AppBar>
  </>
);

export default FooterFot;
