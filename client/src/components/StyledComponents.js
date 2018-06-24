import React from "react";
import styled from "styled-components";

export const Form = styled.form`
  display: inline-block;
  margin: 0 auto;
  text-align: left;
`;

export const CenteredContainer = styled.div`
  text-align: center;
  display: block;
  margin-top: 5rem;
`;

export const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1.2em;
  margin: 1em auto;
  padding: 0.5em 2em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const ErrorMessage = styled.h3`
  text-align: center;
  color: red;
`;

export const FormInput = styled.input`
  padding: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  display: block;
  height: 30px;
  font-size: 15pt;
  margin: 0.5em 0;
`;
export const FormLabel = styled.label`
  font-size: 2em;
  color: #eeaa7b;
`;
