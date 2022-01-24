import React from "react"
import styled from "styled-components"
import Carrinho from "../Carrinho/Carrinho"
import App from "../../App"
import Filtros from "../Filtros/Filtros"


const Container = styled.div`
    display: grid;
    grid-template-columns: 20vw 60vw 20vw;
    grid-template-rows: 100vh;
    background-color: blac;
    background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(0,0,1));
`

const Filtro = styled.div`
    
    display: flex;
    justify-content: center;
    flex-direction: row;
    grid-column: 1/2; 
    

    input {
        width: 190%;
        height: 3%;
        border-radius: 5px;
        outline: none;
        border: 1px solid #d1d1d1;
        margin-bottom: 10px;
        margin-left: -85px;
    }

    h1 {
        margin-bottom: 10px;
    }
    h3 {
        margin-left: -85px;
    }
    
`

const Meio = styled.div`
    display: grid;
    grid-template-rows: 7% 93%;
    grid-template-columns: 100%;
    grid-column: 2/3;

    select {
        border-radius: 5px;
        outline: none;
        margin-left: 5px;
    }
    
`


const Header = styled.header`
    display: grid;
    grid-template-columns: 30% 40% 30%;
    grid-row: 1/2;

    h4 {
        color: white;
    }
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
    border:  1px solid gray;
    border-radius: 10px;
    background-color: white;

    button {
        outline: none;
        border-radius: 5px;
        border: 1px solid #d1d1d1;
        background-color: white;
        cursor: pointer;
        transition: all 0.5s ease;
        font-size: 15px;
    }
    button:hover {
        background-color: black;
        transition: all 0.5s ease;
        color: white;
    }
    
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
    height: 8%;
    outline: none;
`







export class Main extends React.Component {
    state = {
        produtos: [
            {
                id: 1,
                nome: "LEGO: Estrela da morte",
                valor: 100.0,
                imagem: "https://http2.mlstatic.com/D_NQ_NP_778709-MLB31740824654_082019-O.jpg"
            },
            {
                id: 2,
                nome: "Baby Yoda",
                valor: 10000000000,
                imagem: "https://s2.glbimg.com/QqEDyJyWVPTI9tU-5izKpJls6UE=/620x520/smart/e.glbimg.com/og/ed/f/original/2020/11/30/baby-yoda.jpg"
            },
            {
                id: 3,
                nome: "Millennium Falcon",
                valor: 10,
                imagem: "https://s2.glbimg.com/coHwdDkMeRVO9T2A_v1EIWLuHTE=/e.glbimg.com/og/ed/f/original/2019/08/27/31618033034_1dcde167ed_k.jpg"
            }
        ],
        produtosNoCarrinho: [],
        busca: "",
        valorMinimo: "",
        valorMaximo: "",
        sort: 'DECRESCENTE'
    };
    
    onChangeAtualizacaoDaBusca=(event) => {
        this.setState ({
           busca: event.target.value })
    }
    onChangeAtualizacaoDoMinimo=(event) => {
        this.setState ({
           valorMinimo: event.target.value })
    }
    onChangeAtualizacaoDoMaximo=(event) => {
        this.setState ({
           valorMaximo: event.target.value })
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
    onChangeSort = (event) => {
        this.setState({sort: event.target.value})
    }
    ordenaLista = () => {
        return this.props.produtos
        .sort((a,b) => this.state.sort === 'CRESCENTE' ? a.valor - b.valor : b.valor - a.valor)
    }
    render() {
        const produtos = this.props.produtos
        return <Container>
            <Filtro>
                <Filtros
                    busca={this.state.busca}
                    valorMinimo={this.state.valorMinimo}
                    valorMaximo={this.state.valorMaximo}
                    onChangeAtualizacaoDaBusca={this.onChangeAtualizacaoDaBusca}
                    onChangeAtualizacaoDoMinimo={this.onChangeAtualizacaoDoMinimo}
                    onChangeAtualizacaoDoMaximo={this.onChangeAtualizacaoDoMaximo}
                />
            </Filtro>
            
            <Meio>
                <Header>
                    <Quantidade>Quantidade de Itens: 3</Quantidade>
                    <Ordem>
                        <h4>Ordem: </h4>
                        <Select value={this.state.sort} onChange={this.onChangeSort}>
                            <option value={'CRESCENTE'}>Crescente</option>
                            <option value={'DECRESCENTE'}>Decrescente</option>
                        </Select>
                    </Ordem>
                </Header>

                <Compras>
                    {this.state.produtos.map((produto) => {
                        return (<Card>
                            <CardImagem src={produto.imagem}></CardImagem>
                            <h3>{produto.nome}</h3>
                            <h4>Preço: R${produto.valor}</h4>
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
