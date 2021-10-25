import React, {useState} from 'react';

import styled from '@emotion/styled';

const Select = styled.select`
  font-size: 20px;
  /* border: white; */
  border-radius: 30px;
  padding: 5px 20px;
  width: 50%;
  height: 50px;
  

`
const Subtitle = styled.h3`

      color: white;
      font-size: 30px;

  text-transform:uppercase;
  font-weight: 50px;
`


const useMoneda = (opciones, actual) => {
    
    const [state, acutalizarState] = useState(actual);

    // poruqe va con parentesis??? 
    const Seleccionar = () => (
        <div>
            <Subtitle>Elige tu moneda</Subtitle>
            <Select name="" id="" onChange={e => acutalizarState(e.target.value) } value= {state}>
              <option value="">Seleccione</option>
             {opciones.map(opcion => <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>)}
            </Select>
        </div>
    )

    return [state, Seleccionar, acutalizarState]

}

export default useMoneda
