// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { deceBy1, inceBy1, inceBy5, reset } from "./slice";
// import Counter from "./counter";

import UseCall from "./UseCall";

function App() {
  // const value = useSelector((state) => state.count.value);
  // const dispatch = useDispatch();
  // const handleClick1 = () => {
  //   dispatch(inceBy1());
  // };
  // const handleClick2 = () => {
  //   dispatch(inceBy5());
  // };
  // const handleClick3 = () => {
  //   dispatch(deceBy1());
  // };
  // const handleClick4 = () => {
  //   dispatch(reset());
  // };
  return (
    <>
      <p>Count : {value}</p>
      <button onClick={handleClick1}>Ince By 1</button>
      <button onClick={handleClick2}>Ince By 5</button>
      <button onClick={handleClick3}>dece By 1</button>
      <button onClick={handleClick4}>reset</button>
      <br />
      <Counter />
    </>
  );
}

export default App;
