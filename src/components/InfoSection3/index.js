import React, { useState } from 'react'
import { Button } from '../ButtonElement'
import obrazek1 from '../../images/svg-3.svg'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'
import styled, {createGlobalStyle, css} from 'styled-components';
import './style.css'
import {db} from '../../firebase'


const GlobalStyle = createGlobalStyle`
    body{
        height: 60vh;
    }

    .element{
        display: block;
    }

    .element2{
        display: block;
        margin-top: 30px;
    }
    
    .element3{
        position: relative;
        top: 5px;
    }
`

const sharedStyles = css`
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    padding: 0 20px;
    position: relative;
    top: 90px;

    @media screen and (max-width: 768px) {

        top: 70px;
        
    }

    @media screen and (max-width: 480px){
        height: 310px;
        position: relative;
        top: 90px;
    }
    
`;

const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
    

    @media screen and (max-width: 768px){
        position: relative;
        bottom: 100px;
    }

    @media screen and (max-width: 450px){
        height: 490px;
    }

`;

const StyledInput = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
    background-color: #eee;
`

const StyledTextArea = styled.textarea`
    background-color: #eee;
    width: 100%;
    min-height: 100px;
    resize: none;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`

const StyledButton = styled.button`
    display: block;
    background-color: black;
    color: #fff;
    font-size: .9rem;
    border: 0;
    margin-top: 20px;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
`

const StyledFieldset = styled.fieldset`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 20px 0;

    label{
        padding: 0 10px;
    }

    input{
        margin-right: 10px;
    }


`

const StyledError = styled.div`
    color: red;
    font-weight: 800;
    margin: 0 0 40px 0;
`




const InfoSection = ({lightBg, id }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            alert('Message has been submitted. Thank you :)')
        })
        .catch((error) => {
            alert(error.message);
        });

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <div className='container'>
                
                    <div className="box1">
                        <h1 style={{margin: '15px'}}>Europa</h1>
                        <iframe className='mapka' style={{borderRadius: '10px', border: 'none'}} src="https://www.google.com/maps/d/embed?mid=1w0mUVrmljLAoCNGJbRtIFqE5e-xvTJ8&ehbc=2E312F" width="640" height="480"></iframe>
                    </div>
            
                    <div className="box2">
                        <h1 style={{margin: '15px'}}>Ameryka</h1>
                        <iframe className='mapka' style={{borderRadius: '10px', border: 'none'}} src="https://www.google.com/maps/d/embed?mid=1qBNd2q2aOWiBGsrP09plH2SStnUsC4A&ehbc=2E312F" width="640" height="480"></iframe>
                    </div>
                </div>
            </InfoContainer>    
        </>
    )
}

export default InfoSection
