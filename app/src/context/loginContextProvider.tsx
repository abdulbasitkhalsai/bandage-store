'use client'
import React, { ReactNode, useState } from 'react'
import LoginContext from './loginContext'

const LoginContextProvider = ({children} : {children: ReactNode}) => {
    const [click, setClick] = useState(false)
  return (
    <LoginContext.Provider value={{open : click, onClose : setClick }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider

