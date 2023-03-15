import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const ProtectedRoute = ({children}) => {
    // can not access when you not logged in
    const {user} = UserAuth()
    if(!user) 
        return <Navigate to='/' />
    else
        return (children)
}

export default ProtectedRoute