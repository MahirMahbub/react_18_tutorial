import {useEffect, useState} from "react";
// import axios, {CanceledError} from "axios";
import {CanceledError} from "../services/api-client.ts";
import userService from "../services/user-service.ts";

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
    const [loading, setLoading] = useState<boolean>(false);
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(response => response.json())
    //         .then(data => setProducts(data));
    // }, []);
    // Create an axios call to fetch the data from the API
    useEffect(() => {
        setLoading(true);
        const {request, cancel} = userService.getUsers()
        request.then(response => setProducts(response.data)).then(() => setLoading(false))
            .catch(error => {
                if (error instanceof CanceledError) {
                    return
                } else
                    setError(error.message)
                setLoading(false)
            });
        return () => cancel();
    }, []);
    const uniqueCategories: string[] = products ? ["All Items", ...new Set(products.map(product => product.category))] : [];

    const visibleProducts = selectedCategory !== "All Items" ? products.filter(p => p.category === selectedCategory) : products;
    // if (error) {
    //
    // }
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