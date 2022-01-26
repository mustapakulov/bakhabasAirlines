import { Box, Grid, Pagination, Paper, Stack} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { tiketContext } from '../../MyContext/MyContext';
import DisplayCard from '../DisolayCard/DisplayCard';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const  DisplayList = () => {
    const { tiket, getTiket, paginatedPages } = useContext(tiketContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const [limit, setLimit] = useState(6)
    const [page, setPage] = useState(searchParams.get('_page') ? searchParams.get('_page') : 1 )

    useEffect(()=> {
       getTiket()
    },[])
console.log('hrllp0');
    useEffect(()=> {
        setSearchParams({
            '_limit': limit,
            '_page': page
        })
    },[limit, page])

    const  handlePage =  (e, pageVal) => {
        setSearchParams({'_page': pageVal, '_limit': limit})
        getTiket()
        setPage(pageVal)
    }
    return (
        <Box sx={{ flexGrow: 1, margin: 5}}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           {
               tiket ? (
                tiket.map((item, index) => (
                       <Grid item xs={2} sm={4} md={4} 
                       key={index}  >
                           <DisplayCard item={item} key={index} />
                       </Grid>
                   ))
               ) : (<h1>Loading....</h1>)
           }
          </Grid>
          <Stack spacing={2}>
              <Pagination count={paginatedPages}
              onChange={handlePage}
              page={page} />
          </Stack>
        </Box>
      );
};

export default DisplayList