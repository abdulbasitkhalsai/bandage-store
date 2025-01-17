'use client'
import LoginContext from '@/context/loginContext'
import UserContext from '@/context/userContext'
import React, { useContext, useState } from 'react'

const Login = () => {
    const [username, setUserName] = useState<string | null>(null)
    const [pwd, setPwd] = useState<string | null>(null)
    const obj = useContext(UserContext)
    const pop = useContext(LoginContext)
    function handleSubmit () {
        if (obj?.SetUser) {
            obj.SetUser(username)
            pop?.onClose(false)
        } else {
            console.log('No UserContext available')
    }
}

  return (
    pop?.open && <div className='flex justify-center items-center bg-black fixed opacity-50 h-full w-screen top-0 z-50'>
        <div className='flex flex-col justify-center items-center gap-5 bg-slate-400 h-[400px] w-[300px] rounded-md relative z-50'>
        <button className='absolute bottom-5 right-6 text-red-700 bg-white px-3 py-2' onClick={()=> pop?.onClose(false)}>Close</button>  
            <input placeholder='User Name' value={username!} onChange={(e)=> {setUserName(e.target.value)}} type="text" className='px-3 py-2' />
            <input placeholder='Password' value={pwd!} onChange={(e)=> {setPwd(e.target.value)}} type="password" className='px-3 py-2' />
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Login