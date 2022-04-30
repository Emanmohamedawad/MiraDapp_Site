import React from 'react';
import {GiSailboat} from 'react-icons/gi';
import {BsDiscord} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const headersocial = () => {
  return (
    <div className='header__social'>
        <a href='https://opensea.io/' target='_blank'><GiSailboat/></a>
        <a href='https://discord.com/' target='_blank'><BsDiscord /></a>
        <a href='https://twitter.com/mibr_0' target='_blank'><BsTwitter /></a>
      
    </div>
  );
}

export default headersocial;
