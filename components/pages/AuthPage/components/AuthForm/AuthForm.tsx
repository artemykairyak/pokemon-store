import { Input } from '@components/shared/Inputs/Input/Input';
import { Button } from '@components/shared/PrimaryButton/Button';
import { IInput } from '@customTypes/types';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { ObjectSchema } from 'yup';

import s from '../../AuthPage.module.scss';


interface SignUpFormProps {
  inputs: IInput[];
  onSubmit: SubmitHandler<FieldValues>;
  validationSchema: ObjectSchema<any>;
  isSignUp: boolean;
  authErrors?: string;
  loading?: boolean;
}

export const AuthForm: FC<SignUpFormProps> = ({
  inputs,
  onSubmit,
  validationSchema,
  isSignUp,
  authErrors,
  loading,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    reset();
  }, [isSignUp]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={s.form}
      noValidate={true}
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
      <Button
        type="primary"
        className={s.button}
        loading={!!loading}
        disabled={loading}
      >
        {isSignUp ? 'Create account' : 'Sign In'}
      </Button>
      <span className={s.authError}>{authErrors}</span>
    </form>
  );
};
