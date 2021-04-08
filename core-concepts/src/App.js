import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const Persons = [{
    name:'Hasan',
    job: 'Student'
  },
  {
    name: 'Ahamed',
    job:'student'
  }
]
  return (
    <div className="App">
      {
        Persons.map(person => <Products product={person}></Products>)
      }
     
      {/* <Products product={Persons.name}></Products> */}
      
     <h1>{Persons.name}</h1>
    </div>
  );
}

function Products(props){
  const {name} = props.product;
  const [count,setCount] = useState(10);
  const handleCount = ()=>{
    const newCount = count + 1;
    setCount(newCount);
  }
  // useEffect(()=>{
     
  // },[])
  
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>Button</button>
      <h1>{name}</h1>
      
      {/* <h3>{job}</h3> */}

    </div>
  )
}

export default App;
