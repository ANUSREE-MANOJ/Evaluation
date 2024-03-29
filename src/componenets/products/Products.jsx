import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true) 
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((res) => {
                setProducts(res.data.products)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false) 
            })
    }, [])

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    className=' ml-20 px-4 py-2  z-50 fixed top-4 left-52  border-none rounded-md'
                    onChange={(e) => setSearchTerm(e.target.value)}
                    
                />
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-10 gap-5 pt-10 '>
                {loading ? (
                    <img src="../images/load.gif" alt="image not found" className='flex items-center ml-[600px] mt-52' />
                ) : (
                    filteredProducts.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))
                )}
            </div>
        </div>
    )
}

export default Products
