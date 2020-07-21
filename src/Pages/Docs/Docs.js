import React, { Component } from "react";
import GeneralTemplate from "../../Template/GeneralTemplate/GeneralTemplate";
import MainTitle from "../../Components/MainTitle/MainTitle";
import Card from "../../Components/Card/Card";
import Input from "../../Components/Input/Input";

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

    onChange = async (e) => {
        this.setState({ inputValue: e.target.value });
        const { inputValue } = this.state;
        const { docs } = this.props;

       
        if (inputValue && docs.length) {
            const result = await docs.filter((item) =>
                item.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
            );

            if (result.length === 0) {
                this.setState({ docs: [], error: "Não encontrado!" });
            } else {
                this.setState({ inputValue: "", docs: result, error: "" });
            }
        }
    };

    // onClick = async () => {
    //     const { inputValue } = this.state;
    //     const { docs } = this.props;

       
    //     if (inputValue && docs.length) {
    //         const result = await docs.filter((item) =>
    //             item.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
    //         );

    //         if (result.length === 0) {
    //             this.setState({ docs: [], error: "Não encontrado!" });
    //         } else {
    //             this.setState({ inputValue: "", docs: result, error: "" });
    //         }
    //     }
    // };

    render() {
        const { docs, inputValue, error } = this.state;

        return (
            <GeneralTemplate>
                <MainTitle mainTitle="Documentações" />

                <Input
                    type="text"
                    onChange={this.onChange}
                    placeholder="Digite o que você procura!"
                    value={inputValue}
                />
                {/* <ButtonDocs onClick={this.onClick} btnText="Buscar" /> */}

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
            </GeneralTemplate>
        );
    }
}
export default Docs;