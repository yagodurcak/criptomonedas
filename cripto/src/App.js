import React, {useEffect, useState} from 'react';

import Cotizacion from './components/Cotizacion';
import Img from "./img/cryptomonedas.png"
import Spinner from './components/Spinner';
import Texto from "./components/Texto";
import axios from "axios";
import media from 'emotion-media-query';
import styled from "@emotion/styled";

const Container= styled.div`

  display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;

  
`
const Imagen = styled.img`

  height: 100vh;
  `
  const Cuadro = styled.div`
    height: 100vh;
    /* background-color: blue; */
    width: 100%;
    display: grid;
    justify-content: space-between;
    align-items: stretch;

  `





function App() {

  const [peso, setPeso] = useState("");
  const [criptos, setCriptos] = useState("");
  const [cotizacion, setCotizacion] = useState({});
  const [cargando, setCargando] = useState(false);


  useEffect(() => {

    if (peso === "") return;

    const buscarCotizacion = async() => {
      
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptos}&tsyms=${peso}`;

        const rtdo = await axios.get(url)

        setCargando(true)

        setTimeout(() => {
          
        setCargando(false)

          
          setCotizacion(rtdo.data.DISPLAY[criptos][peso] )
          
        }, 3000);


    }

    buscarCotizacion()
    
  
  }, [peso, criptos]);
  return (
    <Container>

      <Imagen src={Img} alt="" />
      <Cuadro>
        <Texto setPeso={setPeso} setCriptos={setCriptos}/>

        {cargando ? <Spinner/>
         :
         <Cotizacion cotizacion={cotizacion}/>
          }
      </Cuadro>

      
    </Container>

  );
}

export default App;
