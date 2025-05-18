import { useCallback, useState } from "react";
import List from "./List";

function UseCall() {
  const [theme, setTheme] = useState(true);
  const [val, setVal] = useState(0);
  const style = {
    backgroundColor: theme ? "white" : "black",
    color: theme ? "black" : "white",
  };
  const operation = useCallback(() => {
    return [val, val + 1, val + 2];
  }, [val]);
  return (
    <div style={style}>
      <input type="number" onChange={(e) => setVal(parseInt(e.target.value))} />
      <button onClick={() => setTheme((prev) => !prev)}>Change Theme</button>
      <List operation={operation} />
    </div>
  );
}
export default UseCall;
