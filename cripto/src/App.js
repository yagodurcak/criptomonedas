import React, {useEffect, useState} from 'react';

import Img from "./img/cryptomonedas.png"
import Texto from "./components/Texto";
import axios from "axios";
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




function App() {

  const [peso, setPeso] = useState("");
  const [criptos, setCriptos] = useState("");


  useEffect(() => {

    if (peso === "") return;

    const buscarCotizacion = async() => {
      
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptos}&tsyms=${peso}`;

        const rtdo = await axios.get(url)

        console.log(rtdo);
    }

    buscarCotizacion()
    
  
  }, [peso, criptos]);
  return (
    <Container>

      <Imagen src={Img} alt="" />
      <Texto setPeso={setPeso} setCriptos={setCriptos}/>

      
    </Container>

  );
}

export default App;
