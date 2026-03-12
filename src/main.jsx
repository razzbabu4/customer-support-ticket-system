import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar></NavBar>
    <Banner></Banner>
  </StrictMode>,
)
