import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './styles.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Registrarse");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Registrarse" ? (
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="Nombre" />
                    </div>
                ) : null}

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Correo o Usuario" />
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Contraseña" />
                </div>
            </div>

            {action === "Registrarse" ? null : (
                <div className="olvido-password">
                    <Link to="/password-recovery">¿Olvidaste tu contraseña?</Link>
                </div>
            )}

            <div className="submit-container">
                <div className={action === "Iniciar Sesión" ? "submit gray" : "submit"} onClick={() => { setAction("Registrarse") }}>Registrarse</div>
                <div className={action === "Registrarse" ? "submit gray" : "submit"} onClick={() => { setAction("Iniciar Sesión") }}>Iniciar Sesión</div>
            </div>
        </div>
    );
}

export default LoginSignup;
