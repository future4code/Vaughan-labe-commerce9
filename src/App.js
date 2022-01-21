import React, { Component } from "react"
import jobList from "./data/jobs.json"
import { Header } from "./components/Header";
import { Card } from "./components/Card";
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