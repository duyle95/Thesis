import React from "react";
import styled from "styled-components";
import {
  FormInput,
  FormLabel,
  ErrorMessage
} from "components/StyledComponents";

export default ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <FormLabel>{label}</FormLabel>
    <div>
      <FormInput {...input} type={type} />
      {touched &&
        ((error && <ErrorMessage>{error}</ErrorMessage>) ||
          (warning && <ErrorMessage>{warning}</ErrorMessage>))}
    </div>
  </div>
);
