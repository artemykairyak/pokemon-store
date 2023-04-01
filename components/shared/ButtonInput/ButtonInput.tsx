import { Input, InputProps } from '@components/shared/Inputs/Input/Input';
import { Button } from '@components/shared/PrimaryButton/Button';
import clsx from 'clsx';
import { FC, useRef } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import s from './ButtonInput.module.scss';


type OmittedInputProps = Omit<InputProps, 'register'>;

interface ButtonInputProps extends OmittedInputProps {
  buttonText: string;
  onSubmit: SubmitHandler<FieldValues>;
  name: string;
  buttonIcon?: { src: string };
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
  } = useForm<FieldValues>();

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
      <Button
        type="primary"
        icon={buttonIcon}
        className={s.button}
        iconClassName={s.icon}
        ref={buttonRef}
      >
        {buttonText}
      </Button>
    </form>
  );
};
