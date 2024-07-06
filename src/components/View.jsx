import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const View = () => {
  const [rows, setCards] = useState([]);

  useEffect(() => {
    axios.get(' https://fakestoreapi.com/products')
      .then((res) => {
        if (Array.isArray(res.data)) {
          setCards(res.data);
        } else {
          console.error('Unexpected response format:', res.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box style={{background:'' }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {rows.length > 0 ? (
          rows.map((row) => (
            <Grid item xs={12} sm={6} md={4} key={row.id}>
              <Card style={{background:'darkseagreen', borderRadius:"15px"}} sx={{ minWidth: 275, marginBottom: 2 }}>
                 <CardMedia
                  component="img"
                  height="600"
                  image={row.image}
                  alt={row.title}
                /> 

                <CardContent>
                  
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Title: {row.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    price: {row.price}
                  </Typography>
                 
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Category: {row.category}
                  </Typography>
                  <Typography variant="body2">
                    image: {row.image}
                    
                  </Typography>
                </CardContent>
                
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              No products available
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default View;