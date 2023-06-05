import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className="wrapper">
        <div className="form-box">
            <a>Login</a>
            <form className="#">
                <div className="input-box">
                    <span className='icon'><ion-icon name="mail"/> </span>
                    <input type='email' required/>
                    <label>Correo</label>
                </div>
                <div className="input-box">
                    <span className='icon'><ion-icon name="lock-closed"/></span>
                    <input type='password' required/>
                    <label>Contraseña</label>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>
                    Recordar</label>
                    <a href="#">Olvidaste tu contraseña?</a>
                </div>
                <button type="submit"className="btn">Login</button>
                <div className="login-register">
                    <p>No te has registrado?<a href='#' className='register-link'> Registrar</a></p>
                </div>
            </form>
        </div>
        <div className="form-box-register">
            <a>Registrar</a>
            <form className="#">
                <div className="input-box">
                    <span className='icon'><ion-icon name="person"/> </span>
                    <input type='Username' required/>
                    <label>Usuario</label>
                </div>
                <div className="input-box">
                    <span className='icon'><ion-icon name="mail"/> </span>
                    <input type='Username' required/>
                    <label>Correo</label>
                </div>
                <div className="input-box">
                    <span className='icon'><ion-icon name="lock-closed"/></span>
                    <input type='password' required/>
                    <label>Contraseña</label>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>
                    I agree to teh terms & conditions?</label>
                </div>
                <button type="submit"className="btn">Login</button>
                <div className="login-register">
                    <p>Ya tienes una cuenta?<a href='#' className='register-link'> Login</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Footer