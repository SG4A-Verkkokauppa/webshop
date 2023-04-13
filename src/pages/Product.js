import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Product.css'

export default function Product({url,addToCart}) {
  const [product, setProduct] = useState(null);


  let params = useParams();
  
  useEffect(() => {
    axios.get(url + 'products/product.php/' + params.tuotteen_id)
      .then((response) => {
        setProduct(response.data);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params])
  
  return (
    <div className="product">
      <h3>{product?.tuotteen_nimi}</h3>
      <div><img className='photo' src={url+'images/' + product?.kuva} alt="tuotekuva"/></div>
      <p>{product?.hinta}€</p>
      <p>{product?.tuotteen_kuvaus}</p>


      <button className='btn btn-primary' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
    </div>

    
  )}

