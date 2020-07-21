import React, { Component } from 'react';
import MainTitle from '../../Components/MainTitle/MainTitle'
import Button from '../../Components/Button/Button';
import GeneralTemplate from '../../Template/GeneralTemplate/GeneralTemplate';
import TextComponent from '../../Components/TextComponent/TextComponent';

class Home extends Component {

    testeBtn = () => { console.log('cliquei no sobre') }
    testeBtn2 = () => { console.log('cliquei no docs') }

    render() {
        return (
            <GeneralTemplate>
                <MainTitle
                    mainTitle='Que Documentação?'
                />

                <TextComponent
                    textContent='Aqui você pode encontrar dicas de como pesquisar na documentação do seu projeto e encontra todas as documentações'
                />


                <Button
                    path='about'
                    btnText='Sobre'
                />
                <Button
                    path='docs'
                    btnText='Documentação'

                />



            </GeneralTemplate>
        );
    }
}

export default Home;