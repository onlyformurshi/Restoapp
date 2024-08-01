import React, { useEffect, useState } from 'react';
import './Menu.css';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner';
import SpecialProduct from './SpecialProduct';
import ReciepCategory from './ReciepCategory';
import {AllMenu} from './AllMenuContext';
function Menu() {
    const [loading, setloading] = useState(false);
    return (
        <div className="menu-food">
            <NavBar />
            <Banner />
            <AllMenu>
                <SpecialProduct Loading={loading} />
                <ReciepCategory  />
            </AllMenu>
        </div>
    );
}

export default Menu;
