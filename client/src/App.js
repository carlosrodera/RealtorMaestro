import React, { useState, useEffect } from 'react';

function App() {
  const [apiStatus, setApiStatus] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Comprobar estado de la API
    fetch('/api/health')
      .then(response => response.json())
      .then(data => {
        setApiStatus(data);
        return fetch('/api/users');
      })
      .then(response => response.json())
      .then(data => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>RealtorMaestro</h1>
        <p>Plataforma para agentes inmobiliarios</p>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2>Estado API</h2>
          {apiStatus ? (
            <div style={styles.statusCard}>
              <p>Estado: <span style={styles.highlight}>{apiStatus.status}</span></p>
              <p>Timestamp: <span style={styles.highlight}>{apiStatus.timestamp}</span></p>
            </div>
          ) : (
            <p>Cargando estado...</p>
          )}
        </section>

        <section style={styles.section}>
          <h2>Usuarios</h2>
          {loading ? (
            <p>Cargando usuarios...</p>
          ) : (
            <div style={styles.usersList}>
              {users.map(user => (
                <div key={user.id} style={styles.userCard}>
                  <h3>{user.name}</h3>
                  <p>Rol: {user.role}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 RealtorMaestro</p>
      </footer>
    </div>
  );
}

// Estilos en línea para simplicidad
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    backgroundColor: '#2C3E50',
    color: '#fff',
    padding: '20px',
    borderRadius: '5px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  section: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  statusCard: {
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '5px',
    marginTop: '10px',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  usersList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '15px',
    marginTop: '15px',
  },
  userCard: {
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
    padding: '10px',
    color: '#666',
  },
};

export default App;
