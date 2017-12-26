/**
 * Created by ruslan on 15.05.17.
 */
import React from 'react';
import {TextFieldInput} from '../index'

export default function Input({
                                children,
                                handleInput,
                                onChange,
                                value,
                                onClick,
                                handleClickInput,
                                handleInputBlur,
                                valueInput,
                                onBlur,
                                ...otherProps
                              }) {
  return (
    <TextFieldInput
      onClick={onClick || handleClickInput}
      onChange={onChange || handleInput}
      value={value || valueInput}
      onBlur={onBlur || handleInputBlur}
      {...otherProps}
    >
      {children}
    </TextFieldInput>
  );
}