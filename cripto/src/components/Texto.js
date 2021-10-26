import React, {useEffect, useState} from 'react';

import axios from "axios";
import styled from "@emotion/styled";
import useCripto from '../hooks/useCripto';
import useMoneda from '../hooks/useMoneda';

const CajaTexto = styled.div`
height: 100%;
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

const Alert = styled.div`
  background-color: red;
  color: white;
  height: 50px;
  width: 50%;
  text-align: center;
  font-weight: 500;
  border-radius: 30px;
  margin-top: 40px;
  
`

function Texto({setCriptos, setPeso}) {

  
  const Monedas = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos"},
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra Esterlina' }
  ]
  const [apiRtdo, setApiRtdo] = useState([]);
  
  const [moneda, SeleccionMoneda] = useMoneda(Monedas, "");
  const [cripto, SelectCripto] = useCripto(apiRtdo, "");
  const [error, setError] = useState(false);


  useEffect(() => {

    const consultarApi = async () => {
      
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url) ;

      setApiRtdo(resultado.data.Data)

      
    }

    consultarApi()
  
  }, []);


  const mostrarRtdo = (e) => {

    e.preventDefault();

    if (moneda === "" || cripto === "") {
      
      setError(true);
      return

    }
    setError(false);

    setPeso(moneda)
    setCriptos(cripto)

    
    
  }




  return (
    <CajaTexto>

      <div>
        <Titulo>Cotiza criptomonedas al instante</Titulo>
        <Separador />
      </div>
      <Form action="" onSubmit={mostrarRtdo}>
        <div>

          <SeleccionMoneda/>
          <SelectCripto/>
        </div>
      {error ? <Alert>
        <h1>Complete todos los campos</h1>
      </Alert> : null}
        <Boton type="submit">Calcular</Boton>
      </Form>



    </CajaTexto>
  )
}

export default Texto
