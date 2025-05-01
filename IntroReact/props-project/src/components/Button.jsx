import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div onClick={handleClick}>
      <p>Click Here</p> <h2>{count}</h2>
    </div>
  );
};

export default Button;
