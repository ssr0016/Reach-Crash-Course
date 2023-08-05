import { useCallback, useMemo, useState } from "react";


function App() {
  const [count, setCount] = useState(0);

const doubledNumber = useMemo(()=> {
  console.log("Computing...")
  return count * 2;
}, [count]);
 

  return (
    <>
      <p>Doubled Number: {doubledNumber}</p>
      <button onClick={() =>setCount(prevCount => prevCount + 1)}>Double</button>
      
    </>

  );
      
  };

export default App
