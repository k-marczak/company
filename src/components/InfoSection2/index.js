import React, {useEffect} from 'react'
import obrazek1 from '../../images/projectsc.png'
import obrazek2 from '../../images/settingsc.png'
import obrazek3 from '../../images/checkmark.png'
import obrazek4 from '../../images/220px-React-icon.svg.png'
import obrazek5 from '../../images/node.png'
import obrazek6 from '../../images/java-icon.svg'
import obrazek7 from '../../images/express.svg'
import obrazek8 from '../../images/github.png'
import obrazek10 from '../../images/mongo.svg'
import obrazek11 from '../../images/styled.png'
import obrazek12 from '../../images/Firebase.png'
import {Img, Features, FeaturesContent, Box, Box1, SkillsWrapper, Skills, Skills1 } from './InfoElements'

import Aos from 'aos';
import "aos/dist/aos.css"



const InfoSection2 = ({lightBg, id, imgStart, topLine, lightText, heading, darkText, description, buttonLabel, alt, primary, dark, dark2}) => {
    
    useEffect(() => {
        Aos.init({ duration: 2800, animatedClassName: 'aos-animate', once: true });
    }, []);
    
    return (
        <>
            <Features lightBg={lightBg} id={id}>
                <SkillsWrapper>
             
                    <h1 class="skills_heading" style={{marginBottom: '100px'}}>Usługi</h1>

                    <FeaturesContent>
                        <Box data-aos="fade" data-aos-delay="30">
                            <Img  src={obrazek1} alt={alt}/>
                            <Skills style={{marginTop: '1px'}}>KONCEPCJA I PROJEKTOWANIE</Skills>
                            <Skills1 style={{marginTop: '20px'}}>Doradzamy na etapie koncepcji najbardziej optymalne rozwiązania które przekuwamy w kompleksowy projekt wielobranżowy.</Skills1>
                        </Box>
                        <Box data-aos="fade" data-aos-delay="50">
                            <Img src={obrazek2} alt={alt}/>
                            <Skills style={{marginTop: '15px'}}>WYKONAWSTWO</Skills>
                            <Skills1 style={{marginTop: '30px'}}>Kompleksowo wykonujemy instalacje elektryczne, teletechniczne i mechaniczne zgodnie z uzgodnionymi projektami.</Skills1>
                        </Box>
                        <Box data-aos="fade" data-aos-delay="9000">
                            <Img src={obrazek3} class="js" alt={alt}/>
                            <Skills style={{marginTop: '15px'}}>UTRZYMANIE</Skills>
                            <Skills1 style={{marginTop: '30px'}}>Utrzymujemy strategiczne systemy z błyskawicznym czasem rekcji dopasowanym do wymogów klienta. Zapewniamymy wsparcie 24/7 na terenie Polski i europy. </Skills1>
                        </Box>
                        
                        
                        
                    </FeaturesContent>

                </SkillsWrapper>
            </Features>
        </>
    )
}

export default InfoSection2
