import {FiltrosContainers} from "../Filtros/styledFiltros";
import { InputContainer } from "../Filtros/styledFiltros";


export function Filtros(props) {
    return <FiltrosContainers>
    
    <h1>Filtros</h1>
    
    <h3>Busca por nome</h3>
    <InputContainer>
    <input
    placeholder="Produto"
    value={props.busca}
    onChange={props.atualizacaoDaBusca} 
     />
    </InputContainer>
    <InputContainer>  
    <h3>Valor mínimo</h3>
    <input
    type="number"
    placeholder="$"
    value={props.valorMinimo}
    onChange={props.atualizacaoDoMinimo} 
     />
    </InputContainer>
    <InputContainer>        
    <h3>Valor máximo</h3>
    <input
    type="number"
    placeholder="$$$$"
    value={props.valorMaximo}
    onChange={props.atualizacaoDoMaximo} 
     />
     </InputContainer>
     </FiltrosContainers>
    }


    //PAGINA DO APP.

 /*   
import React, { Component } from "react"
import jobList from "./data/jobs.json"       **PEGUEI COMO EXEMPLO**
import { Header } from "./components/Header";  **PEGUEI COMO EXEMPLO**
import { Card } from "./components/Card";       **PEGUEI COMO EXEMPLO**
import { ListContainer } from "./components/Filtros/styledFiltros";
import { Filtros } from "./components/Filtros/Filtros";

export class App extends Component {

   state = {
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
      
   }
}
*/