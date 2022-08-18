import React from 'react';
import styled from "styled-components";
import './App.css';
import { createStore } from "redux";

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: gray;
  background: white;
`;



function App() {
  const countModifier = (count = 5, action: any): number => {
    if (action.type === "ADD") {
      return count + 1
    }
    else if (action.type === "MINUS") {
      return count - 1
    }
    else { return count }
  }
  const countStore = createStore<number, any, unknown, unknown>(countModifier)
  const number: any = document.querySelector("span");
  number.innerText = 0;
  const onChange = () => {
    if (number != undefined) {
      number.innerText = countStore.getState()
    }

    console.log(countStore.getState())
  }
  countStore.subscribe(onChange)

  const add = () => { countStore.dispatch({ type: "ADD" }) }
  const minus = () => { countStore.dispatch({ type: "MINUS" }) }


  return (
    <div className="App">
      <StyledButton onClick={add}>Add</StyledButton>
      <span></span>
      <StyledButton onClick={minus}>Minus</StyledButton>
    </div>
  );
}

export default App;
