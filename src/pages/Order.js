import React, { useState, useEffect, index } from 'react'
import uuid from 'react-uuid';




export default function Order({cart, removeFromCart, updateAmount}) {
  const [inputs,_] = useState([]);
  const[inputIndex, setInputIndex] = useState(-1);
  let sum = 0;

  useEffect(() => {
    for (let i = 0;i < cart.length;i++) {
      inputs[i] = React.createRef();
    }
  }, [cart.length])

  useEffect(()=> {
    if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
      inputs[inputIndex].current.focus();
    }
  },[cart])

  function changeAmount(e,product,index) {
    updateAmount(e.target.value.product);
    setInputIndex(index);
  }

  return (
    <div>
      <h3 className="header">Ostoskorin sisältö</h3>
      <table classname="table">
        <tbody>
          {cart.map(product => {
            sum+=parseFloat(product.price);
            return (
              <tr key={uuid()} className="euro">
                <td>{product.name}</td>
                <td>{product.price} €</td>
                <td>
                  <input ref={inputs[index]} style={{width: '60px'}} value={product.amount} onChange={e => changeAmount(e,product,index)} />
                </td>
                <td><a href='#' onClick={() => removeFromCart(product)}>Poista ostoskorista</a></td>
              </tr>
            )
          })}
        <tr key={uuid()} className="summa">
          <td></td>
          <td>{sum.toFixed(2)} €</td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
