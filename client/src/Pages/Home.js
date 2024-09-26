import React, { useEffect, useState } from 'react';
import API from '../utils/axios';
import VehicleCard from '../components/VehicleCard';

import { Grid } from '@mui/material';

function Home() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const { data } = await API.get('/vehicles');
      setVehicles(data);
    };
    fetchVehicles();
  }, []);

  return (
    <Grid container spacing={2}>
      {vehicles.map((vehicle) => (
        <Grid item xs={12} sm={6} md={4} key={vehicle._id}>
          <VehicleCard vehicle={vehicle} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Home;
