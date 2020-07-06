import React from 'react';
import './styles.css';
import inicio from '../../assets/inicio.png'

import '../../global.css'

export default function Caminho(){
    return(
        <div className="container">

            <div className="container-inicio">
                <h1 className="titulo">Seja bem vindo</h1>
                <img src={inicio} alt="Celular" className="img_inicio"/>
            </div>
            
        </div>
    );
}