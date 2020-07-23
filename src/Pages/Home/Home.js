import React, { Component } from 'react';
import MainTitle from '../../Components/MainTitle/MainTitle'
// import Button from '../../Components/Button/Button';
import GeneralTemplate from '../../Template/GeneralTemplate/GeneralTemplate';
import TextComponent from '../../Components/TextComponent/TextComponent';

import './Home.css';

class Home extends Component {

    render() {
        return (
            <GeneralTemplate>
                <div className='homeContainer'>
                    <MainTitle
                        mainTitle='Que Documentação?'
                    />
                    <TextComponent
                        textContent='Se você já tentou trabalhar com uma nova linguagem, usar o projeto de outros desenvolvedores ou usar um framework sem olhar a documentação, sabe o quanto é difícil. A documentação nos ajuda a entender quais os objetivos, como usar e como manter as aplicações. Aqui você encontra dicas de como pesquisar, como fazer um README.md e algumas das principais documentações!'
                    />
                    {/* <Button
                        path='about'
                        btnText='Sobre'
                    />
                    <Button
                        path='docs'
                        btnText='Documentação'
                    /> */}
                </div>
            </GeneralTemplate>
        );
    }
}

export default Home;