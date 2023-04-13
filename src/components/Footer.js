import '../Styles/Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
    <div className='container'>
  
    </div>
    <div>
    <table>
            <tr>
                <th>MAAGISTA.FI OY</th>
                <th>OTA YHTEYTTÄ</th>
                <th><a href=''> Toimitus</a></th>
            </tr>
            <tr>
                <td>Meemimäki 7</td>
                <td>meemila@meemi.com</td>
                <td><a href=''> Maksutavat</a></td>
            </tr>
            <tr>
                <td>123456 Meemilä</td>
                <td>p. 000 3456789</td>
                <td>{<Link
                      to={'/Manage'}>Ylläpito
                    </Link>}</td>
            </tr>
            <tr>
               <td></td>
               <td></td>
               </tr>

            <tr>
               <td></td>
               <td></td>
            </tr>

    </table>
    </div>
    </footer>
  )
}