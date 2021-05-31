import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import api from '../services/api.js'

const Context = createContext()

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [validateToken, setValidateToken] = useState()

    useEffect(() => {
        if (validateToken) {
            setAuthenticated(true)
        }

        setLoading(false)
    }, [])

    async function handleLogin(email, password) {
        return await api.post('/auth', {
            email: email,
            password: password
        }).then(result => {
            setAuthenticated(true)
            setValidateToken(`${result.data.token}`)

            return result
        }).catch(err => {
            console.log('erro', err)
            return err
        })
    }
    async function handleLogout() {
        setAuthenticated(false)
        setValidateToken(undefined)
    }

    if (loading) {
        return loading
    }


    return (
        <Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }