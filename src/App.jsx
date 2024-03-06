import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarComponenet from './component/NavbarComponent'
import FooterComponent from './component/FooterComponent'
import MainComponent from './component/MainComponent'

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavbarComponenet className="flex-none" />
      <MainComponent className="flex-1 overflow-y-auto flex justify-center items-center" />
      <FooterComponent className="flex-none" />
</div>  
  )
}

export default App
