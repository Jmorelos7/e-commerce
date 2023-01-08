import axios from 'axios'
import React, { useState } from 'react'
import { getUserCart } from '../../store/slices/cart.slice'
import { useDispatch, useSelector } from 'react-redux'
import getConfig from '../../utils/getConfig'

const ProductDescription = ({product}) => {

    const cart = useSelector(state => state.cart)

    const [counter, setCounter] = useState(1)

    const handleMinus = () =>{
        if(counter - 1 > 0){
            setCounter(counter - 1)
        }
    }

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const dispatch = useDispatch()

    const handleCart = () => {
        const URL ='https://e-commerce-api.academlo.tech/api/v1/cart'
        const data = {
            id: product.id,
            quantity: counter}

        axios.post(URL, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getUserCart())
        })
        .catch(err => {
            if(err.response.status === 400){
            const URLPatch = 'https://e-commerce-api.academlo.tech/api/v1/cart'    
            const prevQuantity = cart.filter(e => e.id === product.id)[0].produtsInCart.quantity
            
            const data ={
                id: product.id,
                newQuantity: prevQuantity + counter 
            }
            
            axios.patch(URLPatch, data, getConfig)
            .then(res => {
                console.log(res.data)
                dispatch(getUserCart())
            })
            .catch(err => console.log(err))  
            }
        })
    }


  return (
    <article>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <section>
            <span>price</span>
            <h3>{product?.price}</h3>
        </section>
        <section>
        <h3>Quantity</h3>
        <div>
            <div onClick={handleMinus}>-</div>
            <div>{counter}</div>
            <div onClick={handlePlus}>+</div>
        </div>
        </section>
        <button onClick={handleCart}>Add to Card <i className="fa-solid fa-cart-plus"></i></button>
    </article>
  )
}

export default ProductDescription