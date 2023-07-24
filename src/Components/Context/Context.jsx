import axios from "axios";
import { createContext, useState, useEffect } from "react";

const Context = createContext();

const MyContext = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [searchedItem, setsearchedItem] = useState([]);

    const addProduct = async (productData) => {
        try {
            const response = await axios.post("http://localhost:3000/addProduct", productData);
            console.log("Product Added", response);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/getAllProducts");
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async (id) => {
        try {
            const data = await axios.delete(`http://localhost:3000/deleteProduct/${id}`);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const searchProduct = async (query) => {
        try {
             const data = await axios.get(`http://localhost:3000/searchProduct?title=`+query);
             setsearchedItem(data.data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Context.Provider value={{ products, searchedItem, addProduct, deleteProduct, searchProduct }}>
            {children}
        </Context.Provider>
    )
}

export { MyContext, Context }