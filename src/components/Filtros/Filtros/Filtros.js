import React from "react"
import styled from "styled-components"

const ListContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap:wrap;
   *{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }
`
const FiltrosContainers = styled.div`
   display: grid;
   border: 1px solid black;
   padding: 8px;
   width: 300px;
`
const InputContainer = styled.label`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`

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