'use client'

import React, { useEffect, useState } from 'react'
import { Product } from '../../types/products'
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions'
import Swal from 'sweetalert2';

const CartPage = () => {

    const [cartItems, setCartItems] = useState<Product[]>([])
    useEffect(() => {
        setCartItems(getCartItems())
    }, []);

    const handleRemove = (id : string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if(result.isConfirmed) {
                removeFromCart(id)
                setCartItems(getCartItems())
                Swal.fire("Removed!", "Item has been removed.", "success");
            }
        })
    }

//const handleQuantityChange = (id: string, quantity : number) {
  //  updateCartQuantity(id, quantity);
   // setCartItems(getCartItems())
//} ;


    
    return (
        <div>
            <div>
                {cartItems.map((item) => (
                    <div key={item._id}>{item.name}</div>
                ))}
            </div>
        </div>
    );
};

export default CartPage;
