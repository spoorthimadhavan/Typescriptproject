import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const FormData = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [sortAscending, setSortAscending] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            //  The try statement allows you to define a block of code to be tested for errors while it is being executed.
            try {
                /*axios.get method is used to make a GET request to the https://dummyjson.com/products API. 
                The method returns a promise that is being awaited and the result is being stored into response variable. 
                The response.data contains the json data that is being set to the component state.*/
                const response = await axios.get('https://dummyjson.com/products');
                setProducts(response.data.products);
            } catch (error) {
                console.log(error); //If an error is thrown, the catch statement allows you to handle the error.
            }
        })();
        /*  the API request is made inside an IIFE (Immediately Invoked Function Expression), 
         this function is invoked immediately after it is defined and 
         it contains the async function that makes the API call and updates the component state with the returned data. */

    }, []);

    const handleSort = () => {
        setSortAscending(!sortAscending);
        setProducts(
            products
                .slice()
                .sort((a, b) => (sortAscending ? a.price - b.price : b.price - a.price))
        );
    };

    return (
        <div>
            <button className="Form-button" onClick={handleSort}>Sort by Price</button>
            <Table striped >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Discount Percentage</th>
                        <th>Rating</th>
                        <th>Stock</th>
                        <th>Brand</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {products
                        .slice()
                        .map((product, index) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.discountPercentage}</td>
                                <td>{product.rating}</td>
                                <td>{product.stock}</td>
                                <td>{product.brand}</td>
                                <td>{product.category}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    )
}
export default FormData;