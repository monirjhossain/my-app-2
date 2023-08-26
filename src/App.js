import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUser></ExternalUser>
      <User></User>
    </div>
  );
}

function ExternalUser(){
  const [users, setUsers] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setUsers(data))
  },[]);
  return (
    <div>
      <h1>External Users</h1>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
      
    </div>
  );
}

function User(props){
  return (
    // console.log(props)
    <div>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}


function Counter(){

  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const DecreaseCount = () => setCount(count - 1);
  

  return (
    <div className='product'>
      <h2>Counter: {count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Dicrease</button>
    </div>
  )
}


//This is method where getting data from array on dynamically
// const products = [
//   {name : 'Laptop', price : '15350'},
//   {name : 'Mobile', price : '6025'},
//   {name : 'Watch', price : '9858'},
//   {name : 'Bag', price : '530'}
// ]

// {products.map(product => <Product name={product.name} price={product.price}></Product>)}

// <Product name="Laptop" price="20000"></Product>
// <Product name="Watch" price="1000"></Product>

export default App;
