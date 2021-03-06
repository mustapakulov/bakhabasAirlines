import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { Box, Button, Grid, Pagination, Slider, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { tiketContext } from "../../MyContext/MyContext";
import DisplayCard from "../DisolayCard/DisplayCard";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import "../../Cart/cart.css";

const DisplayList = () => {
  const navigate = useNavigate();
  const { tiket, getTiket, paginatedPages } = useContext(tiketContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchVal, setSearchVal] = React.useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  // pagi
  useEffect(() => {
    getTiket();
  }, [getTiket]);
  useEffect(() => {
    setSearchParams({
      _limit: limit,
      _page: page,
    });
  }, [limit, page]);
  const handlePage = (e, pageVal) => {
    setSearchParams({ _page: pageVal, _limit: limit });
    getTiket();
    setPage(pageVal);
  };
  // search
  React.useEffect(() => {
    setSearchParams({
      q: searchVal,
      _limit: 6,
      _page: 0,
    });
  }, [searchVal]);

  const handleValue = (e) => {
    const search = new URLSearchParams(window.location.search);
    search.set("q", e.target.value);
    setSearchParams({
      q: searchVal,
      _limit: 6,
      _page: 0,
    });
    setSearchVal(e.target.value);
    getTiket();
  };
  // price
  const search = new URLSearchParams(window.location.search);
  const [price, setPrice] = useState(search.get("price_lte") || "");
  const filterPriceTiket = (key, value) => {
    search.set(key, value);
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setPrice(search.get("price_lte") || "");
  };
  const resetFilter = () => {
    navigate("/list");
    setPrice("");
    getTiket();
  };

  return (
    <Box sx={{ flexGrow: 1, margin: 5, marginTop: "90px" }} className="baha">
      <div>
        <TextField
          id="input-with-icon-textfield"
          placeholder="Search"
          value={searchVal}
          onChange={handleValue}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SavedSearchIcon fontSize="large" />
                  {/* <Search fontSize="large"/> */}
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <Grid style={{ width: "100px" }}>
          <Slider
            onChange={(e) => filterPriceTiket("price_lte", e.target.value)}
            valueLabelDisplay="auto"
            max={3000}
            step={10}
          />
        </Grid>
        <Button
          onClick={resetFilter}
          color="success"
          style={{
            width: "100px",
            color: "#F8F8FF",
            backgroundColor: "#708090",
            borderRadius: "4px",
          }}
        >
          ????????????????
        </Button>
      </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {tiket ? (
          tiket.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <DisplayCard item={item} key={index} />
            </Grid>
          ))
        ) : (
          <h1>Loading....</h1>
        )}
      </Grid>
      <Stack
        spacing={2}
        style={{
          alignItems: "center",
        }}
      >
        <Pagination count={paginatedPages} onChange={handlePage} page={+page} />
      </Stack>
    </Box>
  );
};

export default DisplayList;
