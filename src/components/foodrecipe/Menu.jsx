import React, { useEffect, useState } from 'react';
import './Menu.css';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner';
import SpecialProduct from './SpecialProduct';
import axios from 'axios';
import ReciepCategory from './ReciepCategory';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c';
const API_URL_catogory = 'https://www.themealdb.com/api/json/v1/1/categories.php';
function Menu() {
    const [dishes, setDishes] = useState([]);
    const [dishesCatogory, setDishesCatogory] = useState([]);
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
    useEffect(() => {
       
        axios.get(API_URL_catogory)
            .then(response => {
                console.log(response);
                setDishesCatogory(response.data.categories);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })
            
    }, []);
    return (
        <div className="menu-food">
            <NavBar />
            <Banner />
            <SpecialProduct Loading={loading} dishes={dishes} />
            <ReciepCategory dishes={dishes}  categories={dishesCatogory} />
        </div>
    );
}

export default Menu;
