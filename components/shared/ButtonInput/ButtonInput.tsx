import { Input, InputProps } from '@components/shared/Inputs/Input/Input';
import { PrimaryButton } from '@components/shared/PrimaryButton/PrimaryButton';
import clsx from 'clsx';
import { FC, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import s from './ButtonInput.module.scss';


type OmittedInputProps = Omit<InputProps, 'register'>;

interface ButtonInputProps extends OmittedInputProps {
  buttonText: string;
  onSubmit: SubmitHandler<{ [name: string]: string }>;
  buttonIcon?: { src: string };
  name: string;
}

export const ButtonInput: FC<ButtonInputProps> = ({
  buttonText,
  placeholder,
  className,
  type,
  buttonIcon,
  onSubmit,
  name,
  validationOptions = { required: 'This field is required' },
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(s.wrapper, className)}
    >
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        className={s.input}
        style={{ paddingRight: `${buttonRef.current?.offsetWidth}px` }}
        isError={!!errors[name]}
        register={register}
        validationOptions={validationOptions}
      />
      <PrimaryButton icon={buttonIcon} className={s.button} ref={buttonRef}>
        {buttonText}
      </PrimaryButton>
    </form>
  );
};
