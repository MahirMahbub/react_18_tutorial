import {useEffect, useState} from "react";
import axios from "axios";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [selectedCategory, setSelectedCategory] = useState("All Items");
    const [error, setError] = useState<string>("");
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(response => response.json())
    //         .then(data => setProducts(data));
    // }, []);
    // Create an axios call to fetch the data from the API
    useEffect(() => {
        axios.get('https://fakestoreapi.com/prosducts')
            .then(response => setProducts(response.data)).catch(error => setError(error.message));
    }, []);
    const uniqueCategories: string[] = products ? ["All Items", ...new Set(products.map(product => product.category))] : [];


    const visibleProducts = selectedCategory !== "All Items" ? products.filter(p => p.category === selectedCategory) : products;
    if (error) {
        return <p className="text-danger">{error}</p>
    }
    return (
        <div>
            <select className="form-select" onChange={(event) => setSelectedCategory(event.target.value)}>
                {uniqueCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <h2>Products</h2>
            <ul>
                {visibleProducts.map(product => (
                    <li key={product.id}>{product.title}</li>
                ))}


            </ul>
        </div>

    );
};