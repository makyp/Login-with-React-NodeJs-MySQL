import React from "react";
import { Link } from 'react-router-dom';
import './styles.css';
import email_icon from '../Assets/email.png';
import arrow_icon from '../Assets/volver.png';

const PasswordRecovery = () => {
    return (
        <div className="container">
            <div className="back-to-login">
                <Link to="/" className="button-link">
                    <div className="button">
                        <img src={arrow_icon} alt="Back Arrow" className="arrow-icon" />
                        Volver
                    </div>
                </Link>
            </div>
            <div className="header">
                <div className="text">Recuperar Contraseña</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Correo electrónico" />
                </div>
            </div>

            <div className="submit-container">
                <button className="submit">Enviar Correo</button>
            </div>

            
        </div>
    );
}
export default PasswordRecovery;