import { AuthForm } from '@components/pages/AuthPage/components/AuthForm/AuthForm';
import {
  signInInputs,
  signUpInputs,
} from '@components/pages/AuthPage/constants';
import { useAuth } from '@components/pages/AuthPage/hooks/useAuth';
import { signInSchema, signUpSchema } from '@components/pages/AuthPage/yup';
import { Heading } from '@components/shared/Heading/Heading';
import { Popup } from '@components/shared/Popup/Popup';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import s from './AuthPage.module.scss';

export const AuthPage = () => {
  const router = useRouter();
  const { backLink } = router.query as { backLink?: string };
  const [isSignUp, setIsSignUp] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const { signUp, loading, errors, login, setErrors, user } = useAuth();

  const inputs = isSignUp ? signUpInputs : signInInputs;
  const validationSchema = isSignUp ? signUpSchema : signInSchema;

  useEffect(() => {
    if (user) {
      router.replace(`/user/${user.username}`);
    }
  }, [user]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { username, email, password } = data;

    if (isSignUp) {
      const signedUp = await signUp(username, email, password);

      if (signedUp) {
        setIsSignUp(false);
        setSignedUp(true);

        setTimeout(() => {
          setSignedUp(false);
        }, 3000);
      }

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

  const switchMode = () => {
    setIsSignUp((prev) => !prev);
    setErrors('');
  };

  return (
    <div className={s.login}>
      <div className={s.img} />
      <div className={s.content}>
        <Heading level={1} className={s.title}>
          {isSignUp ? 'Create Account' : 'Log In'}
        </Heading>
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
          <button className={s.toggleButton} onClick={switchMode}>
            {isSignUp ? 'Log In' : 'Create account'}
          </button>
        </div>
      </div>
      {signedUp && (
        <Popup
          type="success"
          title="You have succesfully registred!"
          text={`It's time to log in!`}
        />
      )}
    </div>
  );
};
