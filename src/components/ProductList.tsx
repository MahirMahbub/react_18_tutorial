import {useEffect, useState} from "react";
import axios, {CanceledError} from "axios";

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
        const controller = new AbortController();
        axios.get('https://fakestoreapi.com/products', {signal: controller.signal})
            .then(response => setProducts(response.data))
            .catch(error => {
                if (error instanceof CanceledError) {
                    return
                } else
                setError(error.message)
            });
        return () => controller.abort();
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