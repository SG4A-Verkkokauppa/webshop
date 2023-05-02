import '../Styles/Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
    <div className='container'>
  
    </div>
    <div>
    <table>
      <thead></thead>
      <tbody>
            <tr>
                <th>MAAGISTA.FI OY</th>
                <th>OTA YHTEYTTÄ</th>
                <th> Toimitus</th>
            </tr>
            <tr>
                <td>Meemimäki 7</td>
                <td>asiakaspalvelu@maagista.fi</td>
                <td> Maksutavat</td>
            </tr>
            <tr>
                <td>123456 Meemilä</td>
                <td>p. 000 3456789</td>
                <td>{<Link
                      to={'/Manage'}>Ylläpito
                    </Link>}</td>
            </tr>
            </tbody>

    </table>
    </div>
    </footer>
  )
}