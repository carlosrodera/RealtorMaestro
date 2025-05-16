import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Box, CircularProgress, Alert } from '@mui/material';

function Dashboard() {
  const [apiStatus, setApiStatus] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Comprobar estado de la API
    fetch('/api/health')
      .then(response => {
        if (!response.ok) throw new Error('Error al conectar con API');
        return response.json();
      })
      .then(data => {
        setApiStatus(data);
        return fetch('/api/users');
      })
      .then(response => {
        if (!response.ok) throw new Error('Error al obtener usuarios');
        return response.json();
      })
      .then(data => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>Estado API</Typography>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                <CircularProgress />
              </Box>
            ) : apiStatus ? (
              <Box sx={{ my: 2 }}>
                <Typography variant="body1">
                  Estado: <strong>{apiStatus.status}</strong>
                </Typography>
                <Typography variant="body1">
                  Timestamp: <strong>{apiStatus.timestamp}</strong>
                </Typography>
              </Box>
            ) : (
              <Alert severity="warning">No se pudo obtener el estado de la API</Alert>
            )}
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Usuarios del Sistema</Typography>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                <CircularProgress />
              </Box>
            ) : users.length > 0 ? (
              <Box>
                {users.map(user => (
                  <Paper key={user.id} sx={{ p: 2, mb: 2, bgcolor: 'background.default' }}>
                    <Typography variant="subtitle1">{user.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{user.role}</Typography>
                  </Paper>
                ))}
              </Box>
            ) : (
              <Alert severity="info">No hay usuarios disponibles</Alert>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
