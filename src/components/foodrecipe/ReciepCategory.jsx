import React, { useState, useEffect, useContext } from 'react';
import CategoryList from './CategoryList';
import DishList from './DishList';
import Pagination from './Pagination';
import { AllMenuContext } from "./AllMenuContext";
function RecipeCategory({ categories, DishesFilterCatogory,addtocartHandler }) {
    const dishes = useContext(AllMenuContext);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Beef");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Set default filtered categories on mount
    useEffect(() => {
        const chickenObj = dishes.filter(meal => meal.strCategory === 'Beef');
        setFilteredCategories(chickenObj);

        setCurrentPage(1);


    }, [DishesFilterCatogory, dishes]);

    const handleCategories = (name) => {
        const filtered = dishes.filter(dish => dish.strCategory === name);
        setFilteredCategories(filtered);
        setSelectedCategory(name);
        setCurrentPage(1);
    };
    const indexOfLastDish = currentPage * itemsPerPage;
    const indexOfFirstDish = indexOfLastDish - itemsPerPage;
    const currentDishes = filteredCategories.slice(indexOfFirstDish, indexOfLastDish);
    const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);


    return (
        <>
            <div>
                <section className="py-5 category-section">
                    <div className="container">
                        <h2 className="text-center mb-4 section-title">Recipe Categories</h2>
                        <CategoryList selectedCategory={selectedCategory} categories={categories} onCategorySelect={handleCategories} />
                    </div>
                </section>
            </div>

            <section className="py-5 special-dishes-section">
                <div className="container">
                    <h2 className="text-center mb-4 section-title">Filtered Dishes</h2>
                    <DishList addtocartHandler={addtocartHandler} filteredCategories={filteredCategories} />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </section>

        </>
    );
}

export default RecipeCategory;
