import './Footer.css';
import React from 'react';

export default function Footer() {
  return (
    <footer className='footer'>
    <div className='container'>
  
    </div>
    <div>
    <table>
            <tr>
                <th>Maagista.fi oy</th>
                <th>Ota yhteyttä</th>
                <th><a href='www.iltalehti.fi'> linkki</a></th>
            </tr>
            <tr>
                <td>Meemimäki 7</td>
                <td>Käyntiosoite</td>
                <td>Käyntiosoite</td>
            </tr>
            <tr>
                <td>123456 Meemilä</td>
                <td>Oulu10, Saaristonkatu 8</td>
                <td>Oulu10, Saaristonkatu 8</td>
            </tr>
            <tr>
               <td>p. 0123456</td>
               <td>p.08 558 558 00</td>
               </tr>

            <tr>
               <td>meemila@meemi.com</td>
               <td>oulu10@ouka.fi</td>
            </tr>

    </table>
    </div>
    </footer>
  )
}