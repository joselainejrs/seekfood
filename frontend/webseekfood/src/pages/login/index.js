import React from 'react';
import imglogo from '../../assets/logo.png';
import {Link } from  'react-router-dom';
import { FaStore, FaUser } from "react-icons/fa";

import '../../global.css'
import './styles.css';

export default function Login(){
    return(
        <div>

           <div className="container">
                <div className="container-login">
                    <header>
                   
                            <img src={imglogo} alt="Logo" />

                    </header>

                    <div className="texto">
                        <ul>
                        <Link to="/logincliente"><li><FaStore color='#11263C'size='30px'/>Empresa</li></Link>
                        <Link to="#"><li><FaUser color='#11263C'size='30px'/>Funcionario</li></Link>
                        <Link to="#"><li><FaUser color='#11263C'size='30px'/>Cliente</li></Link>
                        </ul>
                    </div>

                   <div className="textop">
                        <p className="paragrafos">
                            Tenha na palma da sua mãos  a tecnologia
                            que visibiliza seu negócio e ao mesmo tempo 
                            te apresenta a outros lugares
                        </p>
                   </div>


                </div>
           </div>
                        
        </div>
    );
}