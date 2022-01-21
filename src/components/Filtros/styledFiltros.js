import styled from "styled-components";

export const ListContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap:wrap;
   *{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }
`
export const FiltrosContainers = styled.div`
   display: grid;
   border: 1px solid black;
   padding: 8px;
   width: 300px;
`
export const InputContainer = styled.label`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`

 