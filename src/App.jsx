import { useState, useEffect } from 'react'
// UI
import Contenedor from './components/ui/Contenedor';
import Boton from './components/ui/Boton';
// Componentes
import Frase from './components/Frase';

function App() {
  const [frase, guardarFrase] = useState({});

  // Obtener datos de la API
  const consultarAPI = async () => {
    const api = await fetch('https://breakingbad-service-dot-backend-services-api.ew.r.appspot.com/v1/quotes');
    const frase = await api.json()
    guardarFrase(frase[0]);
  }

  useEffect( () => {
    consultarAPI()
  }, []);

  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={consultarAPI}> Obtener Frase </Boton>
    </Contenedor>
  )
}

export default App
