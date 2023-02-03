import React, { useEffect } from 'react'
import { Button } from '../ButtonElement'
import obrazek1 from '../../images/EBS.jpg'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'
import Aos from 'aos'
import "aos/dist/aos.css"

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, heading, darkText, description, description1, description2, description3, description4, description5, description6, description7, buttonLabel, alt, primary, dark, dark2}) => {

    useEffect(() => {
        Aos.init({ duration: 300, once: true });
    }, [])
    


    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{heading}</Heading>
                                
                                <Subtitle darkText={darkText} style={{marginBottom: '20px'}}>{description}</Subtitle>
                                <Subtitle darkText={darkText}>{description7}</Subtitle>
                                <Subtitle darkText={darkText}>{description1}</Subtitle>
                                <Subtitle darkText={darkText}>{description2}</Subtitle>
                                <Subtitle darkText={darkText}>{description3}</Subtitle>
                                <Subtitle darkText={darkText}>{description4}</Subtitle>
                                <Subtitle darkText={darkText}>{description5}</Subtitle>
                                <Subtitle darkText={darkText}>{description6}</Subtitle>
                                {/* <BtnWrap>
                                    <Button to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ?  1 : 0}

                                    >{buttonLabel}</Button>
                                </BtnWrap> */}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                                <Img src={obrazek1} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
