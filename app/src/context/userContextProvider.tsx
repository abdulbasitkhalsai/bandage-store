'use client'
import React, { ReactNode, useState } from 'react'
import UserContext from './userContext'


const UserContextProvider = ({children} : {children : ReactNode}) => {
    const [User, SetUser] = useState<string | null>(null)
  return (
    <UserContext.Provider value={{User, SetUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
