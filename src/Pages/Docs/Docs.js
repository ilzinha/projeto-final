import React, { Component } from "react";
import GeneralTemplate from "../../Template/GeneralTemplate/GeneralTemplate";
import MainTitle from "../../Components/MainTitle/MainTitle";
import Card from "../../Components/Card/Card";
import Input from "../../Components/Input/Input";
// import Button from '../../Components/Button/Button'

import "./Docs.css";


class Docs extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
            error: "",
            docs: [],
        };
    }

    componentDidMount = async () => {
        const getDocs = await this.props.docs;
        this.setState({ docs: getDocs });
    };

    handleChange = async (e) => {
        this.setState({ inputValue: e.target.value });
    };
    
    onClick = async (e) => {
        e.preventDefault()

        const { inputValue } = this.state;
        const { docs } = this.props;
        
        
        
        if (inputValue && docs.length) {
            const result = await docs.filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
            );

            if (result.length === 0) {
                this.setState({ docs: [], error: "Não encontrado!" });
            } else {
                this.setState({ docs: result, error: "" });
            }
        } 
        
    };

    handleRefresh = () => {
        const getDocs = this.props.docs;
        this.setState({ docs: getDocs });
    }

    render() {
        const { docs, inputValue, error } = this.state;

        return (
            <GeneralTemplate>
                <div className='DocsContainer'>
                    <MainTitle mainTitle="Documentações" />
                    <div className='inputSection'>
                        <Input
                            type="text"
                            onChange={this.handleChange}
                            placeholder="Digite o que você procura!"
                            value={inputValue}
                            onClick={this.onClick}
                            refresh={this.handleRefresh}
                        />
                    </div>

                    <section>
                        {
                            docs.length !== 0 ? (
                                docs.map((item, index) => {
                                    return (
                                        <Card
                                            key={`card__${index + 1}`}
                                            image={item.image}
                                            name={item.name}
                                            link={item.link}
                                        />
                                    );
                                })
                            ) : (
                                    <h3>{error}</h3>
                                )
                            // <h2>Não foi encontrado!</h2>
                        }
                    </section>
                </div>
            </GeneralTemplate>
        );
    }
}
export default Docs;
