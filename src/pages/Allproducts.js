
import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

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
    <div className='products'>
    <h3>Kaikki tuotteet</h3>
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