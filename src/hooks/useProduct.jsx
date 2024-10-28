import React,  {useState, useEffect} from 'react';
import { useApi } from "../context/ApiContext";

    const useProduct = (id) => {
        const [product, setProduct] = useState({});
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);           
        
        useEffect(() => {
            const fetchProduct = async () => {
                try {
                    const response = await useApi.get(`/products/${id}`);
                    setProduct(response.data);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };
            fetchProduct();
        }, [id]);   
        

        return { product, loading, error };
        
    };  
    export default useProduct;