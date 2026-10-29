import { React , useState ,useEffect, useMemo } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import ProductCard from './components/ProductCard'

const App = () => {
  const [category, setCategory] = useState("All");
  const [product, setProduct] = useState([]);


  useEffect(() => {
    async function getData() {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setProduct(data)

    }

    getData();
  }, []); 


  const categoryMap  = {
    Mens: "men's clothing",
    Womens: "women's clothing",
    Apliences: "electronics",
    Jwelery: "jewelery",
  };

  const filterdProduct = useMemo(() => {
    if (category === "All") {
      return product;
    }

    return product.filter((item) => {
      return item.category === categoryMap[category];
    })
  }, [category, product])
  
  console.log(category);
  console.log(product)

  return (
    <div className='bg-blue-300  px-5 py-6'>
      <Navigation category={ category } setCategory={setCategory} />
      
      <ProductCard product={filterdProduct}/>

    </div>
  )
}

export default App