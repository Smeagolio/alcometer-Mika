import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const URL = 'http://localhost/shoppinglist'

function App() {
const [item, setitems] = useState([])

useEffect(()=> {
  axios.get(URL)
  .then((response)=> {
    setitems(response.data)
  }).catch (error => {
    console.log(error)
    alert("Item catalogue doesnt work")
  })
},[])

  return(

    <div>
      {
        items?.map(item => (
          <li key={item.description}>{item.amount}</li>
        ))
      }
    </div>
);
}


export default App;
