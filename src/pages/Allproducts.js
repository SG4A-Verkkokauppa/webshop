
import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import { Row, Col, Container } from "react-bootstrap";

// Tuotteiden näyttäminen tuoteryhmän mukaan:


export default function Products({url,addToCart}) {
  const [products, setProducts] = useState([])

  //let params = useParams()
  //console.log(params.tuoteryhma_id);
  useEffect(() => {
    axios.get(url + 'products/allproducts.php/')
    .then((response)=>{
      const json = response.data
      setProducts(json.Tuotteet)
    }).catch (error =>{
      alert(error.response === undefined ? error : error.response.data.error)
    })
  }, [])
  
  return (
    <div>
      <div className='otsikko'><h3>kaikki tuotteet</h3></div>
      <div className='products'>
      {products.map(product => (
      <div className='tuotekortti' key={product.tuotteen_id}>
          <div className='tuotekuva'><img className='photo' src={url+'images/' + product.kuva} alt="tuotekuva"/></div>
         {<Link 
            to={'/product/' + product.tuotteen_id}>
              <div className='tuotenimi'>
                 {product.tuotteen_nimi}
                 </div>
          </Link> }
          <div className='tuotehinta'>  {product.hinta}€ </div>
        
         <div> <button className='btn btn-primary' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button> </div>
      </div>
    ))}
    </div>
    </div>

  )
}