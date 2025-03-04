import { createContext, useState } from "react";
import { products } from "../assets/assets/assets";

export const ShopContext = createContext();


const ShopContextProvider =(props)=>{

   const currency = `$`;
   const deliveryFees = 10;
 
    const value = {
     products ,currency , deliveryFees
    }

    return(
        <ShopContext.Provider value={value} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider