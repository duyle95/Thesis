import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import * as actions from '../../actions';

const Input = styled.input.attrs()`
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

const Form = styled.form`
  display: inline-block;
  margin: 0 auto;
  text-align: left;
`;

const FormLabel = styled.label`
  font-size: 2em;
  color: #EEAA7B;
`;

const CenteredContainer = styled.div`
  text-align: center;
  display: block;
  margin-top: 5rem;
`;

const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1.2em;
  margin: 1em auto;
  padding: 0.5em 2em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

class Signin extends Component {
  _onFormSubmit = (formValues) => {
    // this.props.signinUser(formValues);
    console.log(formValues);
  }

  render() {
    return (
        <CenteredContainer>
          <Form onSubmit={this.props.handleSubmit(this._onFormSubmit)}>
            <div>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Field name="email" component={Input} type="text" placeholder="awesome@email.com" onChange={(e) => console.log(e.target.value)} />
            </div>
            <div>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Field name="password" component={Input} type="password" />
            </div>
            <Button type="submit">Submit</Button>
          </Form>
        </CenteredContainer>
    )
  }
}

export default reduxForm({
  form: 'signin',
})(connect(null, actions)(Signin));
