import { useState } from 'react'
import Header from './components/Header'
import Nosotros from './components/Nosotros'
import Oferta from './components/Oferta'
import Categoria from './components/Categorias'
import Banner from './components/Banner'
import Productos from './components/Productos'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Nosotros/>
      <Oferta/>
      <Categoria/>
      <Banner/>
      <Productos/>
      <Footer/>
    </>
  )
}

export default App
