import React, { useEffect, useState } from 'react';
import './Menu.css';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner';
import SpecialProduct from './SpecialProduct';
import axios from 'axios';
import ReciepCategory from './ReciepCategory';
import { AllMenu } from './AllMenuContext';
import AddToCart from '../AddToCart';
const API_URL_catogory = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const API_URL_filter_catogory = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef'
function Menu() {
    const [dishesCatogory, setDishesCatogory] = useState([]);
    const [loading, setloading] = useState(false);
    const [DishesFilterCatogory, setDishesFilterCatogory] = useState([]);
    const [CartItems, setCartItems] = useState([{}]);
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
    useEffect(() => {
        axios.get(API_URL_filter_catogory)
            .then(response => {
                console.log(response, "response filter category");
                setDishesFilterCatogory(response.data.meals);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })
    }, []);

    const addtocartHandler = (img, title) => {
        console.log('AddtocartHandler', img, title)
        setCartItems(
           [ ...CartItems,{
                "img": img,
                "title": title
            }]
        )
        console.log(CartItems, "CrtItems")

    }
    return (
        <div className="menu-food">
            <NavBar />
            <AddToCart CartItems={CartItems} />
            <Banner />
            <AllMenu>
                <SpecialProduct addtocartHandler={addtocartHandler} Loading={loading} />
                <ReciepCategory addtocartHandler={addtocartHandler} DishesFilterCatogory={DishesFilterCatogory} categories={dishesCatogory} />
            </AllMenu>
        </div>
    );
}

export default Menu;
