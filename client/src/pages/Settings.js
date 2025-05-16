import React from 'react';
import { Typography, Paper, Divider, Switch, FormControlLabel, Box } from '@mui/material';

function Settings() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Configuración
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Ajustes de la cuenta
        </Typography>
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ mb: 2 }}>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Notificaciones por email"
          />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Notificaciones del sistema"
          />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <FormControlLabel
            control={<Switch />}
            label="Modo oscuro"
          />
        </Box>
      </Paper>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Información de la API
        </Typography>
        <Divider sx={{ my: 2 }} />
        
        <Typography variant="body1" gutterBottom>
          Endpoints disponibles:
        </Typography>
        
        <Box sx={{ ml: 2, my: 2 }}>
          <Typography variant="body2" component="div" sx={{ fontFamily: 'monospace', mb: 1 }}>
            GET /api/health - Estado del servidor
          </Typography>
          
          <Typography variant="body2" component="div" sx={{ fontFamily: 'monospace', mb: 1 }}>
            GET /api/users - Lista de usuarios
          </Typography>
        </Box>
      </Paper>
    </div>
  );
}

export default Settings;
