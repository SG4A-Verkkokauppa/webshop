import axios from 'axios';
import React, { useState } from 'react'
import CategoryLists from '../components/CategoryLists';
import './Manage.css'   




export default function Manage({url}) {
    const [newCategory, setNewCategory] = useState("")
    const [selectedCategory,setSelectedCategory ] = useState(null)
    const [addingCategory, setAddingCategory] = useState(false)

    function saveCategory(e) {
        e.preventDefault();
        const json = JSON.stringify({name: newCategory});
        axios.post(url + 'products/addcategory.php',json,{
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
            <>
            <h3>Tuoteryhmien ylläpito</h3>
            <div>
                <label>Tuoteryhmät</label>
                <CategoryLists
                url={url}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                />
                <button className="btn btn-dark" type="button" onClick={()=> setAddingCategory(true)}>Add</button>
            </div>
        </>
        )
    } else {
        return (
            <div className="jeesus">
            <h3>Lisää uusi tuoteryhmä</h3>
            <form onSubmit={saveCategory}>
                <div>
                    <label>Tuoteryhmän nimi</label>
                    <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}></input>
                </div>
                <button type="button" onClick={() => setAddingCategory(false)}>Peruuta</button>
                <button type="submit">Tallenna</button>
            </form>
            </div>
        )
    }
  
}