import React, { Component } from 'react';
import GeneralTemplate from '../../Template/GeneralTemplate/GeneralTemplate';
import MainTitle from '../../Components/MainTitle/MainTitle';

import './About.css'
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <GeneralTemplate>
                <div className='aboutContainer'>
                    <MainTitle
                        mainTitle='Dicas'
                    />

                    <div className='textContent'>
                        <p className='textContent--paragraph'>A documentação é um guia que qualquer desenvolvedora e desenvolvedor deve levar para todos os lugares. É o mapa e a bússola de todo profissonal de TI. Durante o processo de aprendizado e desenvolvimento de alguma aplicação, a documentação é importante para o contexto de pesquisas e funcionalidades da linguagem ou framework.<br></br>
                            A maioria das documentações são bem objetivas, divididas em tópicos e possuem informações para níveis básicos e avançados. Nesta página, vou te dar algumas dicas de como pesquisar na documentação.
                        </p>

                        <ul>
                            <li>
                                <span>Inglês</span> - Grande parte das documentações são escritas em ingês e uma parcela pequena está traduzida. Sugiro que você use e abuse do
                                <span className='span-link'><a href='https://translate.google.com.br/?hl=pt-BR'> Google Tradutor</a></span>;
                            </li>
                            <br></br>
                            <li>
                                <span>Paravras chaves</span> - As palvras chaves são importantes para facilitar as buscas.
                                <span className='italic'> Functions, Statements, Classes, Methods e Operators </span> são algumas;
                            </li>
                            <br></br>
                            <li>
                                <span>Objetivo</span> - Pense primeiramente em qual objetivo final você que atingir. Depois quebre o problema em partes e pense como resolver cada parte utilizando uma função ou algum recurso da linguagem.
                            </li>
                        </ul>
                        <p className='textContent--paragraph'>Caso esteja com dificuldades em encontrar alguma documentação, vá para a página de  <span className='span-link'><Link to='/docs' >Documentações</Link></span>!
                        </p>
                    </div>
                </div>
            </GeneralTemplate>

        );
    }
}

export default About;