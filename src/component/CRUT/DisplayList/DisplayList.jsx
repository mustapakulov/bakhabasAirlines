import { LocationSearchingSharp, Search } from "@material-ui/icons";
import { Box, Grid, Pagination, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { tiketContext } from "../../MyContext/MyContext";
import DisplayCard from "../DisolayCard/DisplayCard";

const DisplayList = () => {
  const { tiket, getTiket, paginatedPages } = useContext(tiketContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchParamss, setSearchParamss] = useSearchParams();
  const [limit, setLimit] = useState(6);
  const [searchVal, setSearchVal] = useState(searchParamss.get('q') ? searchParamss.get('q') : '')
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  useEffect(() => {
    getTiket();
  }, []);

  useEffect(() => {
    setSearchParams({
      _limit: limit,
      _page: page,
    });
  }, [limit, page]);

    useEffect(()=> {
       getTiket()
    },[])
    useEffect(()=> {
        setSearchParams({
            '_limit': limit,
            '_page': page
        })
    },[limit, page])

    // search
    useEffect(()=> {
      setSearchParamss({
        'q': searchVal,
        '_limit': 6,
        '_page': 1
      })
    }, [searchVal])

    const handleValue = (e) => {
      const search = URLSearchParams(window.location.search)
      search.set('q', e.target.value)
      setSearchParamss({
        'q': searchVal,
        '_limit': 6,
        '_page': 1
      })
      setSearchVal(e.target.value)
      getTiket()
    }


  const handlePage = (e, pageVal) => {
    setSearchParams({ _page: pageVal, _limit: limit });
    getTiket();
    setPage(pageVal);
  };

  return (
    <Box sx={{ flexGrow: 1, margin: 5 }}>
      <div>
        <input type="text" 
        value={searchVal}
        onChange={handleValue}
        />
      </div>
      <Search>
      </Search>
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
      <Stack spacing={2}>
        <Pagination count={paginatedPages} onChange={handlePage} page={+page} />
      </Stack>
    </Box>
  );
};

export default DisplayList;
