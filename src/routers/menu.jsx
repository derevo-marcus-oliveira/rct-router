import React from "react";
import "./menu.css";
import {
    Outlet,
    Link,
} from "react-router-dom";

function AtualizaMenu() {
    var menu = document.getElementsByClassName('barra');

    if (menu[0].classList.value.search("ver") < 0) {
        menu[0].classList.add('ver')
    }
    else {
        menu[0].classList.remove('ver')
    }
}


export default function Menu() {
    return (
        <div id="menu">

            <div className="view">
                <Outlet />
            </div>

            <div className="barra">
                <span onClick={() => AtualizaMenu()}>
                    <i></i>
                </span>
                <ul>
                    <li>
                        <i></i>                        
                        <Link to={'/'}>inicio</Link>
                    </li>
                    <li>
                        <i></i>
                        
                        <Link to={'animais'}>animais</Link>

                    </li>
                    <li>
                        <i></i>
                        <Link to={'fotos'}>fotos</Link>
                        
                    </li>
                    <li>
                        <i></i>
                        <Link to={'contatos'}>contatos</Link>
                        
                    </li>
                </ul>
            </div>

        </div>
    )
}