import { AuthForm } from '@components/pages/AuthPage/components/AuthForm/AuthForm';
import {
  signInInputs,
  signUpInputs,
} from '@components/pages/AuthPage/constants';
import { useAuth } from '@components/pages/AuthPage/hooks/useAuth';
import { signInSchema, signUpSchema } from '@components/pages/AuthPage/yup';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import s from './AuthPage.module.scss';

export const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { signUp, loading, errors, login } = useAuth();
  const router = useRouter();
  const { backLink } = router.query as { backLink?: string };

  const inputs = isSignUp ? signUpInputs : signInInputs;
  const validationSchema = isSignUp ? signUpSchema : signInSchema;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { username, email, password } = data;

    if (isSignUp) {
      await signUp(username, email, password);
      return;
    }

    if (await login(username, password)) {
      if (backLink) {
        await router.replace(backLink);
        return;
      }

      await router.replace(`/user/${username}`);
    }
  };

  return (
    <div className={s.login}>
      <div className={s.img} />
      <div className={s.content}>
        <h1 className={s.title}>{isSignUp ? 'Create Account' : 'Log In'}</h1>
        <p className={s.text}>
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
        <AuthForm
          inputs={inputs}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          isSignUp={isSignUp}
          authErrors={errors}
          loading={loading}
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
