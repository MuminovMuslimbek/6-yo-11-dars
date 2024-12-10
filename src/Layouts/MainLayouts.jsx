import React from 'react'
import Header from '../Components/Header.jsx'

const MainLayouts = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default MainLayouts
