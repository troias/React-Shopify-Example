import React, {useContext} from 'react'
import ShopContext from '../context/ShopContext'
 const ProductPage = () => {


    const { products} = useContext(ShopContext)
    // console.log(products)
    const finalProduct = []
    for (let x in products) {
        finalProduct.push({
            id: x, 
            description: products[x].description, 
            images: products[x].images

        })
    }
  
    const finalImages = []
    // finalProduct.map(x => { return(
    //     {}
    // )})
    // console.log(finalProduct)
    console.log(finalProduct[1])
    return (
        <div>
            Product Page
        {finalProduct.map(x => { return (
            <p> {x.id} 
            {x.description} 
            {console.log(x.images)}
            {/* {x.images.map(img => <img alt="" src={img}/>)} */}
            </p>
           
        )})}
            
        </div>
    )
    
}

export default ProductPage
