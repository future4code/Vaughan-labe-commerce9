import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid gray;
  width: 300px;
  
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
       
        let produto = this.state.produtos.filter(produto => {
         
            return  produto.id.toString() === event.target.dataset.produtoId
            
         })[0]
         produto.quantidade= Number(event.target.value)
        this.setState({valorTotal: this.pegarValorTotal()})
    }
    
    pegarValorTotal = () => {
        let valorTotal = 0

        for (let produto of this.state.produtos) {
            valorTotal += produto.valor * produto.quantidade

        }
        return valorTotal

    }

    removerProduto = (id) => {
        let produto = this.state.produtos.filter(produto => {
         
            return  produto.id === id
            
         })[0]
        const indiceProduto = this.state.produtos.indexOf(produto)
            
        const arrayNovoProdutos = [...this.state.produtos]
           arrayNovoProdutos.splice(indiceProduto, 1)
        this.setState({produtos: arrayNovoProdutos})
        
      };
    
    render() {
        return (
            <Container >
                <h1>Carrinho:</h1>
                {this.state.produtos.map((produto) => {
                    return (<div key={produto.id}>
                        <input type="number" data-produto-id={produto.id} min="1" onChange={this.onChangeInput}></input> <p>Produto: {produto.nome}</p>
                        
                        <button onClick={() => this.removerProduto(produto.id)} typeof='submit'>
                            Remover
                        </button>
                        
                    </div>)
                })}

                <p>Valor Total: R$ {this.pegarValorTotal()} ,00</p>
            </Container>

        )
    };

}
export default Carrinho;

