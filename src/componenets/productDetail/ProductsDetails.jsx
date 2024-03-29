import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductsDetails() {
    const {id}= useParams()
    const [image,setImage]=useState(0)
    const[products,setProducts]=useState(null)
    useEffect(()=>{
      axios.get(`https://dummyjson.com/products/${id}`)
      .then((res)=>{
           setProducts(res.data)
      })
    })
  return (
    <>
    <div className='  h-96 w-44 mt-24 ml-20'>
     {products?.images.map((image,i)=>(
        <img key={i} src={image} alt="" srcset="" onClick={()=>setImage(i)} className='cursor-pointer'/>
     ))}
    </div>
    <div className='ml-96 relative bottom-64'>
        <img src={products?.images[image]} alt="images is not found" className='h-64 w-72'/>
   
    </div>
    
    <div className='ml-[800px] relative bottom-[500px] w-[500px]'>
    <h1 className='text-2xl text-red-600 font-bold mt-2'>{products?.title}</h1>
    <h1 className='font-semibold mt-2' >{products?.brand}</h1>
     <p className='mt-2'>{products?.description}</p>
      <div className='flex justify-between mt-4'>
      <p className='font-bold text-green-900'>${products?.price}</p>
       <p className='font-bold text-blue-600'>{products?.discountPercentage}%</p>
      </div>
    </div>
    </>
   
  )
}

export default ProductsDetails