import React from 'react'
import degree from '../img/business-3d-black-graduation-cap.png'

export default function Nav() {
    return (
        <div>
            <nav class="navbar">
                <div class="logo"><img src={degree} height={20} /> Edumem</div>
                <div class="nav-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Courses</a>
                    <a href="#">Instructor</a>
                    <a href="#">Contact</a>
                </div>
                <div className="search">
                    <a href="#"><span class="material-symbols-outlined">search</span></a>
                </div>
                <div className="cart">
                <a href="#"><span class="material-symbols-outlined">local_mall</span></a>
                </div>
                <div class="login-register">
                    <a href="#">Login/Register</a>
                </div>
            </nav>

        </div>
    )
}
