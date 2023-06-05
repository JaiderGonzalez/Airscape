import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className='Navbar'>
        <div className='nav-logo'><a href='#'>AIRSCAPE</a></div>
        <ul className='nav-items'>
            <a href='#'>Servicios</a>
            <a href='#'>Mi Reserva</a>
            <a href='#'>Información</a>
            <a href="#" className="action-help">Centro de Ayuda</a>
            <button className='btnLogin-popup'>Iniciá sesión</button>
        </ul>
    </header>
  )
}