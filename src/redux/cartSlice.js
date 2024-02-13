import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const newItemAddedToCart = {
                id: uuid(),
                itemId: action.payload.item.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.item.price,
            }
            state.cartItems.push(newItemAddedToCart); 
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems
            .filter((cartItem) => 
            cartItem.id !== action.payload.cartItemId
            )
        },
        removeAllItemsFromCart: (state) => {
            state.cartItems = [];
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart, removeAllItemsFromCart } = cartSlice.actions;
export default cartSlice.reducer
