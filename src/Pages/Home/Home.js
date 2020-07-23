import React, { Component } from 'react';
import MainTitle from '../../Components/MainTitle/MainTitle'
import GeneralTemplate from '../../Template/GeneralTemplate/GeneralTemplate';

import './Home.css';

class Home extends Component {

    render() {
        return (
            <GeneralTemplate>
                <div className='homeContainer'>
                    <MainTitle
                        mainTitle='Que Documentação?'
                    />
                    <div className='textContainer'>
                        <p >Você já tentou trabalhar com uma nova linguagem, usar o projeto de outros desenvolvedores ou usar um framework sem olhar a documentação?</p>
                        <img src='https://media.giphy.com/media/3ornk6UHtk276vLtkY/giphy.gif' alt='gif de luke skywalker dizendo que é impossível'></img>
                        <p>É difícil né? </p>
                        <p >
                            Cada linguagem tem a sua, algumas mais claras do que outras, outras ainda com exemplo e tem linguagens que carecem de ter essa ferramenta importantíssima para as(os) devs.
    
                           A documentação nos ajuda a entender quais os objetivos, como usar e como manter as aplicações. Aqui você encontra dicas de como pesquisar e algumas das principais documentações!</p>
                    </div>

                </div>
            </GeneralTemplate>
        );
    }
}

export default Home;