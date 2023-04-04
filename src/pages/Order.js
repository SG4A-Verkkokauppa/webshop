import React, { useState, useEffect, index } from 'react'
import uuid from 'react-uuid';




export default function Order({cart, removeFromCart, updateAmount, changeAmount, url}) {
  const [inputs,_] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1);
  

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      inputs[i] = React.createRef()
    }
  }, [cart.length])

  useEffect(() => {
    if (
      inputs.length > 0 &&
      inputIndex > -1 &&
      inputs[inputIndex].current !== null
    ) {
      inputs[inputIndex].current.focus()
    }
  }, [cart])

  function changeAmount(e,product,index) {
    updateAmount(e.target.value.product);
    setInputIndex(index);
  }

  let sum = 0

  return (
    <div>
      <h3 className='header'>ostoskorin sisältö</h3>
      <table classname='table'>
        <tbody>
          {cart.map(product => {
            sum+=parseFloat(product.hinta);
            return (
              <tr className='euro' key={uuid()}>
                <td>
                  <img className='shoppingCart' src={product.tuotteen_kuva} alt='' />
                </td>
                <td>{product.tuotteen_nimi}</td>
                <td>{product.hinta} €</td>
                <img src={url+'images/' + product.kuva} alt="tuotekuva"/>
                <td>
                  <input
                    ref={inputs[index]}
                    style={{ width: '60px' }}
                    value={product.amount}
                    onChange={e => changeAmount(e, product, index)}
                  />
                </td>
                <td>
                  <a href='#' onClick={() => removeFromCart(product)}>
                    Poista ostoskorista
                  </a>
                </td>
              </tr>
            )
          })}
          <tr className='summa' key={uuid()}>
            <td></td>
            <td></td>
            <td>{sum.toFixed(2)} €</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
