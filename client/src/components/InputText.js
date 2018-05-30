import React from "react";
import styled from "styled-components";

const Input = styled.input`
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

export default props => <Input {...props.input} type={props.type} />;
