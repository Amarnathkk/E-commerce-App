import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import Newsletterbox from '../Components/Newsletterbox'

function About() {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Fashion Fuel, we believe that fashion is more than just clothing – it’s an expression of your personality. Our mission is to provide trendy, high-quality apparel that keeps you stylish and confident. From casual wear to chic outfits, we offer a wide range of fashionable pieces that cater to every occasion. We carefully curate our collections to bring you the latest trends while ensuring comfort and affordability.</p>
          <p>Customer satisfaction is at the heart of everything we do. We strive to offer a seamless shopping experience with easy navigation, secure payments, and fast delivery. Whether you're updating your wardrobe or looking for a statement piece, Fashion Fuel is your one-stop destination for all things fashion. Fuel your style and shop with us today!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Fashion Fuel, our mission is to make fashion accessible, affordable, and stylish for everyone. We aim to deliver the latest trends without compromising on quality or comfort. Our goal is to inspire confidence by offering a diverse collection that reflects your unique style. We are committed to providing a seamless shopping experience, exceptional customer service, and products that fuel your fashion journey every day.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Fashion Fuel, we prioritize quality at every step. Each product undergoes thorough checks to ensure premium materials, flawless craftsmanship, and customer satisfaction. Our commitment is to deliver stylish, durable, and high-quality fashion you can trust.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>We make shopping easy and hassle-free! With a user-friendly website, secure payment options, and fast delivery, Fashion Fuel ensures a smooth and enjoyable shopping experience from start to finish.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>We prioritize our customers above all else! Our dedicated support team is always ready to assist you with any queries, ensuring a seamless and satisfying shopping experience every time.</p>
        </div>
      </div>
       
       <Newsletterbox/>
       


    </div>
  )
}

export default About