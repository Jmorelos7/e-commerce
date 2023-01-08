import React from 'react'

const PurchaseCard = ({purchase}) => {

    const datePurchase = new Date(purchase.createdArt)


  return (
    <article style={{padding: "20px", border: "1px solid black"}}>
        <header>
            <h3>{datePurchase.toLocaleDateString()}</h3>
            <div>
                <ul>
                    {
                        purchase.cart.products.map(prod => (
                            <li key={prod.id}>
                                <h4>{prod.title}</h4>
                                <span>{prod.productsInCart.quantity}</span>
                                <span>{prod.price}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </header>
    </article>
  )
}

export default PurchaseCard