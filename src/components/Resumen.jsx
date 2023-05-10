import React from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helper';


const Label = styled.label`
    flex:0 0 100px;
    font-family:'Slabo 27px',serif;
    font-size: 2rem;
`;

const ContenedorResumen = styled.div`
    padding:1rem;
    text-align:center;
    background-color:#00838F;
    color:#FFF;
    margin-top:1rem;


`

const Resumen = ({datos}) => {
     
    //estraer datos
    const {marca, year, plan} = datos;


    if(marca === ''  || year === ''  || plan === '') return null;
    return ( 
    <ContenedorResumen>
 
        <><Label className="styleperfect">Resumen de Cotizacion</Label><ul>
            <li>Marca: {primerMayuscula (marca)}</li>
            <li>Plan: {primerMayuscula (plan)}</li>
            <li>Año del Auto: {year}</li>
        </ul></>
    </ContenedorResumen>
    );
}
 
export default Resumen;