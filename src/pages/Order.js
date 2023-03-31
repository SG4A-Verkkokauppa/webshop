import React from 'react'
import uuid from 'react-uuid';




export default function Order({cart, removeFromCart}) {
  let sum = 0;

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
                <td><a href='#' onClick={() => removeFromCart(product)}>Delete</a></td>
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
