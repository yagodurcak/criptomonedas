import Img from "./img/cryptomonedas.png"
import React from 'react';
import Texto from "./components/Texto";
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
  return (
    <Container>

      <Imagen src={Img} alt="" />
      <Texto/>
      
    </Container>

  );
}

export default App;
