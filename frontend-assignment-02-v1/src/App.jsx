import { useEffect } from "react";
import "./App.css"
import axios from "axios";
import { useState } from "react";
import Card from "./components/Card/Card";

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => setProducts(res.data.products)).catch((err) => console.log(err.message))
  }, [])


  return (
    <div className="App">
      <div className='left-section'>
        <div className='left-section__head'>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>PRODUCTS</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            {true ? <tbody>
              <tr>
                <td><img height={20} width={20} src={"https://www.svgrepo.com/show/401366/cross-mark-button.svg"} alt="cross-icon" /></td>
                <td>1</td>
                <td>2</td>
                <td><button>-</button>2<button>+</button></td>
                <td>4</td>
              </tr>
            </tbody> :
              <div className="table__empty">
                there are no products</div>}
          </table>
        </div>
        <div className="left-section__bottom">
          <table>
            <tr>
              <th>Subtotal</th>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <th>VatTax</th>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <th>Discount</th>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <th>total</th>
              <td>100</td>
              <td>100</td>
            </tr>
          </table>
        </div>
        <div className="left-section__button">
          <button >cancel sale</button>
          <button>process sale</button>
        </div>
      </div>
      <div className='right-section'>
        <div className="card__container">
          {products.map((product, index) => (
            <Card product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
