import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  border: 1px solid gray;
  width: 300px;
`
class Filtros extends React.Component {
    state = {
    
        busca: "",
        valorMinimo: "",
        valorMaximo: ""
        
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

    filtrar = () => {
       
        this.props.produtos = this.props.produtos.filter(produtos => {
        return produtos.nome.toLowerCase().includes(this.state.busca.toLowerCase())
        })
        .filter(produtos => {
        return this.state.valorMinimo === "" || produtos.valor >= this.state.valorMinimo
        })
        .filter(produtos => {
        return this.state.valorMaximo === "" || produtos.valor <= this.state.valorMaximo
        })
        console.log(this.props.produtos.length)
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
    <button onClick={this.filtrar} type='submit'> Filtrar </button>                          
              
    </Container>

    )
    };
}
export default Filtros;
