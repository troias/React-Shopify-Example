import React, { useReducer, useEffect } from "react"
import ShopContext from "./ShopContext"
import Client from "shopify-buy"

const defaultReducerState = {
  products: [],
  product: {},
  checkout: {},
  isCartOpen: false,
  test: "testing",
  cart: {},
  collections: [],
}

const client = Client.buildClient({
  domain: "graphql.myshopify.com",
  storefrontAccessToken: `${process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN}`,
})

// Initializing a client to return translated content
const clientWithTranslatedContent = Client.buildClient({
  domain: "your-shop-name.myshopify.com",
  storefrontAccessToken: "your-storefront-access-token",
  language: "ja-JP",
})

const shopReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      }
    case "SET_CART":
      return {
        ...state,
        checkout: action.payload,
      }

    case "FETCH_PRODUCT_BY_ID":
      return {
        ...state,
        product: action.payload,
      }

    case "ClOSE_CART":
      return {
        ...state,
        isCartOpen: false,
      }

    case "OPEN_CART":
      return {
        ...state,
        isCartOpen: true,
      }

    case "FETCH_CHECKOUT":
      return {
        ...state,
        checkout: action.payload,
      }

    case "ADD_LINE_ITEM":
      return {
        ...state,
        checkout: action.payload,
      }
    case "GET_CATEGORY":
      return {
        ...state,
        collections: action.payload,
      }
    default:
      return state
  }
}

export const ShopContextProvider = (props) => {
  const [shopState, dispatch] = useReducer(shopReducer, defaultReducerState)

  useEffect(() => {
    if (localStorage.checkout) {
      fetchCheckOut(localStorage.checkout)
    } else {
      createCheckout()
    }
  }, [])

  const createCheckout = async () => {
    try {
      const checkout = await client.checkout.create()
      const res = await checkout

      localStorage.setItem("checkout", res.id)

      dispatch({
        type: "SET_CART",
        payload: res,
      })
    } catch (error) {}
  }

  const getCollections = async () => {
    try {
      const req = await client.collection.fetchAllWithProducts()
      const res = await req.json()
      console.log("collections", res)

      dispatch({
        type: "GET_CATEGORY",
        payload: res,
      })
    } catch (err) {}
  }

  const addItemToCheckout = async (variantId, quantity, customAttributes) => {
    try {
      const checkoutId = shopState.checkout.id
      const lineItemsToAdd = [{ variantId, quantity, customAttributes }]
      const req = await client.checkout.addLineItems(checkoutId, lineItemsToAdd)
      const res = await req

      dispatch({
        type: "ADD_LINE_ITEM",
        payload: res,
      })
    } catch (error) {}
  }

  const fetchAllProducts = async () => {
    try {
      const products = await client.product.fetchAll()
      const res = await products

      dispatch({
        type: "FETCH_PRODUCTS",
        payload: res,
      })
    } catch (error) {}
  }

  const fetchProductWithId = async (id) => {
    try {
      const product = await client.product.fetch(id)
      const res = await product

      dispatch({
        type: "FETCH_PRODUCT_BY_ID",
        payload: res,
      })
    } catch (error) {}
  }

  const closeCart = () => {
    dispatch({
      type: "ClOSE_CART",
    })
  }

  const openCart = () => {
    dispatch({
      type: "OPEN_CART",
    })
  }

  const fetchCheckOut = async (checkoutID) => {
    try {
      const req = await client.checkout.fetch(checkoutID)
      const res = await req

      dispatch({
        type: "FETCH_CHECKOUT",
        payload: res,
      })
    } catch (error) {}
  }

  const context = {
    products: shopState.products,
    product: shopState.product,
    checkout: shopState.checkout,
    isCartOpen: shopState.isCartOpen,
    test: shopState.test,
    createCheckout,
    openCart,
    closeCart,
    fetchProductWithId,
    fetchAllProducts,
    addItemToCheckout,
    fetchCheckOut,
    getCollections,
  }

  return (
    <ShopContext.Provider value={context}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
