import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import CartProduct from '../components/Cart/CartProduct'
import getConfig from '../utils/getConfig'
import { getUserCart } from '../store/slices/cart.slice'



const Cart = () => {

    const dispatch = useDispatch()

    const cartProducts = useSelector(state => state.cart)

    useEffect(() => {
    dispatch(getUserCart())  
    }, [])
    

    const handelCheckout = () => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
        const data = {
            street: "Green St. 1456",
            colony: "Southwest",
            zipCode: 12345,
            city: "USA",
            references: "Some references"}
        
        axios.post(URL, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getUserCart())
        })
        .catch(err => console.log(err))
    }

    return (
        <section>
            <h2>Cart</h2>
            <div className='cart__shopping'>
                {
                    cartProducts?.map(product => (
                        <CartProduct 
                        key={product.id}
                        product={product}
                        />
                    ))
                }
            </div>
            <footer className='footer__total'>
                <span>Total:</span>
                <p>
                    {
                        cartProducts ?
                        cartProducts.reduce((acc, cv) => {
                            return cv.price * cv.productsInCart.quantity + acc
                        }, 0)
                        :
                        0
                    }
                    </p>
                <button className='button__compra' onClick={handelCheckout}>Checkout</button>
            </footer>
        </section>
    )
}

export default Cart
