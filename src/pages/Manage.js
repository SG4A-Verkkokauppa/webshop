import axios from 'axios';
import React, { useState } from 'react'
import CategoryLists from '../components/CategoryLists';
import '../Styles/Manage.css'
  
export default function Manage() {
    const [newCategory, setNewCategory] = useState("")
    const [selectedCategory,setSelectedCategory ] = useState(null)
    const [addingCategory, setAddingCategory] = useState(false)
    // Muista päivittää tämä url jos backend muuttuu!
    const URL = 'http://localhost:3001/';

    function saveCategory(e) {
        e.preventDefault();
        const json = JSON.stringify({name: newCategory});
        axios.post(URL + 'products/addcategory.php',json,{
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            setNewCategory('');
            setAddingCategory(false);
            setSelectedCategory(response.data);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        });
    }

    if (!addingCategory) {
        return (
            <div className="manage">
            <h3 id="add">Tuoteryhmien ylläpito</h3>
            <div>
                <label>Tuoteryhmät:</label>
                <CategoryLists
                url={URL}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                />
                <button className="btn btn-primary mb" type="button" onClick={()=> setAddingCategory(true)}>Lisää</button>
            </div>
        </div>
        )
    } else {
        return (
            <div className="manage">
            <h3 id="safe">Lisää uusi tuoteryhmä</h3>
            <form onSubmit={saveCategory}>
                <div>
                    <label>Tuoteryhmän nimi:</label>
                    <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}></input>
                </div>
                <div className='buttons'>
                <button type="button" className="btn btn-primary"   onClick={() => setAddingCategory(false)}>Peruuta</button>
                <button type="submit" className='buttontwo btn btn-primary'>Tallenna</button>
                </div>
            </form>
            </div>
        )
    }
  
}