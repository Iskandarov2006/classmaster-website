import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/Nav.css'
function Nav() {
    const [modalMessages, setModalMessages] = useState(false)
    const modalMessage = () => {
        setModalMessages(prev => !prev)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <Link to="/" className="navbar-brand d-block d-lg-none">
                    <h1 className="text-primary fw-bold m-0"><img width={'70px'} src="https://classmaster.netlify.app/front/img/logo_white.png" alt="" /></h1>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Bosh sahifa</Link>
                        <Link to="/library" className="nav-item nav-link">Kutubxona</Link>
                    </div>
                    <Link to="/" className="navbar-brand py-3 px-4 mx-3 d-none d-lg-block">
                        <h1 className="text-primary fw-bold m-0"><img width={'70px'} src="https://classmaster.netlify.app/front/img/logo_white.png" alt="" /></h1>
                    </Link>
                    <div className="navbar-nav me-auto py-0">
                        <Link to="/" className="nav-item nav-link" onClick={modalMessage}>Xabar qoldirish</Link>
                        <a href="tel: +998990456773" className="nav-item nav-link"><i class="fa fa-phone-alt" aria-hidden="true"></i> Call</a>
                    </div>
                </div>
            </nav>
            {
                modalMessages ? (
                    <div className="ModalMessage">
                        <div className="form">
                            <form action="">
                                <i class="fa fa-close" onClick={modalMessage} aria-hidden="true"></i>
                                <label htmlFor="name">Ismingiz</label>
                                <input type="text" name='Ismi' placeholder='Ismingizni kiriting' id='name' required />
                                <label htmlFor="phone">Telefon raqam</label>
                                <input type="number" placeholder='Telefon raqamingiz' id='phone' required />
                                <textarea name='Xabar' placeholder='Xabar...'></textarea>
                                <button>Yuborish</button>
                            </form>
                        </div>
                    </div>
                ):''
            }
        </div>
    )
}

export default Nav