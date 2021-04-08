import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  
  // const nayoks = ['Riaz','Shakib','Salman'];
  return (
    <div className="App">
      <MovieCount></MovieCount>

      {
        users.map(nayok => <Nayok name={nayok.name} key={nayok.id} email={nayok.email}></Nayok>)
      }
      {/* {
        users.map(nayok => <Nayok name={nayok.name} key={nayok.id} email={nayok.email}></Nayok>)
      } */}
      {/* <Nayok nayokname="Riaz" age="24" ></Nayok>
      <Nayok nayokname="Shakib"></Nayok> */}
     
      
    </div>
  );
}

function MovieCount(){
  const [count,setCount] = useState(0);
  const handleMovie = () => setCount(count+1);
  return(
    <div>
      <button onClick={handleMovie}>Add Movie</button>
      <h1>Movies Count : {count}</h1>
      <MovieDisplay movie={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return(
    <div>
      <h1>This is Movie Display: {props.movie}</h1>
    </div>
  )
}

function Nayok(props){
  // const name = props.nayokname;
  // console.log(props.nayokname);
  const degin = {
    border:'2px solid red',
    margin:'20px',
    padding:'20px'
  }
  return(
    <div>
       <h1 style={degin}>{props.name} {props.email}</h1>
       
       
    </div>
  )
}

export default App;
