import React from 'react';
import { Typography, Paper, Grid, Box } from '@mui/material';

function Clients() {
  // Datos de ejemplo
  const clients = [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      phone: '+34 612 345 678',
      preferences: 'Apartamentos en Madrid centro',
      budget: '200.000€ - 300.000€',
    },
    {
      id: 2,
      name: 'María López',
      email: 'maria.lopez@example.com',
      phone: '+34 623 456 789',
      preferences: 'Casas con jardín en las afueras',
      budget: '350.000€ - 500.000€',
    },
    {
      id: 3,
      name: 'Antonio García',
      email: 'antonio.garcia@example.com',
      phone: '+34 634 567 890',
      preferences: 'Áticos con terraza, zona playa',
      budget: '250.000€ - 400.000€',
    },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Clientes
      </Typography>
      <Grid container spacing={3}>
        {clients.map((client) => (
          <Grid item xs={12} md={6} key={client.id}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                {client.name}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2">
                  <strong>Email:</strong> {client.email}
                </Typography>
                <Typography variant="body2">
                  <strong>Teléfono:</strong> {client.phone}
                </Typography>
              </Box>
              <Typography variant="body1" gutterBottom>
                <strong>Preferencias:</strong>
              </Typography>
              <Typography variant="body2" paragraph>
                {client.preferences}
              </Typography>
              <Typography variant="body2">
                <strong>Presupuesto:</strong> {client.budget}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Clients;
