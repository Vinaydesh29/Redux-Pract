import { useEffect, useState } from "react";

function List({ operation }) {
  const [val, setVal] = useState([]);
  useEffect(() => {
    console.log("call");

    setVal(operation());
  }, [operation]);
  return (
    <ul>
      {val.map((items, index) => {
        return <li key={index}>{items}</li>;
      })}
    </ul>
  );
}
export default List;
