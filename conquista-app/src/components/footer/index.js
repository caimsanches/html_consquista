import React from 'react';
import './style.css';

function Footer(){
    return(
        <footer class="footer">
        <div class="footer-left"></div>

        <div class="footer-center">
            <div class="redes-sociais">
                <a href="http://facebook.com/caio.cesa.7" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-facebook"></i>
                </a>
                <a href="https://instagram.com/caimsanches" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-instagram"></i>
                </a>
                <a href="http://https://twitter.com/cain_sanches" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/caio-csanches/" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-linkedin"></i>
                </a>

            </div>

            <div class="footer-text">
            <small>por Caio Sanches</small> 
            </div>
        </div>

        <div class="footer-right"></div>
    </footer>
    );
}

export default Footer;



/*
import React from 'react';

function Footer(){
    return();
}

export default Footer;
*/