import React, { useReducer, useEffect } from 'react'
import ShopContext from './ShopContext';
import Client from 'shopify-buy'

const defaultReducerState = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    test: "testing"

}

const client = Client.buildClient({
    domain: 'graphql.myshopify.com',
    storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38'
});

// Initializing a client to return translated content
const clientWithTranslatedContent = Client.buildClient({
    domain: 'your-shop-name.myshopify.com',
    storefrontAccessToken: 'your-storefront-access-token',
    language: 'ja-JP'
});

const shopReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
           return  {
            ...state, 
            products: action.payload
        }
        case "SET_CART":

            return { 
                ...state, 
                checkout: action.payload
            }
            
            case "FETCH_PRODUCT_BY_ID":
            
            return { 
                ...state, 
                product: action.payload
            }

            case "ClOSE_CART":
            
                return { 
                    ...state, 
                    isCartOpen: false
                }

                case "OPEN_CART":
            
                    return { 
                        ...state, 
                        isCartOpen: true
                    }

                    case "ADD_LINE_ITEM":
            
                        return { 
                            ...state, 
                            isCartOpen: true
                        }
        default:
            return state

    }
}

export const ShopContextProvider = (props) => {



    const [shopState, dispatch] = useReducer(shopReducer, defaultReducerState)

    useEffect(() => {
        createCheckout()
        fetchAllProducts()
    }, [])



    const createCheckout = async () => {

        try {
            const checkout = await client.checkout.create()
            const res = await checkout
            console.log(res)
            dispatch({
                type: "SET_CART",
                payload: res
            })
        } catch (error) {

        }


    }

    const addItemToCart = async (variantId, quantity, customAttributes) => {
        try {   
            const checkoutId = ""
            const lineItemsToAdd = [
                {variantId, quantity, customAttributes}
            ]
            const req = await client.checkout.addLineItems(checkoutId, lineItemsToAdd)
            const res = await req

            dispatch({
                type: "", 
                payload: res,
            })
            
        } catch (error) {
            
        }
      
    }

    const fetchAllProducts = async () => {
        try {
            const products = await client.product.fetchAll()
            const res = await products

            dispatch({
                type: "FETCH_PRODUCTS", 
                payload: res

            })
        } catch (error) {
            
        }
     
    }

    const fetchProductWithId = async (id) => {
        try {

            const product = await client.product.fetch(id)
            const res = await product

            dispatch({
                type: "FETCH_PRODUCT_BY_ID", 
                payload: res
            })
        } catch (error) {
            
        }
       
    }

    const closeCart = async () => {

        dispatch({
            type: "ClOSE_CART"
        })
    }

    const openCart = async () => {

        dispatch({
            type: "OPEN_CART"
        })
    }




    const context = {
        products: shopState.products,
        product: shopState.product,
        checkout: shopState.checkout,
        isCartOpen: shopState.isCartOpen,
        test: shopState.test
    }

    return (
        <ShopContext.Provider value={context}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider