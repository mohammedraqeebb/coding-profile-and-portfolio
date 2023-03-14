import { DEFAULT_USER_FIELDS } from '@/pages';
import React, { ChangeEvent, FC } from 'react';
import { Value } from 'sass';
import Button from '../button/button.component';
import InputBox from '../Input/input.component';
import styles from './SocialForm.module.scss';

type SocialFormProps = {
  socials: typeof DEFAULT_USER_FIELDS.socials;
  user: typeof DEFAULT_USER_FIELDS;
  setUser: React.Dispatch<React.SetStateAction<typeof DEFAULT_USER_FIELDS>>;
  handleSubmit: () => void;
};

const SocialForm: FC<SocialFormProps> = ({
  user,
  setUser,
  socials,
  handleSubmit,
}) => {
  const handlechange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, socials: { ...user.socials, [name]: value } });
  };
  return (
    <div className={styles.social_form_container}>
      <InputBox
        label="github"
        placeholder="Github profile URL"
        name="github"
        value={socials.github}
        onChange={handlechange}
      />
      <InputBox
        label="linkedin"
        placeholder="Linkedin profile URL"
        name="linkedin"
        value={socials.linkedin}
        onChange={handlechange}
      />
      <InputBox
        label="facebook"
        placeholder="Facebook profile URL"
        name="facebook"
        value={socials.facebook}
        onChange={handlechange}
      />
      <InputBox
        label="instagram"
        placeholder="Instagram profile URL"
        name="instagram"
        value={socials.instagram}
        onChange={handlechange}
      />
      <InputBox
        label="dribble"
        placeholder="Dribble profile URL"
        name="dribble"
        value={socials.dribble}
        onChange={handlechange}
      />
      <InputBox
        label="behance"
        placeholder="Behance profile URL"
        name="behance"
        value={socials.behance}
        onChange={handlechange}
      />
      <div className={styles.submit_buttons}>
        <Button
          name="cancel"
          variant="secondary"
          size="base"
          onClick={() => handleSubmit()}
        />
        <Button
          name="save changes"
          variant="primary"
          size="base"
          onClick={() => handleSubmit()}
        />
      </div>
    </div>
  );
};

export default SocialForm;
