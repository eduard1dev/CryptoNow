import React, { createContext, useState } from 'react'
import { set } from 'react-native-reanimated'

export const FavCryptosContext = createContext()

export default function FavCryptosProvider({children}){
    const [favCryptos, setFavCryptos] = useState([])

    const handleAddFavCrypto = (newIdFavCrypto) => {
        setFavCryptos(oldstate => [...oldstate, newIdFavCrypto])
    }

    const handleRemoveFavCrypto = (newRemoveIdFavCrypto) => {
        const newArray = favCryptos.filter(item => item != newRemoveIdFavCrypto)
        setFavCryptos(newArray)
    }
    
    return(
        <FavCryptosContext.Provider value={{favCryptos, handleAddFavCrypto, handleRemoveFavCrypto}}>
            {children}
        </FavCryptosContext.Provider>
    )
}