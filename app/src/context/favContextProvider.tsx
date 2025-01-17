'use client'
import React, { ReactNode, useState } from 'react'
import FavContext from './favContext'

const FavContextProvider = ({children} : {children: ReactNode}) => {
    const [fav, setFav] = useState(0)
  return (
    <FavContext.Provider value={{fav, setFav}}>
         {children}
    </FavContext.Provider>
  )
}

export default FavContextProvider
