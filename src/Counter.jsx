import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userCount, userCount2 } from "./slice";
function Counter() {
  const [num, setNum] = useState();
  const value = useSelector((state) => state.count.value);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(userCount(num));
  };
  const handleClick2 = () => {
    dispatch(userCount2(num));
  };
  return (
    <>
      <input type="number" onChange={(e) => setNum(parseInt(e.target.value))} />
      <button onClick={handleClick}> ince by {num} </button>
      <button onClick={handleClick2}> dece by {num} </button>
    </>
  );
}

export default Counter;
