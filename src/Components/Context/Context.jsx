import axios from "axios";
import { createContext, useState, useEffect } from "react";

const Context = createContext();

const MyContext = ({ children }) => {

    const [products, setProducts] = useState([]);

    const addProduct = async (productData) => {
        try {
            console.log(productData);

            await axios.post("http://localhost:3000/addProduct", productData);
    
        } catch (error) {
            console.log(error);
        }
    }

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/getAllProducts");
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <Context.Provider value={{ products, addProduct }}>
            {children}
        </Context.Provider>
    )
}

export { MyContext, Context }