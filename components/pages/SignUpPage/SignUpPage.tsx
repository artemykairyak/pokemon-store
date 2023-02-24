import { SignUpForm } from '@components/pages/SignUpPage/components/SignUpForm/SignUpForm';
import {
  signInInputs,
  signUpInputs,
} from '@components/pages/SignUpPage/constants';
import { signInSchema, signUpSchema } from '@components/pages/SignUpPage/yup';
import { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import s from './SignUpPage.module.scss';


export const SignUpPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const inputs = isSignUp ? signUpInputs : signInInputs;
  const validationSchema = isSignUp ? signUpSchema : signInSchema;

  const onSubmit: SubmitHandler<FieldValues> = (data) =>
    console.log('is Sign Up', isSignUp, data);

  return (
    <div className={s.login}>
      <div className={s.img} />
      <div className={s.content}>
        <h1 className={s.title}>{isSignUp ? 'Create Account' : 'Log In'}</h1>
        <p className={s.text}>
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
        <SignUpForm
          inputs={inputs}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          isSignUp={isSignUp}
        />
        <div className={s.toggle}>
          <span className={s.toggleText}>or</span>
          <button
            className={s.toggleButton}
            onClick={() => setIsSignUp((prev) => !prev)}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};
