module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  const users = [
    { id: 1, name: 'Ana García', role: 'Agente Senior' },
    { id: 2, name: 'Carlos Rodríguez', role: 'Agente Junior' },
    { id: 3, name: 'Elena López', role: 'Administrador' }
  ];

  res.json({ users });
};