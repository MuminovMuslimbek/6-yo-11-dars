import React, { createContext, useContext, useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import MainLayouts from './Layouts/MainLayouts.jsx'
import AuthLayout from '../layouts/AuthLayout.jsx';

export const ThemeContext = createContext(null)
export const LanguageContext = createContext(null)
export const LogOut = createContext(null)

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [theme, setTheme] = useState('light')
    const [lang, setLang] = useState('en')
    const [logOut, setLogOut] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.state?.token) {
            setToken(location.state.token)
        }
    }, [navigate])

    useEffect(() => {
        const localToken = localStorage.getItem('token')
        if (localToken) {
            setToken(localToken)
        } else {
            navigate('/login')
        }
    }, [])


    useEffect(() => {
        let local = localStorage.getItem('token')
        if (!local) {
            navigate('/login')
        }
    }, [logOut])


    function PrivateRoute({ isAuth, children }) {
        if (!isAuth) {
            navigate('/login')
        }
        return children
    }

    useEffect(() => {
        const body = document.body
        if (theme == 'light') {
            body.classList.remove('dark')
            body.classList.add('light')
        } else {
            body.classList.remove('light')
            body.classList.add('dark')
        }
    }, [theme])

    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <LanguageContext.Provider value={{ lang, setLang }}>
                    <LogOut.Provider value={{ logOut, setLogOut }}>
                        <Routes>
                            <Route index element={<PrivateRoute isAuth={!!token}><MainLayouts><Home /></MainLayouts></PrivateRoute>} />
                            <Route path='/register' element={<AuthLayout><Register /></AuthLayout>} />
                            <Route path='/login' element={<Login />} />
                        </Routes>
                    </LogOut.Provider>
                </LanguageContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}

export default App
