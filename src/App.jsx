import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PatientData from './hooks/PatientData';

function App() {
  const [token, setToken] = useState(null);
  const { data, error } = PatientData(token);

  if (!token) {
    return <Login onLogin={setToken} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <Dashboard data={data} />;
}

export default App;
