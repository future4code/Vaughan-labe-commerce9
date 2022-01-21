import React from "react"
import Carrinho from "./components/Carrinho/Carrinho";
import Main from "./components/Main/Main";
import Filtros from "./components/Filtros/Filtros/Filtros";


class App extends React.Component {
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
  render() {
    return (
      <div>
        <Main/>
      </div> 
    )
  }
}
export default App;
  

  
  
  
  
  
  
  /*state = {
      jobs: jobList,
      busca: "",
      valorMinimo: "",
      valorMaximo: ""
   }
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
      return <>
        <Header/>
         <Filtros>
            busca={this.state.busca}
            atualizacaoDaBusca={this.atualizacaoDaBusca}
            atualizacaoDoMinimo={this.atualizacaoDoMinimo}
            atualizacaoDoMaximo={this.atualizacaoDoMaximo}
            valorMinimo={this.state.valorMinimo}
            valorMaximo={this.state.valorMaximo}
         </Filtros>
         <ListContainer>
            {this.state.jobs
            .filter(job => {
               return job.title.toLowerCase().includes(this.state.busca.toLowerCase())
            })
            .filter(job => {
               return this.state.valorMinimo === "" || job.price >= this.state.valorMinimo
            })
            .filter(job => {
               return this.state.valorMaximo === "" || job.price <= this.state.valorMaximo
            })
            .map(job => {
               return <Card key={job.id} job={job} />
            })}
         </ListContainer>
      </>
   }*/


