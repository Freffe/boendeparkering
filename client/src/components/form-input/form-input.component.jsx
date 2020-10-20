import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

const FormInput = ({ handleChange, handleInputReset, label, children, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} onBlur={handleInputReset} {...props}/>
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
    {children}
  </GroupContainer>
);

export default FormInput;
