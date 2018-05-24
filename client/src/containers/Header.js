import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrapper = styled.section`
  padding: 1rem 0 .65625rem;
  background: #EEAA7B;
`;

const StyledLink = styled(Link)`
  color: honeydew;
  font-size: 2em;
  float: right;
  margin: 0 1rem;
  margin-top: 0.5rem;
  text-decoration: none;

  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;

  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(.7, transparent), to(rgba(0,0,0,0.1)));

  &:hover {
    margin-top: 1px;
    opacity: 1;

   /*Reflection*/
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(.7, transparent), to(rgba(0,0,0,0.4)));

   /*Glow*/
  -webkit-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
  -moz-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
  box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
  }
`;

const StyledLogo = styled(Link)`
  font-size: 3em;
  color: white;
  margin: 0 1rem;
  text-decoration: none;
  color: papayawhip;

  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(.7, transparent), to(rgba(0,0,0,0.1)));

  &:hover {
    opacity: 1;

   /*Reflection*/
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(.7, transparent), to(rgba(0,0,0,0.4)));

   /*Glow*/
  -webkit-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
  -moz-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
  box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
  }
`;

export default class Header extends Component {
  render() {
    return (
      <NavWrapper>
        <StyledLogo to='/'>TOOLY</StyledLogo>
        <StyledLink to='/signin'>
          Sign in
        </StyledLink>
        <StyledLink to='/signup'>
          Sign up
        </StyledLink>
      </NavWrapper>
    )
  }
}
