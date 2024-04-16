import {useState} from "react";
// import axios, {CanceledError} from "axios";

import useProducts from "../hooks/useProducts.ts";



export const ProductList = () => {
    const {products, error, loading, setProducts, setError} = useProducts();
    const [selectedCategory, setSelectedCategory] = useState("All Items");
    const uniqueCategories: string[] = products ? ["All Items", ...new Set(products.map(product => product.category))] : [];

    const visibleProducts = selectedCategory !== "All Items" ? products.filter(p => p.category === selectedCategory) : products;

    return (
        <div>

            <select className="form-select" onChange={(event) => setSelectedCategory(event.target.value)}>
                {uniqueCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            {loading && <div className="spinner-border"></div>}
            {!error && !loading ?
                <>
                    <h2>Products</h2>
                    <ul>
                        {visibleProducts.map(product => (
                            <li key={product.id}>{product.title}</li>
                        ))}


                    </ul>
                </> : <p className="text-danger">{error}</p>}
        </div>

    );
};