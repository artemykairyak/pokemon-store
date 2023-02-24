import clsx from 'clsx';
import { CSSProperties, FC, HTMLInputTypeAttribute } from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

import s from './Input.module.scss';


export interface InputProps {
  placeholder: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  validationOptions?: RegisterOptions;
  isError?: boolean;
  className?: string;
  type?: HTMLInputTypeAttribute;
  style?: CSSProperties;
}

export const Input: FC<InputProps> = ({
  placeholder,
  className,
  type = 'text',
  style,
  isError,
  register,
  validationOptions,
  name,
}) => {
  return (
    <input
      type={type}
      className={clsx(s.input, className, { [s.error]: isError })}
      placeholder={placeholder}
      style={style}
      {...register(name, { ...validationOptions })}
    />
  );
};
