import React from "react";
import styled from 'styled-components';
import ButtonContainer from '../Buttons';
import { withRouter } from "react-router";
import Logo from '../../assets/logo.png';

const Header = (props) => {
  const aboutClick = () => {
    props.history.push("/about");
  }

  const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 5rem;
  `

const HeaderImg = styled.img.attrs({
  src: Logo
})`
max-height: 90%;
`

  return (
    <StyledSection>
      <HeaderImg />
      <div>
        <ButtonContainer buttonFunction={aboutClick} buttonText={"OM OSS"} />
        <ButtonContainer buttonText={"KONTAKT"} />
      </div>
      <div>
        <ButtonContainer buttonText={"FACEBOOK"} />
        <ButtonContainer buttonText={"INSTAGRAM"} />
        <ButtonContainer buttonText={"LINKEDIN"} />
      </div>
    </StyledSection>
  );
}

export default withRouter(Header);