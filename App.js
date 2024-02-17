import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHDQ1XXmUJinKZQlng3and0cchAeeX9B2mcqvdBXli5w&s-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://www.google.co.in/search?sca_esv=9f40617572002dfc&sxsrf=ACQVn09qfSh8hHvy-aZqCpY0sukTZZC5gg:1708177705717&q=laptop+images&tbm=isch&source=lnms&prmd=ivnbsmtz&sa=X&ved=2ahUKEwjr6_LqwbKEAxXVT2cHHSDfDSgQ0pQJegQICxAB&biw=1536&bih=742&dpr=1.25#imgrc=1F9bTUsyDmrLSM',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'https://www.livemint.com/lm-img/img/2023/12/07/600x338/wireless_cctv_1701941291235_1701941291450.jpg',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000
    },
    {
      url: 'https://i.gadgets360cdn.com/products/large/vivo-y01-703x800-1646802937.jpg',
      name: 'Vivo ',
      category: 'Smartphone',
      seller: 'Vivo Ltd',
      price: 30000
    },
    {
      url: 'https://www.yourprint.in/wp-content/uploads/2018/08/redex-1.gif',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;