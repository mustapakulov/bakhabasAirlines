import { Box, Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { tiketContext } from '../../MyContext/MyContext';
import DisplayCard from '../DisolayCard/DisplayCard';

const  DisplayList = () => {
    const { tiket, getTiket } = useContext(tiketContext)
   
    useEffect(()=> {
       getTiket()
    },[])

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
        </Box>
      );
};

export default DisplayList