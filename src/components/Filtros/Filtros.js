import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  border: 1px solid gray;
  width: 300px;
`
class Filtros extends React.Component {
    state = {
        
        produtos: [
            {
                id: 1,
                nome: "Apollo 11",
                titulo: "Nave aeroespacial",
                valor: 100.0,
                quantidade: 0
            },
            {
                id: 2,
                nome: "Foguete",
                titulo: "Foguete da Nasa",
                valor: 500.0,
                quantidade: 0
            }],

        busca: "",
        valorMinimo: "",
        alorMaximo: ""
        
    };
    
    atualizacaoDaBusca=(event) => {
        this.setState ({
           busca: event.target.value })
     }
     atualizacaoDoMinimo=(event) => {
        this.setState ({
           valorMinimo: event.target.value })
     }
     atualizacaoDoMaximo=(event) => {
        this.setState ({
           valorMaximo: event.target.value })
     }


    render() {
    return (
    <Container>

    <h1>Filtros</h1>

                
    <h3>Busca por nome</h3>
    <input
    placeholder="Produto"
    value={this.state.busca}
    onChange={this.atualizacaoDaBusca}
     />
     
    <h3>Valor mínimo</h3>
    <input
    type="number"
    placeholder="$"
    value={this.state.valorMinimo}
    onChange={this.atualizacaoDoMinimo}
     />
           
    <h3>Valor máximo</h3>
    <input
    type="number"
    placeholder="$$$$"
    value={this.state.valorMaximo}
    onChange={this.atualizacaoDoMaximo}
     />
                                
              
    </Container>

    )
    };
}
export default Filtros;

// Qaundo coloco a função o site quebra, não estou conseguindo achar o erro.

/*
    {this.state.produtos.titulo
    .filter(produtos => {
    return produtos.titulo.toLowerCase().includes(this.state.busca.toLowerCase())
    })
    .filter(produtos => {
    return this.state.valorMinimo === "" || produtos.valor >= this.state.valorMinimo
    })
    .filter(produtos => {
    return this.state.valorMaximo === "" || produtos.valor <= this.state.valorMaximo
    })
    .map(produtos => {
    return < key={produtos.id} produtos={produtos} />
    })
*/ 