import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <p>counter {count}</p>
    </>
  );
};

export default Counter;
