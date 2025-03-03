import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);


  useEffect (()=> {

    const fetchData = async () => {
     
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/uers");
        if(!response.ok) {
          throw new Error("data not found");
        }
        const data = await response.json();
        setUsers(data);

      }
      catch(err) {
        setError(err.message);
      }


    };
    fetchData();

  },[]);

  return (
   <>
    {error ? <p  style={{color: "red"}}>{ error}</p> : (
    <ul>
      {users && users.map((user) => (
         <li key={user.id}>{user.name} </li>
      ))}
    </ul>
     )}
    </>
    
  );
}

export default App;
