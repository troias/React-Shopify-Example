import React, {useContext, useEffect} from 'react'
import ShopContext from '../context/ShopContext'

 const HomePage = () => {

    const {test } =  useContext(ShopContext)
    return (
        <div>
            
            {test}
        </div>
    )
}

export default HomePage
