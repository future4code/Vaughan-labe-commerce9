import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
   
    p {
        margin-top: 10px;
    }

   input {
       margin-top: 25px;
       margin-right: 50px;
       border-radius: 3px;
       outline: none;
       border: 1px solid #d1d1d1;
       width: 50%;
   }

   button {
        outline: none;
        border-radius: 3px;
        border: 1px solid #d1d1d1;
        background-color: white;
        cursor: pointer;
        transition: all 0.5s ease;
        font-size: 15px;
        width: 40%;
        transition: all 0.2s ease;
    }
    button:hover {
        background-color: gray;
        transition: all 0.2s ease;
        color: white;
        border: none;
    }

`

class Carrinho extends React.Component {
    state = {
        produtos: [
            {
                id: 1,
                nome: "Apollo 11",
                valor: 100.0,
                quantidade: 0
            },
            {
                id: 2,
                nome: "Foguete",
                valor: 500.0,
                quantidade: 0
            }
        ],
        produtosNoCarrinho: []
    }
    onChangeInput = (event) => {
        let produto = this.props.produtos.filter(produto => {
            return  produto.id.toString() === event.target.dataset.produtoId
         })[0]
         produto.quantidade= Number(event.target.value)
        this.setState({valorTotal: this.pegarValorTotal()})
    }
    pegarValorTotal = () => {
        let valorTotal = 0
        for (let produto of this.props.produtos) {
            valorTotal += produto.valor * produto.quantidade
        }
        return valorTotal
    }
    removerProduto = (id) => { 
        let produto = this.props.produtos.filter(produto => {

            return  produto.id === id
         })[0]
        const indiceProduto = this.props.produtos.indexOf(produto)
        const arrayNovoProdutos = [...this.props.produtos]

        arrayNovoProdutos.splice(indiceProduto, 1)

        this.setState({produtos: arrayNovoProdutos})
      };
      
    render() {
        return (
            <Container >
                <h1>Carrinho:</h1>
                {this.props.produtos.map((produto) => {
                    return (<div key={produto.id}>
                        <input type="number" value={produto.quantidade} data-produto-id={produto.id} min="1" onChange={this.onChangeInput}></input> <p>Produto: {produto.nome}</p>
                        <button onClick={() => this.removerProduto(produto.id)} typeof='submit' >Remover</button>
                    </div>)
                })}
                <p>Valor Total: R$ {this.pegarValorTotal()} ,00</p>
            </Container>
        )
    };
}
export default Carrinho;