import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../App'
import { useTranslation } from 'react-i18next'
import { LogOut } from '../App'
import Dark from '../assets/darkMoon.svg'
import Light from '../assets/lightMoon.svg'
import { useNavigate } from 'react-router-dom'

function Header() {
    const { theme, setTheme } = useContext(ThemeContext)
    const { t } = useTranslation()
    const { logOut, setLogOut } = useContext(LogOut)
    const navigate = useNavigate()

    function handleChangeTheme(e) {
        e.preventDefault()
        if (theme == 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    useEffect(() => {
        let local = localStorage.getItem('token')
        if (!local) {
            navigate('/login')
        }
    }, [logOut])

    function LogOutInHome() {
        let isRight = confirm('Rostdan ham chiqib ketmoqchimisiz??')
        if (isRight) {
            localStorage.clear()
            setLogOut(true)
            navigate('/login')
        }
    }


    return (
        <header className=' bg-white dark:bg-[#2B3844]  py-[24px] text-[#111517] dark:text-white shadow-sm px-4'>
            <div className='flex max-w-[1280px] mx-auto justify-between'>
                <h1 className='text-[24px] font-bold'>{t('world')}</h1>
                <div className='flex gap-[30px]'>
                    <button className='flex gap-[8px] items-center' onClick={handleChangeTheme}><img src={theme == 'light' ? Light : Dark} /> {theme == 'light' ? 'Dark Mode' : 'Light Mode'}</button>
                    <button className='btn bg-white dark:bg-[#202C36] dark:border-white' onClick={LogOutInHome}>{t('logOut')}</button>
                </div>
            </div>
        </header>
    )
}

export default Header
