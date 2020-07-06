import React from 'react';
import {Link } from  'react-router-dom';
import { FaEnvelope, FaLock, FaChevronLeft  } from "react-icons/fa";


import '../../../global.css'
import './styles.css';

export default function LoginEmpresa(){
    return(
        <div className="container">
            <div className="container-loginempresa">
                    <header>
                    <div className="desconectar">
                            <Link to="/login" className="sair"><FaChevronLeft size='30px' className="icon"/></Link>
                        </div>
                        <div className="titulo">
                            <h1>Login</h1>  
                        </div>
                       
                    </header>
                    
                    <div className="forms">
                        <form >
                            <FaEnvelope size='30px' className="icon"/>
                             <input type="text" placeholder="Digite seu Email" className="input-login"/>

                            <FaLock size='30px' className="icon"/>
                            <input type="text" placeholder="Digite sua Senha"  className="input-login"/>
                            
                            <button type="submit">
                                ENTRAR
                            </button>

                        </form>
                    </div>

                    <footer>
                        <Link to="/cadastro" className="final">Faça seu cadastro</Link>
                    </footer>


                    
           </div>
            
            
        </div>
    );
}