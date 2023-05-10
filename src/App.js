import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import styled from '@emotion/styled';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

const Contenedor = styled.div`
max-width:600px;
margin: 0 auto;

`;



const ContenedorFormulario = styled.div`

padding:3rem;
background-color:#FFF;


`;





function App() {

   const [resumen, guardarResumen] = useState({
    cotizacion:0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
   });

   // Extraer datos

   const {cotizacion,datos} = resumen;

  return (
  <Contenedor>
 
    <Header className="css-1han7pc"
  titulo='Cotizador de Seguros'></Header>
    

    <ContenedorFormulario>
    <Formulario
       guardarResumen= {guardarResumen}
    
    />

    <Resumen
    datos= {datos}
     
    />
    
    <Resultado
    cotizacion={cotizacion}
    
    />

    </ContenedorFormulario>
    
  </Contenedor>
 
  

  
  );
 
}

export default App;