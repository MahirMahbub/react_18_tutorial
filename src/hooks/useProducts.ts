import {useEffect, useState} from "react";
import userService from "../services/product-service.ts";
import {CanceledError} from "../services/api-client.ts";

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}
const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        setLoading(true);
        const {request, cancel} = userService.gets<Product>()
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
    return {products, error, loading, setProducts, setError};
}
export default useProducts;