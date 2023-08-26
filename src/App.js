import logo from './logo.svg';
import './App.css';

const products = [
  {name : 'Laptop', price : '15350'},
  {name : 'Mobile', price : '6025'},
  {name : 'Watch', price : '9858'},
  {name : 'Bag', price : '530'}
]



function App() {
  return (
    <div className="App">
      {products.map(product => <Product name={product.name} price={product.price}></Product>)}

      {/* <Product name="Laptop" price="20000"></Product>
      <Product name="Watch" price="1000"></Product> */}
    </div>
  );
}

function Product(props){
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
