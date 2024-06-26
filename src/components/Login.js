import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg' alt='' />
          <SignUp>GET THE DISNEY BUNDLE</SignUp>
          <Description>
            Stream now. <span>Terms apply.</span>
          </Description>
          <CTALogoTwo src='images/cta-logo-two.png' alt='' />
          <DownDesc>Sign up for Disney+ only.</DownDesc>
        </CTA>

        <BgImage />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/login-background.jpg');
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
`;
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
  margin-left: 23px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

const SignUp = styled.a`
  font-weight: 500;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
`;

const Description = styled.p`
  color: gray;
  font-size: 11px;
  margin: 0 0 24px;
  letter-spacing: 0.5px;

  span {
    padding-left: 0;
    color: hsla(0, 0%, 95.3%, 1);
    text-decoration: underline;
    cursor: pointer;
  }
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
  margin-left: 23px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

const DownDesc = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 13px;
  letter-spacing: 1px;
  text-decoration: underline;
  cursor: pointer;
`;
