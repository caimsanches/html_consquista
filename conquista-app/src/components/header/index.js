import React from "react";
import './style.css';

function Header(){
    function handleLogin(){
        let descricaoArea = document.querySelector(".description-area");
    descricaoArea.classList.add("hide");

    let signupAreaExist = document.querySelector(".banner-right .login-area");

    if(!signupAreaExist){
    let signupArea = document.querySelector('.model .login-area').cloneNode(true);
    document.querySelector('.banner-right').append(signupArea);
    }

    }

    function handleSignUp(){
        let descricaoArea = document.querySelector(".description-area");
    descricaoArea.classList.toggle("hide");
    let signupAreaExist = document.querySelector(".banner-right .login-area");
    //signupAreaExist.classList.toggle('hide');
    signupAreaExist.remove();

    }

    return(
        <div class="header">
            <nav>
                <ul>
                    <li>
                        <button class="btn" onclick="handleLogin()">Sign in</button>
                    </li>
                    <li>
                        <button class="btn" onclick="handleSignUp()">Sign Up</button>
                    </li>
                    <div class="dropdown-content" id="loginDropdown">
                        
                    </div>
                </ul>
            </nav>
           
        </div>

    );
}

export default Header;