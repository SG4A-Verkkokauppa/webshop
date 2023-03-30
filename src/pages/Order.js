import React from 'react'
import uuid from 'react';

export default function Order({cart}) {
  let sum = 0;

  return (
    <div>
      <h3 className="header">Näytä ostoskori</h3>
      <table classname="table">
        <tbody>
          {cart.map(product => {
            sum+=parseFloat(product.price);
            return (
              <tr key={uuid()}>
                <td>{product.name}</td>
                <td>{product.price} €</td>
                <td></td>
              </tr>
            )
          })}
        <tr key={uuid()}>
          <td></td>
          <td>{sum.toFixed(2)} €</td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
