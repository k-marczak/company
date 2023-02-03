import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { Button } from '../ButtonElement';
import { animateScroll as scroll } from 'react-scroll';
import { TiLocation } from 'react-icons/ti';
import { MdEmail } from 'react-icons/md';
import "./style.css"
import { IoMdArrowUp } from 'react-icons/io';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <Button className="btn" onClick={toggleHome}>
                    Do góry <IoMdArrowUp style={{marginLeft: '10px'}} /> 
                </Button>
                
                <SocialMedia>
                    <SocialMediaWrap>
                       
                        <SocialLogo style={{cursor: 'default'}}>
                        
                        <TiLocation style={{marginRight: '5px', fontSize: '35px'}}/>   <p className="tel"> SAVICON Piotr Szulborski <br/> Ul. Miła 5, 09-402 Płock <br/> NIP 7742956252 REGON 145982048</p>

                        </SocialLogo>
                       

                        
                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
