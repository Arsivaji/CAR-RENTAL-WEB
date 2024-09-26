import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

function VehicleCard({ vehicle }) {
  return (
    <Card>
      <CardMedia component="img" height="140" image={vehicle.image} alt={vehicle.model} />
      <CardContent>
        <Typography variant="h5">{vehicle.brand} {vehicle.model}</Typography>
        <Typography variant="body2">Price per day: ${vehicle.pricePerDay}</Typography>
      </CardContent>
    </Card>
  );
}

export default VehicleCard;
