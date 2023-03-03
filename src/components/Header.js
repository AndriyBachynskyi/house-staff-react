import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order'
import { AiOutlineClose } from 'react-icons/ai'

const showOrders = (props) => {
    
    let summa = 0

    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    
    return (
        <div>
             {props.orders.map(el => (
                 <Order key={el.id} item={el} onDelete={props.onDelete}/>
             ))}
             <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)} тис. грн</p>
        </div>
    )
}



const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Корзина пуста</h2>
        </div>
    )
}

export default function Header(props) {

    let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакти</li>
                <li>Кабінет</li>
            </ul>
            <FaShoppingCart 
            onClick={()=> setCartOpen(cartOpen = !cartOpen)}
            className={`shop-cart-button ${cartOpen && 'active'}`}
            />
            {cartOpen && (
                <div className='shop-cart'>
                    <AiOutlineClose className='close-modal-icon' 
                    onClick={()=> setCartOpen(cartOpen = !cartOpen)}
                    style={{marginTop: 10}}
                    />
                    {props.orders.length > 0
                    ? showOrders(props)
                    : showNothing()
                }
                </div>
            )}  
        </div>
        <div className='presentation'></div>
    </header>
    )
}
