import express from 'express'
import {placeOrder, allOrders, userOrders, updatestatus } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin features
orderRouter.post("/list", adminAuth, allOrders)
orderRouter.post("/status", adminAuth, updatestatus)


// Payment Features 
orderRouter.post("/place", authUser, placeOrder)
orderRouter.post("/stripe", authUser, placeOrder)
orderRouter.post("/razorpay", authUser, placeOrder)

// User Feature
orderRouter.post("/userorders", authUser, userOrders)



export default orderRouter