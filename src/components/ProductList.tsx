import {useEffect, useState} from "react";
 interface Product{
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
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);
    const uniqueCategories: string[]= products? ["All Items", ...new Set(products.map(product => product.category))]: [];



    const visibleProducts = selectedCategory!== "All Items"? products.filter(p => p.category === selectedCategory): products;
    console.log(visibleProducts);
    return (
        <div>
            <select className="form-select" onChange={(event)=> setSelectedCategory(event.target.value)}>
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