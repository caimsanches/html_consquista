import React from "react";
import './style.css';

function SignIn()
{
    return(
        <div class="login-area">
                            <div class="form-area">
                                <form action="" method="post">
                                    <div class="form-content">
                                        <div class="input-area">
                                            <label for="email">E-mail</label>
                                            <input type="email" name="email" id="email"/>
                                        </div>
                                        <div class="input-area">
                                            <label for="password">Senha</label>
                                            <input type="password" name="password" id="password"/>
                                        </div>
                                    </div>
                                    <div class="form-text">
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            Esqueceu a senha ?
                                        </a>
                                    </div>
                                    <div class="form-btn-area">
                                        <button class="btn" type="submit">ENTRAR</button>
                                    </div>
                                </form>
                            </div>
                        </div>
    );
    
}

