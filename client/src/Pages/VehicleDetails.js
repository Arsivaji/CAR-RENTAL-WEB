import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../utils/axios';
import { Container, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';

function VehicleDetails() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      const { data } = await API.get(`/vehicles/${id}`);
      setVehicle(data);
    };
    fetchVehicle();
  }, [id]);

  if (!vehicle) return <div>Loading...</div>;

  return (
    <Container>
      <Card>
        <CardMedia component="img" height="400" image={vehicle.image} alt={vehicle.model} />
        <CardContent>
          <Typography variant="h4">{vehicle.brand} {vehicle.model}</Typography>
          <Typography variant="body1">{vehicle.description}</Typography>
          <Typography variant="h6">Price per day: ${vehicle.pricePerDay}</Typography>
          <Button variant="contained" color="primary">Reserve Now</Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default VehicleDetails;
