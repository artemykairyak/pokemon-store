import { Input } from '@components/shared/Inputs/Input/Input';
import { PrimaryButton } from '@components/shared/PrimaryButton/PrimaryButton';
import { IInput } from '@customTypes/types';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { ObjectSchema } from 'yup';

import s from '../../SignUpPage.module.scss';


interface SignUpFormProps {
  inputs: IInput[];
  onSubmit: SubmitHandler<FieldValues>;
  validationSchema: ObjectSchema<any>;
  isSignUp: boolean;
}

export const SignUpForm: FC<SignUpFormProps> = ({
  inputs,
  onSubmit,
  validationSchema,
  isSignUp,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={s.form}
      noValidate={true}
      autoComplete="off"
    >
      <div className={s.inputs}>
        {inputs.map(({ placeholder, type, name }, i) => {
          return (
            <div className={s.inputWrapper} key={i}>
              <Input
                placeholder={placeholder}
                name={name}
                type={type}
                register={register}
                isError={!!errors[name]}
                className={s.input}
              />
              <ErrorMessage
                errors={errors}
                name={name}
                render={(data) => (
                  <span className={s.error}>{data.message}</span>
                )}
              />
            </div>
          );
        })}
      </div>
      <PrimaryButton className={s.button}>
        {isSignUp ? 'Create account' : 'Sign In'}
      </PrimaryButton>
    </form>
  );
};
