import React from 'react'
import { createContext, useState , useEffect} from 'react'
import axios from 'axios';
export const AllMenuContext = createContext()
const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c';

export function AllMenu({ children }) {
    const [dishes, setDishes] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true);
        axios.get(API_URL)
            .then(response => {
                setDishes(response.data.meals);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                setloading(false);
            });
    }, []);
    return (
        <AllMenuContext.Provider value={dishes}>
            {children}
        </AllMenuContext.Provider>
    )
}

export default AllMenu
