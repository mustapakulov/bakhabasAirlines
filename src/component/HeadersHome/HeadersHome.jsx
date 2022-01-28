import * as React from "react";
import {
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import "../HeadersHome/HeadersHome.css";
import "../Cart/cart.css";
import video from "./vide/vid-1 (2).mp4";
const HeadersHome = () => {
  return (
    <div className="wrapper">
      <video src={video} autoPlay loop muted></video>
      <TextField
        id="input-with-icon-textfield"
        placeholder="Поиск"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SavedSearchIcon fontSize="large" />
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </div>
  );
};

export default HeadersHome;
