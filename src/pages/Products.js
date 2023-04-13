import '../Styles/Products.css'
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
    <div>
    <div className='otsikko'><h3>{categoryName}</h3></div>
    
    <div className='products'>
    {products.map(product => (
      <div className='testi' key={product.tuotteen_id}>
         <div className='tuotekuva'><img className='photo' src={url+'images/' + product.kuva} alt="tuotekuva"/></div>
         {<Link 
            to={'/product/' + product.tuotteen_id}>
              <div className='tuotenimi'>
                 {product.tuotteen_nimi}
              </div>
          </Link> }
          <> {product.hinta}€ </>
          <div> <button className='btn btn-primary' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button> </div> 
      </div>
      
    ))}
    </div>
    </div>
  )
}
 {/*    <Link 
            to={'/product/' + product.id}>
              <p>
                {product.name}
              </p>
          </Link> */}