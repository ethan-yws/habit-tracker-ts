import React from "react";
import styled from "styled-components";
import WelcomeArt from "../assets/loginpage-art.jpg";
import GoogleButton from "react-google-button";

const Wrapper = styled.div`
    display: flex;
`;

const Illusration = styled.div<{ img: string }>`
    flex: 0.5;
    background-image: ${(props) => `url(${props.img})`};
    background-size: cover;
    height: 100vh;
`;

const FormWrapper = styled.div`
    flex: 0.5;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoginPage = () => {
    return (
        <Wrapper>
            <FormWrapper>
                <GoogleButton />
            </FormWrapper>
            <Illusration img={WelcomeArt}></Illusration>
        </Wrapper>
    );
};

export default LoginPage;
