import React from 'react';
import './Footer.css';
import {GiSailboat} from 'react-icons/gi';
import {BsDiscord} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

 const  Footer = () => {
    return(
        <footer>
            <a href='#' className='footer__logo'>MIRA</a>

            <div className="footer__social">
            <a href='https://opensea.io/' target='_blank'><GiSailboat/></a>
            <a href='https://discord.com/' target='_blank'><BsDiscord /></a>
            <a href='https://twitter.com/mibr_0' target='_blank'><BsTwitter /></a>
            </div>
            <div className='footer__copyright'>
                <small>&copy; MIRA Community</small>
            </div>
        </footer>
    )

}

export default Footer;