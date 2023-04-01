import EnvelopeIcon from '@assets/icons/EnvelopeSimple.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { ButtonInput } from '@components/shared/ButtonInput/ButtonInput';
import { Heading } from '@components/shared/Heading/Heading';

import s from './DigestSection.module.scss';

import DigectPic from 'assets/images/digestPic.jpg';


export const DigestSection = () => {
  return (
    <ContentWrapper>
      <div className={s.digest}>
        <img className={s.pic} src={DigectPic.src} alt="Digest" />
        <div className={s.info}>
          <Heading level={2} className={s.digestTitle}>
            Join our weekly digest
          </Heading>
          <p className={s.digestText}>
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <ButtonInput
            className={s.input}
            buttonIcon={EnvelopeIcon}
            buttonText="Subscribe"
            onSubmit={() => console.log(1)}
            name="digest"
            placeholder="Enter your email here"
          />
        </div>
      </div>
    </ContentWrapper>
  );
};
