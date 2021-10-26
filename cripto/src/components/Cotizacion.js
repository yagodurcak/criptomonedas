import React from 'react';
import styled from '@emotion/styled';

const Conteiner= styled.div`
    color: white;
`

function Cotizacion({cotizacion}) {

    if (Object.keys(cotizacion).length === 0) return null;
    return (
        <Conteiner>
            <h1>El precio actual es de: {cotizacion.PRICE}</h1>
            <h4>Precio máximo del día: {cotizacion.HIGHDAY} </h4>
            <h4>Precio mínimo del día: {cotizacion.LOWDAY} </h4>
            <h4>Variación ultimas 24 hs: {cotizacion.CHANGEPCT24HOUR} </h4>
            <h4>última actualización: {cotizacion.LASTUPDATE}</h4>


        </Conteiner>
    )
}



export default Cotizacion
