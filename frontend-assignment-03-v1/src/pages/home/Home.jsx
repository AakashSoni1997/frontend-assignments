import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import "./Home.css"

const Home = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/categories');
                setCategories(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchCategories()
        fetchProducts();
    }, [])


    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response=await axios.get(`https://fakestoreapi.com/products/category/${category}`)
                setCategory(response.data)
                console.log(response.data,"responcedata")
            } catch (error) {
                console.log(error)
            }
        }
        fetchCategory()
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
    }, [])



    return (
        <div className='home'>
            <div className='category'>{categories.map((category) => (
                <>
                    <input type='radio' name='category' />
                    <label >{category}</label>
                </>
            ))}</div>

            {products.map((product) => (
                <div key={product.id}>{product.title}</div>
            ))}
        </div>
    )
}

export default Home