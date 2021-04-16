import React, { createContext, useState } from 'react'

export const RankingContext = createContext()

export default function RankingProvider({children}){
    const [rank, setRank] = useState(25)
    
    return(
        <RankingContext.Provider value={{rank, setRank}}>
            {children}
        </RankingContext.Provider>
    )
}
