import React from 'react';
import { Typography, Paper, Grid, Box } from '@mui/material';

function Properties() {
  // Datos de ejemplo
  const properties = [
    {
      id: 1,
      title: 'Apartamento Moderno',
      address: 'Calle Principal 123, Madrid',
      price: '250.000€',
      type: 'Apartamento',
      area: '85 m²',
      bedrooms: 2,
      bathrooms: 1,
    },
    {
      id: 2,
      title: 'Casa con Jardín',
      address: 'Avenida del Parque 45, Barcelona',
      price: '450.000€',
      type: 'Casa',
      area: '150 m²',
      bedrooms: 4,
      bathrooms: 2,
    },
    {
      id: 3,
      title: 'Ático de Lujo',
      address: 'Plaza Mayor 8, Valencia',
      price: '320.000€',
      type: 'Ático',
      area: '100 m²',
      bedrooms: 3,
      bathrooms: 2,
    },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Propiedades
      </Typography>
      <Grid container spacing={3}>
        {properties.map((property) => (
          <Grid item xs={12} md={6} lg={4} key={property.id}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                {property.title}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  {property.address}
                </Typography>
              </Box>
              <Typography variant="h6" color="primary" gutterBottom>
                {property.price}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    <strong>Tipo:</strong> {property.type}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    <strong>Área:</strong> {property.area}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    <strong>Habitaciones:</strong> {property.bedrooms}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    <strong>Baños:</strong> {property.bathrooms}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Properties;
