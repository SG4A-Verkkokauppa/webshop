import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Product.css'

export default function Product({url}) {
  const [product, setProduct] = useState(null);

  let params = useParams();
  
  useEffect(() => {
    axios.get(url + 'products/product.php/' + params.tuotteen_id)
      .then((response) => {
        const json = response.data;
        console.log(json);
        setProduct(response.data);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params])
  
  return (
    <div className="product">
      <h3>{product?.tuotteen_nimi}</h3>
      <div>kuva</div>
      <p>{product?.hinta}€</p>
      <p>{product?.tuotteen_kuvaus}</p>
    </div>
  )
}