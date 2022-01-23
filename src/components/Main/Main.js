import React from "react"
import styled from "styled-components"
import Carrinho from "../Carrinho/Carrinho"
import App from "../../App"
import Filtros from "../Filtros/Filtros"


const Container = styled.div`
    display: grid;
    grid-template-columns: 20vw 60vw 20vw;
    grid-template-rows: 100vh;
`

const Filtro = styled.div`
    grid-column: 1/2; 
`

const Meio = styled.div`
    display: grid;
    grid-template-rows: 7% 93%;
    grid-template-columns: 100%;
    grid-column: 2/3;
    background-color: white;
`


const Header = styled.header`
    display: grid;
    grid-template-columns: 30% 40% 30%;
    grid-row: 1/2;
`

const Quantidade = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1/2;
`

const Ordem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 3/4;
`

const Select = styled.select`
    width: 40%;
    height: 40%;
    font-size: 100%;
    outline: none;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    grid-row: 2/3;
    width: 250px;
    height: 350px;
    border:  1px solid black;
    border-radius: 10px;
`

const CardImagem = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
`

const Compras = styled.div`
    display: flex;
    justify-content: space-evenly;
    grid-row: 2/3;

`
const BotaoCard = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 6%;
    outline: none;
`






export class Main extends React.Component {
    state = {
        produtos: [
            {
                id: 1,
                nome: "Apollo 11",
                valor: 100.0,
                imagem: "https://static3.tcdn.com.br/img/img_prod/460977/brinquedo_replica_onibus_espacial_shuttle_nasa_espaco_astronauta_discovery_ov_102_columbia_luz_e_som_85625_1_8592469c22e375292fb875951900529f.jpeg"
            },
            {
                id: 2,
                nome: "Foguete",
                valor: 500.0,
                imagem: "https://static3.tcdn.com.br/img/img_prod/460977/brinquedo_replica_onibus_espacial_shuttle_nasa_espaco_astronauta_discovery_ov_102_columbia_luz_e_som_85625_1_8592469c22e375292fb875951900529f.jpeg"
            },
            {
                id: 3,
                nome: "Nave Espacial",
                valor: 50.0,
                imagem: "https://th.bing.com/th/id/R.384852081ba39c84119b9fc95f311c0d?rik=CC5Wn6gOKZ3QIw&pid=ImgRaw&r=0"
            }
        ],
        produtosNoCarrinho: []
    }

    adicionaNoCarrinho = (event) => {
        let produtoNoCarrinho = this.state.produtosNoCarrinho.filter(produto => {
            return  produto.id.toString() === event.target.dataset.produtoId
         })[0]
        if (typeof produtoNoCarrinho !== "undefined") {
            alert("Esse produto já está no carrinho!")

        }else{
            let produto = this.state.produtos.filter(produto => {
                return  produto.id.toString() === event.target.dataset.produtoId
             })[0]
            produto.quantidade = 1
            this.setState({produtosNoCarrinho: [...this.state.produtosNoCarrinho, produto]})
            
        }
    }

    render() {
        const produtos = this.props.produtos
        return <Container>

            <Filtros
                produtos={this.state.produtos}
            />
            <Meio>

                <Header>
                    <Quantidade>Quantidade de Itens:</Quantidade>
                    <Ordem>
                        <h4>Ordem: </h4>
                        <Select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </Select>
                    </Ordem>
                </Header>

                <Compras>
                    {this.state.produtos.map((produto) => {
                        return (<Card>
                            <CardImagem src={produto.imagem}></CardImagem>
                            <h1>{produto.nome}</h1>
                            <h4>Preco: R$ {produto.valor}</h4>
                            <BotaoCard data-produto-id={produto.id} onClick={this.adicionaNoCarrinho}>Adicionar ao Carrinho</BotaoCard>
                        </Card>)
                    })}


                </Compras>

            </Meio>


            <Carrinho
                produtos={this.state.produtosNoCarrinho}
            />

        </Container>

    }
}

export default Main
