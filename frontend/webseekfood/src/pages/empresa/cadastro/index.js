import React from 'react';
import {Link } from  'react-router-dom';
import { FaEnvelope, FaLock, FaChevronLeft , FaPhoneAlt } from "react-icons/fa";


import '../../../global.css'
import './styles.css';

export default function CadastroEmpresa(){
    return(
        <div className="container">
            <div className="container-cadastroempresa">
                    <header>
                        <div className="desconectar">
                            <Link to="/logincliente" className="sair"><FaChevronLeft size='30px' className="icon"/></Link>
                        </div>
                        <div className="titulo">
                            <h1 >Cadastro</h1>  
                        </div>

                        <div className="tex">
                        Tenha a melhor tecnologia para seu negócio!
                        </div>
                       
                    </header>
                    
                    <div className="forms">
                        <form >
                            <FaEnvelope size='30px' className="icon"/>
                             <input type="text" placeholder="Digite seu Email" className="input-login"/>

                             <FaPhoneAlt size='30px' className="icon"/>
                             <input type="text" placeholder="Digite seu Telefone" className="input-login"/>

                            <FaLock size='30px' className="icon"/>
                            <input type="text" placeholder="Digite uma Senha"  className="input-login"/>
                            
                            <button type="submit">
                                AVANÇAR
                            </button>

                        </form>
                    </div>

                    <footer>
                        <Link to="/loginempresa" className="final">Fazer Login</Link>
                    </footer>


                    
           </div>
            
            
        </div>
    );
}