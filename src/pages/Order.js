import React, { useState, useEffect, index } from 'react'
import uuid from 'react-uuid';
import "../App.css";
import Cart from '../components/Cart';
import axios from 'axios';

const URL = 'http://localhost:3001/';

export default function Order({cart, removeFromCart, updateAmount, changeAmount}) {
  const [inputs,_] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1);

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [zip, setZip] = useState("")
  const [city, setCity] = useState("")
  const [finished, setFinished] = useState("")
  const [empty, setEmpty] = useState("")

  let sum = 0

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      inputs[i] = React.createRef()
    }
  }, [cart.length])

  useEffect(() => {
    if (
      inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
      inputs[inputIndex].current.focus()
    }
  }, [cart])

  function changeAmount(e,product,index) {
    updateAmount(e.target.value,product);
    setInputIndex(index);
  }

  function order(e) {
    e.preventDefault();
  
    const json = JSON.stringify({
      etunimi: firstName,
      sukunimi: lastName,
      osoite: address,
      postinumero: zip,
      city: city,
      cart: cart,
    });
    axios.post(URL + 'order/save.php',json,{
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json'
      }
    })
    .then(() => {
      empty();
      setFinished (true);
    }).catch(error => {
      alert(error.response === undefined ? error : error.response.data.error);
    });}

  return (
    <div>

      <table className='OKtable'>
        <tbody>
          <tr>
            <td><h3 className='header'>ostoskorin sisältö</h3></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {cart.map(product => {
            sum+=parseFloat(product.amount * product.hinta);
            return (
              <tr className='euro' key={uuid()}>
                <td>
                <img className='shoppincartImages' src={URL+'images/' + product?.kuva} alt="tuotekuva"/>
                </td>
                <td>{product.tuotteen_nimi}</td>
                <td>{(product.amount * product.hinta).toFixed(2)} €</td>
                <td>
                  <input
                    type='number' min={0}
                    ref={inputs[index]}
                    style={{ width: '60px' }}
                    value={product.amount}
                    onChange={e => changeAmount(e, product, index)}
                  />
                </td>
                <td>
                  <a href='#' onClick={() => removeFromCart(product)} className='poista'>
                    Poista ostoskorista
                  </a>
                </td>
                <td>
                  
                </td>
              </tr>
            )
          })}
          <tr className='summa' key={uuid()}>
            <td></td>
            <td>Yhteensä</td>
            <td>{sum.toFixed(2)} €</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {cart.length > 0 &&
    <>
    <h3 className="header">Tilauslomake</h3>  <form onSubmit={order}>
    <div className='form-group'>
    <label className='tlomake'>Etunimi:</label>
    <input className='form-control' value={firstName} onChange={e =>setFirstName(e.target.value)}/>
    </div>
    <div className='form-group'>
    <label className='tlomake'>Sukunimi:</label>
    <input className='form-control' value={lastName} onChange={e =>setLastName(e.target.value)}/>
    </div>
    <div className='form-group'>
    <label className='tlomake'>Osoite:</label>
    <input className='form-control' value={address} onChange={e =>setAddress(e.target.value)}/>
    </div>
    <div className='form-group'>
    <label className='tlomake'>Postinumero:</label>
    <input className='form-control' value={zip} onChange={e =>setZip(e.target.value)}/>
    </div>
    <div className='form-group'>
    <label className='tlomake'>Postitoimipaikka:</label>
    <input className='form-control' value={city} onChange={e =>setCity(e.target.value)}/>
    </div>
  
    <div>
    <button className='button' type="button">Tilaa</button>
    </div>
    </form>
    </>
    
}
    </div>
  )
}

