import React, { useState,useEffect } from "react";
import axios from "axios";

export default function CategoryLists({url,selectedCategory,setSelectedCategory}) {
    const [categories,setCategories] = useState([]);

    useEffect(() => {
        axios.get(url + 'products/categories.php').then((response) => {
            const json = response.data;
            if (json) {
                if (selectedCategory === null ) {setSelectedCategory(json[0]);
                }
                setCategories(json);
            }
        }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    },[selectedCategory])

    function onCategoryChange(value) {
        setSelectedCategory(categories.filter(item => item.tuoteryhma_id === value));
    }

    return (
        <select value={selectedCategory?.tuoteryhma_id} onChange={(e) => onCategoryChange(e.target.value)}>
            {categories.map((category) => (
                <option key={category.tuoteryhma_id} value={category.tuoteryhma_id}>{category.tuoteryhma_nimi}</option>
            ))}
        </select>
    )
}