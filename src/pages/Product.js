import '../Styles/Product.css'
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


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
      <div className='otsikko'><h3>{product?.tuotteen_nimi}</h3></div>
      <div><img className='product-photo' src={url+'images/' + product?.kuva} alt="tuotekuva"/></div>
      <div className='tuotesivukuvaus'>{product?.tuotteen_kuvaus}</div>
      <div className='tuotesivuhinta'>{product?.hinta} €</div>

      <button className='btn btn-primary' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
    </div>

    
  )}

