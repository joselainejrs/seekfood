import React from 'react';
import {Link } from  'react-router-dom';
import { FaMapMarkerAlt, FaChevronLeft , FaStore } from "react-icons/fa";


import '../../../global.css'
import './styles.css';

export default function CadastroAvanco(){
    return(
        <div className="container">
            <div className="container-cadastroavanco">
                    <header>
                        <div className="desconectar">
                            <Link to="/cadastroempresa" className="sair"><FaChevronLeft size='30px' className="icon"/></Link>
                        </div>
                        <div className="titulo">
                            <h1>Cadastro</h1>  
                        </div>

                        <div className="tex">
                        Precisamos de mais informações sobre o estabelecimento para finalizarmos o seu cadastro!
                        </div>
                       
                    </header>
                    
                    <div className="forms">
                        <form >
                            <div className="input-login-um">
                                <FaStore size='30px' className="icon"/>
                                <input type="text" placeholder="Nome/Razão Social" className="input-login-cadastro"/>
                                <hr/>
                                <input type="text" placeholder="Seguimento" className="input-login-cadastro"/>
                                <hr/>
                                <input type="text" placeholder="CPJ/CPF" className="input-login-cadastro"/>
                            </div>

                            <div className="input-login-dois">
                                <FaMapMarkerAlt size='30px' className="icon"/>
                                <input type="text" placeholder="Endereço"  className="input-login-cadastro"/>
                                <hr/>
                                <input type="text" placeholder="Número"  className="input-login-cadastro"/>
                                <hr/>
                                <input type="text" placeholder="CEP"  className="input-login-cadastro"/>
                                <hr/>
                                <input type="text" placeholder="Complemento"  className="input-login-cadastro"/>
                            </div>
                            
                            <button type="submit">
                                FINALIZAR
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