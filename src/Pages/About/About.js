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
                        <p>A documentação é um guia que qualquer desenvolvedora e desenvolvedor deve levar para todos os lugares. É o mapa e a bússola de todo profissonal de TI. Durante o processo de aprendizado e desenvolvimento de alguma aplicação, a documentação é importante para o contexto de pesquisas e funcionalidades da linguagem ou framework.</p>
                        <p> Mas o caminho nem sempre é fácil.</p>
                        <img src='https://media.giphy.com/media/Ymtm7S6hu9OJDgyPZ4/giphy.gif' alt='nave voando entre asteroides'></img>
                        <p>No geral, você precisa ter uma certa familiaridade com cada uma delas e colocar o poder da interpretação para funcionar. Nem sempre as documentações são objetivas e  divididas em tópicos. Sabendo o que procurar, você tem acesso a informações de  níveis mais básicos a avançados. Nesta página, vou te dar algumas dicas de como pesquisar na documentação.
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
                                <span>Objetivo</span> - Pense primeiramente em qual objetivo final você que atingir. Depois quebre o problema em partes e pense como resolver cada parte utilizando uma função ou algum recurso da linguagem;
                            </li>
                            <br></br>
                            <li>
                                <span>Exemplos</span> - Buscar problemas parecidos com os seus e entender a forma como outras pessoas resolvem pode ser um caminho para a solução. Mas lembre-se: procure entender e não apenas copiar.
                            </li>
                        </ul>
                        <p>Caso esteja com dificuldades em encontrar alguma documentação, vá para a página de  <span className='span-link'><Link to='/docs' >Documentações</Link></span>!
                        </p>
                        <br></br>
                        <br></br>
                        <p>É isso! Boa sorte e...</p>
                        <img src='https://media.giphy.com/media/3owzVVCtGOpiC6TNdK/giphy.gif' alt='leia organa dizendo que a força esteja com você'></img>
                    </div>
                </div>
            </GeneralTemplate>

        );
    }
}

export default About;