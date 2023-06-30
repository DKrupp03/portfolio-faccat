'use client';
import { Home, Skills, Projects, NavBar, Carousel } from './src/components/Components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import './src/styles/Globals.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [accessCount, setAccessCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetch('/api/accessCounter')
      .then((response) => response.json())
      .then((data) => {
        setAccessCount(data.accessCount);
        setShowAlert(true);
      })
      .catch((error) => console.error('Erro ao obter o número de acessos:', error));
  }, []);

  return (
    <main>
      <NavBar></NavBar>
      <Home></Home>
      <Carousel></Carousel>
      <Skills></Skills>
      <div className='separator'></div>
      <Projects></Projects>

      <Snackbar open={showAlert} autoHideDuration={4000} onClose={() => setShowAlert(false)}>
        <Alert onClose={() => setShowAlert(false)} severity="info" sx={{ width: '100%' }}>
          Access number { accessCount }
        </Alert>
      </Snackbar>
    </main>
  )
}
