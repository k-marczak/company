import React from 'react'
import Icon1 from '../../images/chopin.jpeg'
import Icon2 from '../../images/fedex.png'
import Icon4 from '../../images/athens.jpeg'
import Icon5 from '../../images/rzeszow.jpg'
import Icon6 from '../../images/chopin.jpg'
import Icon7 from '../../images/fedex.jpg'
import Icon8 from '../../images/krk.jpg'
import Icon9 from '../../images/krakow.jpg'
import Icon10 from '../../images/rzeszow.png'
import Icon11 from '../../images/krakow.jpg'
import Icon12 from '../../images/bahamy.jpg'
import Icon13 from '../../images/aia_logo.jpg'
import Icon14 from '../../images/rzeszow_logo.jpg'
import Icon15 from '../../images/bahamy_logo.png'
import './style.css'
import { GrGithub } from 'react-icons/gr';
import { GiNetworkBars } from 'react-icons/gi';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, LinksContainer, ProjectLink } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Kluczowi partnerzy</ServicesH1>
          
            <ServicesWrapper>
                
                    <ServicesCard>
                    
                        <ServicesIcon src={Icon1} />
                       
                        <ServicesH2>Lotnisko Chopina - WARSZAWA</ServicesH2>
                        
                        
                        <ServicesIcon src={Icon6}  style={{height: '100%', maxWidth: '110px'}}/>
                       
                    
                    </ServicesCard>
               
                <ServicesCard>
                    <ServicesIcon src={Icon7} />
                    <ServicesH2>Fedex Charles De Gaule </ServicesH2>
                    

                    <ServicesIcon src={Icon2}  style={{height: '100%', maxWidth: '150px'}} />
                    

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon8} />
                    <ServicesH2>Kraków Airport im. Jana Pawła II</ServicesH2>
                    

                    <ServicesIcon src={Icon9}  style={{height: '100%', maxWidth: '110px'}}/>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} style={{height: '100%', width: '380px'}} />
                    <ServicesH2>Athens International Airport</ServicesH2>
                  

                    
                    <ServicesIcon src={Icon13}  style={{height: '100%', maxWidth: '230px'}} />

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon10} />
                    <ServicesH2>Rzeszów International Airport</ServicesH2>


                    <ServicesIcon src={Icon14} style={{height: '100%', maxWidth: '150px'}} />

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon12} />
                    <ServicesH2>Lynden Pindling International Airport</ServicesH2>
                    

                    <ServicesIcon src={Icon15} style={{height: '100%', maxWidth: '150px'}} />


                </ServicesCard>
                
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
