import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'

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

interface Props {}

const FormData: React.FC<Props> = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [sortAscending, setSortAscending] = useState<boolean>(true);
 
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(jsonData => setProducts(jsonData.products));
  }, []);
    
console.log(products)
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
            <button className="FormButton" onClick={handleSort}>Sort by Price</button>
            <Table striped bordered hover>
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