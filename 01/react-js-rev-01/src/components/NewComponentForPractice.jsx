import React, { useEffect, useState } from "react";

const NewComponentForPractice = () => {
  const [count, setCount] = useState(0);
  const [changeColor, setChangeColor] = useState(false);

  const handleCounter = () => {
    setCount(count + 1);
    
};
useEffect(() => {
  if (count === 10) {
    setChangeColor(!changeColor);
  }
}, [count]);

  return (
    <div>
      <h3>Count is : {count}</h3>
      <button
        style={{
            
            backgroundColor: changeColor ? 'blue' : 'white',
           color: changeColor ? 'white' : 'blue'
          }}
        onClick={handleCounter}
      >
        Click me
      </button>
    </div>
  );
};

export default NewComponentForPractice;
