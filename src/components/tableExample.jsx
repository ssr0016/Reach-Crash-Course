

// function App() {
//     const cities = ["Manila","Cebu City","Bacolod","Davao City"];
//     //ganito naman mag filter sa list of array
//     const newCities = cities.filter(city => city !== "Davao City");
  
//     //array object
//     const person = [
//   {
//     id: 0,
//     name: "Samson D. Recluta",
//     age: 30,
//   }
//   ];
  
//   if(person.length === 0) return <h1>...Loading</h1>
  
//     return (
//         //ganito gamitin ang map sa list of array
//       <>
//         <h1>List</h1>
//         <ul className="list-group">
//           {newCities.map((city, index) => (
//               <li className="list-group-item" key={index}>{city}</li>
//           ))}
//         </ul>
  
//         <hr /> 
  
//        {person.length > 0 && <div> <h1>Table</h1>
//         <table className="table">
//                 <thead>
//                   <tr>
//                     <th scope="col">ID</th>
//                     <th scope="col">NAME</th>
//                     <th scope="col">STATUS</th>
//                   </tr>
//                 </thead>
//                 <tbody>   
//                   {person.map(personData =>{
//                       return (
//                         <tr key={personData.id}>
//                           <td>{personData.id}</td>
//                           <td>{personData.name}</td>
//                           <td>{personData.age < 20 ? "Young" : "Old"}</td>
//                         </tr>
//                       )
//                   })}
//                 </tbody>
//         </table></div>}
  
//       </>
//     );
        
//     };
  
  
//   export default App