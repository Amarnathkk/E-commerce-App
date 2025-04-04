import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react'
import Title from './Title'
import ProductItem from './ProductItem'

function Relatedproducts({ category, subCategory }) {
    const { Products } = useContext(ShopContext)
    const [related, setRelated] = useState([])


    useEffect(() => {
        if (Products.length > 0) {
            let productscopy = Products.slice()
            productscopy = productscopy.filter((item) => category === item.category)
            productscopy = productscopy.filter((item) => subCategory === item.subCategory)
            setRelated(productscopy.slice(0, 5))

        }
    }, [Products])



    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={"RELATED"} text2={"PRODUCTS"} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    related.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    ))
                }
            </div>
        </div>
    )
}

export default Relatedproducts