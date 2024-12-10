import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { useTranslation } from 'react-i18next'
import { LanguageContext } from '../App'
import search from '../assets/search.svg'
import searchDark from '../assets/searchDark.svg'
import Cards from '../Components/Cards.jsx'

function Home() {
  const { t, i18n } = useTranslation()
  const { lang, setLang } = useContext(LanguageContext)
  const { theme, setTheme } = useContext(ThemeContext)

  function handleChangeLang(event) {
    event.preventDefault()
    setLang(event.target.value)
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div className='bg-[#FAFAFA] dark:bg-[#202C36] py-[48px] px-4'>
      <div className='max-w-[1280px] w-full mx-auto flex justify-between'>
        <div className='input shadow-md flex items-center gap-[24px] bg-transparent max-w-[480px] w-full dark:bg-[#2B3844]'>
          <img src={theme == 'light' ? search : searchDark} />
          <input className='w-full text-[#111517] dark:text-white dark:placeholder:text-white' type="search" placeholder={t("placeholder")} />
        </div>
        <select value={lang} className="select select-ghost w-full max-w-xs dark:text-white bg-white shadow-md text-[#111517] dark:bg-[#2B3844]" onChange={handleChangeLang}>
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="uz">Uzbek</option>
        </select>
      </div>
      <Cards/>
    </div>
  )
}

export default Home
