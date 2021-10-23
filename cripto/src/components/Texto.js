import React from 'react';
import styled from "@emotion/styled";

const CajaTexto = styled.div`
height: 100vh;
width: 100%;
display: grid;
align-items: center;
/* justify-content: center; */
`

const Titulo = styled.h1`
  color: white;
  /* text-align: center; */
  font-size: 70px;
  text-transform:uppercase;
  
`
const Separador = styled.hr`
    border-top: 3px solid #bbb;
    width: 50%;
    margin-left: 0;
    
`
const Subtitle = styled.h3`

      color: white;
      font-size: 30px;

  text-transform:uppercase;
  font-weight: 50px;
`

const Select = styled.select`
  font-size: 20px;
  /* border: white; */
  border-radius: 30px;
  padding: 5px 20px;
  width: 50%;
  height: 50px;
  

`

const Boton = styled.button`
  width: 50%;
  height: 50px;
  border-radius: 30px;
  margin-top: 50px;
  background-color: #224588;
  font-weight: 600;
  font-size: 30px;
  color: white;
`
const Form = styled.form`
  margin-top: -100px;
`

function Texto() {
  return (
    <CajaTexto>

      <div>
        <Titulo>Cotiza criptomonedas al instante</Titulo>
        <Separador />
      </div>
      <Form action="">
        <div>
          <Subtitle>Elige tu moneda</Subtitle>
          <Select name="" id="">
            <option value="usd">Dolar</option>
          </Select>
          <Subtitle>Elige tu criptomoneda</Subtitle>
          <Select name="" id="">
            <option value="btc">Bitcoin</option>
          </Select>
        </div>
        <Boton type="submit">Calcular</Boton>
      </Form>


    </CajaTexto>
  )
}

export default Texto
