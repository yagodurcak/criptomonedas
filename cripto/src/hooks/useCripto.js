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


const useCripto = (opciones, actual) => {
    
    const [state, acutalizarState] = useState(actual);

    // console.log((opciones));

    // poruqe va con parentesis??? 
    const SelectCripto = () => (
        <div>
            <Subtitle>Elige tu criptomoneda</Subtitle>
            <Select name="" id="" onChange={e => acutalizarState(e.target.value) } value= {state}>
              <option value="">Seleccione</option>
             {opciones.map(opcion => <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>)}
            </Select>
        </div>
    )

    return [state, SelectCripto, acutalizarState]

}

export default useCripto
