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
    let address = '';

    if (params.searchPhrase === undefined) {
      address = url + 'products/products.php/' + params.tuoteryhma_id;
    } else {
      address = url + 'products/searchproducts.php/' + params.searchPhrase;
    }

    axios.get(address)
    .then((response) => {
      const json = response.data;
      if (params.searchPhrase === undefined) {
        setCategoryName(json.Tuoteryhma);
        setProducts(json.Tuotteet);
      } else {
      setCategoryName(params.searchPhrase);
      setProducts(json);
      
    }
    /*axios.get(url + 'products/products.php/' + params.tuoteryhma_id)
    .then((response)=>{
      const json = response.data
      setCategoryName(json.Tuoteryhma)
      setProducts(json.Tuotteet)*/
    }).catch (error =>{
      alert(error.response === undefined ? error : error.response.data.error)
    })
  }, [params])
  
  return (
    <div>
    <div className='otsikko'><h3>{categoryName}</h3></div>
    
    <div className='products'>
    {products.map(product => (
      <div className='tuotekortti' key={product.tuotteen_id}>
        {<Link 
            to={'/product/' + product.tuotteen_id}> <div className='tuotekuva'><img className='photo' src={url+'images/' + product.kuva} alt="tuotekuva"/></div> </Link> }
         {<Link 
            to={'/product/' + product.tuotteen_id}>
              <div className='tuotenimi'>
                 {product.tuotteen_nimi}
              </div>
          </Link> }
          <div className='tuotehinta'> {product.hinta}€ </div>
          <div> <button className='btn btn-primary' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button> </div> 
      </div>
      
    ))}
    </div>
    </div>
  )
}
