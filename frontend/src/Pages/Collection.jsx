import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../Components/Title'
import ProductItem from '../Components/ProductItem'



function Collection() {

  const { Products, search, showSearch } = useContext(ShopContext)
  const [showfilter, setshowfilter] = useState(false)
  const [filterProducts, setfilterproducts] = useState([])
  const [category, setcategory] = useState([])
  const [subCategory, setSubcategory] = useState([])
  const [sortType, serSortType] = useState('relevant')

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item !== e.target.value))
    }
    else {
      setcategory((prev) => [...prev, e.target.value])
    }
  }

  const togglesubcategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((item) => item !== e.target.value))
    }

    else {
      setSubcategory((prev) => [...prev, e.target.value])
    }
  }

  const applyfilter = () => {

    let productsCopy = Products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }


    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category))
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory))
    }
    setfilterproducts(productsCopy)
  }

  const sortProduct = () => {
    let fpcopy = filterProducts.slice()
    switch (sortType) {
      case 'low-high':
        setfilterproducts(fpcopy.sort((a, b) => (a.price - b.price)))
        break
      case 'high-low':
        setfilterproducts(fpcopy.sort((a, b) => (b.price - a.price)))
        break
      default:
        applyfilter();
        break
    }
  }

  useEffect(() => {
    applyfilter()

  }, [category, subCategory, search, showSearch,Products])

  useEffect(() => {
    sortProduct()

  }, [sortType])





  return (

    // left side--------------


    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options */}

      <div className='min-w-60'>
        <p onClick={() => setshowfilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Category Filter */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>

          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} id="" onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} id="" onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} id="" onChange={toggleCategory} /> Kids
            </p>

          </div>

        </div>


        {/* SubCategory Filter*/}



        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? '' : 'hidden'} sm:block`}>

          <p className='mb-3 text-sm font-medium'>TYPE</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} id="" onChange={togglesubcategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} id="" onChange={togglesubcategory} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} id="" onChange={togglesubcategory} /> Winterwear
            </p>

          </div>

        </div>

      </div>





      {/* Right side --------------*/}

      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>

          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Product Sort */}

          <select onChange={(e) => serSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>

            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>

          </select>
        </div>

        {/* Map Products */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />


            ))

          }

        </div>





      </div>



    </div>
  )
}

export default Collection