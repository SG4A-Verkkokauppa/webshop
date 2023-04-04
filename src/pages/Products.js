import './Products.css'
import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

// Tuotteiden näyttäminen tuoteryhmän mukaan:


export default function Products({url,addToCart}) {
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);

  let params = useParams()
  useEffect(() => {
    axios.get(url + 'products/products.php/' + params.tuoteryhma_id)
    .then((response)=>{
      const json = response.data
      setCategoryName(json.Tuoteryhma)
      setProducts(json.Tuotteet)
    }).catch (error =>{
      alert(error.response === undefined ? error : error.response.data.error)
    })
  }, [params])
  
  return (
    <div className='products'>
    <h3>Products for {categoryName}</h3>
    {products.map(product => (
      <div key={product.tuotteen_id}>
         {<Link 
            to={'/product/' + product.tuotteen_id}>
              <>
                 {product.tuotteen_nimi}
              </>
          </Link> }
          <>  {product.hinta}€ </>
          <div><img className='photo' src={url+'images/' + product.kuva} alt="tuotekuva"/></div>
          <div> <button className='btn btn-primary' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button> </div>
      </div>
    ))}
    </div>
  )
}
 {/*    <Link 
            to={'/product/' + product.id}>
              <p>
                {product.name}
              </p>
          </Link> */}