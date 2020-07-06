import React from 'react';
import {Link } from  'react-router-dom';
import {FaStar, FaUser, FaUserCog, FaBookOpen } from "react-icons/fa";
import imgEmpresa from '../../../../assets/empresa.png'


import '../../../../global.css'
import './styles.css';

export default function PerfilEmpresa(){
    return(
        <div className="container">
            <div className="container-perfilempresa">
                    <header>
                       
                      <div className="esquerdo">  
                            <div className="titulo">
                                <h1 >BOM GOSTO</h1>  
                            </div>

                            <div className="tex">
                                Restaurante
                            </div>

                            <div className="desconectar">
                                <p className="estrela">
                                    <FaStar size='15px' color='#11263C'/>
                                    <FaStar size='15px' color='#11263C'/><FaStar size='15px' color='#11263C'/>
                                    <FaStar size='15px' color='#11263C'/>
                                    <FaStar size='15px' color='#11263C'/>
                                
                                </p>
                            </div>
                        </div>

                        <div className="direito">
                            <input type="checkbox" name="menu-hamburge" id="check"/>

                        <div className="menu">
                                <label id="imagem" For="check"><img src={imgEmpresa} alt="Foto"/></label>
                           <div className="barra">
                                <ul>
                                    <Link to="#"><li>Dados Pessoais<FaUserCog color='#11263C'size='30px'/></li></Link> 
                                    <Link to="#"><li>Funcionarios<FaUser color='#11263C'size='30px'/></li></Link>
                                    <Link to="#"><li>Cardápio Online<FaBookOpen color='#11263C'size='30px'/></li></Link>
                                </ul>
                           </div>

                            <button type="submit">SAIR</button>
                        </div>

                        </div>
                       
                    </header>
                    
                    <div className="forms-dados">
                        <h1 className="dados">Dados Pessoais</h1>
                       <div className="perfilendereco">
                           <p>Endereço: Rua Boa Vista, 26</p>
                            <p>Cep: 0000-000</p>
                           <p>São Paulo</p>
                       </div>

                       <div className="perfilcomplementares">
                           <p>Nome: Bom Gosto</p>
                           <p>Email: maria@maria.com</p>
                           <p>Telefone:  11 9 0000-0000</p>
                           <p>Senha: ***</p>
                       </div>                       
                    </div>

                    <button type="submit">ALTERAR</button>
                   
           </div>
            
        </div>
    );
}