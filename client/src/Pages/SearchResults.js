import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../utils/axios';
import VehicleCard from '../components/VehicleCard';
import { Grid } from '@mui/material';

function SearchResults() {
  const location = useLocation();
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const searchVehicles = async () => {
      const query = new URLSearchParams(location.search);
      const searchTerm = query.get('q');
      const { data } = await API.get(`/vehicles?search=${searchTerm}`);
      setVehicles(data);
    };
    searchVehicles();
  }, [location]);

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

export default SearchResults;
