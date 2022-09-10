import React, { useEffect } from 'react'
import './App.css'
import { Navbar } from './components'
import { HomePage } from './pages'
export const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  )
}
