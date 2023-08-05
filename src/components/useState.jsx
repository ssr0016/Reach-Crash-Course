// function App() {

//     const [count, setCount] = useState(0);
//     const [name, setName] = useState("JelaCoder");
//     const [isChecked, setIsCheked] = useState(false);
//     const [fruits, setFruits] = useState(["Apple","Mango","Durian"]);
//     const [person, setPerson] = useState({name: "Samson Recluta Jr. ", age: 30});
  
//     const handleIncrement = () =>{
//       setCount(prevState => count + 1);
//     };
  
//     const handleDecrement = () =>{
//       setCount(prevState => count - 1);
//     }
  
//     const handleShowFruits = () => {
//       setIsCheked(!isChecked);
//     };
  
//     const handleAddFruit = () => {
//       setFruits([...fruits, "Pineapple"]);
//     };
  
//     const handleRemoveFruit = (fruitIndex) =>{
//       const filteredFruits = fruits.filter(
//         (fruit, index) => index !== fruitIndex
//         ); 
//         setFruits(filteredFruits); 
//     };  
     
  
//     return (
//       <>
//           <h1>Count: {count}</h1>
//           <button onClick={handleIncrement}>Increment</button>
//           <button onClick={handleDecrement}>Decrement</button>      
//           <hr/>
  
//           <div>
//             <label>Show? </label>
//             <input 
//             type="checkbox"
//             onChange={handleShowFruits}
//             checked={isChecked} />
//           </div>
  
//           <button onClick={handleAddFruit}>Add Fruit</button>
//           <ul className="list-group">
//               {isChecked
//                && fruits.map((fruit, index) => {
//                   return (
//                     <div key={index}>
//                       <li className="list-group-item">{fruit}</li>
//                         <button
//                          className="btn btn-danger"
//                          onClick={() => handleRemoveFruit(index)}>
//                           Remove Fruits
//                           </button>
//                     </div>
//                   );
//                })}
//           </ul>
         
  
  
  
  
  