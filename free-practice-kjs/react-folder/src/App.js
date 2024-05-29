// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Hello from "./Hello";

function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
    </div>
    //--> 컴포넌트는 일종의 UI 조각이다. 이렇게 쉽게 재사용이 가능한 것도 확인 가능하다.
  );
}

export default App;
