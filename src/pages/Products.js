import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

export default function Products({url}) {
  const [categoryName, setCategoryName] = useState('')
  const [products, setProducts] = useState([])

  let params = useParams()

  useEffect(() => {
    axios.get(url + 'products/products.php/' + params.tuoteryhma_id)
    .then((response)=>{
      const json = response.data
      setCategoryName(json.tuoteryhma_nimi)
      setProducts(json.tuotteen_nimi)
    }).catch (error =>{
      alert(error.response === undefined ? error : error.response.data.error)
    })
  }, [params])
  
  return (
    <>
    <h3>{categoryName}</h3>
    {products.map(product => (
      <div key={product.tuotteen_id}>
          {product.tuotteen_nimi}
      </div>
    ))}
    </>
  )
}
