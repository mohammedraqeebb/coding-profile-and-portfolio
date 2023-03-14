import { DEFAULT_SHOW_FORM_FIELDS } from '@/pages';
import React, { FC } from 'react';
import Button from '../button/button.component';
import styles from './Tab.module.scss';

type TabProps = {
  showUserProfile: boolean;
  setShowUserProfile: React.Dispatch<React.SetStateAction<boolean>>;
  showPortfolio: boolean;
  setShowPortfolio: React.Dispatch<React.SetStateAction<boolean>>;
  showForm: typeof DEFAULT_SHOW_FORM_FIELDS;
  setShowForm: React.Dispatch<
    React.SetStateAction<typeof DEFAULT_SHOW_FORM_FIELDS>
  >;
};

const Tab: FC<TabProps> = ({
  showUserProfile,
  setShowUserProfile,
  setShowForm,
  showForm,
  setShowPortfolio,
  showPortfolio,
}) => {
  const handleShowForm = (
    name:
      | 'showProfileForm'
      | 'showSocialForm'
      | 'showResumeForm'
      | 'showPortfolioForm'
  ) => {
    setShowUserProfile(false);
    setShowForm({ ...showForm, [name]: true });
  };
  return (
    <div className={styles.tab_container}>
      <div className={styles.buttons_left}>
        <Button
          onClick={() => setShowPortfolio(true)}
          size="base"
          name="Portfolio"
          variant="tertiary"
        />
        <Button
          onClick={() => setShowPortfolio(false)}
          size="base"
          name="Resume"
          variant="tertiary"
        />
      </div>
      <div className={styles.buttons_right}>
        <Button
          onClick={() => handleShowForm('showProfileForm')}
          size="small"
          name="edit profile"
          variant="secondary"
        />
        <Button
          onClick={() => handleShowForm('showSocialForm')}
          size="small"
          name="edit socials"
          variant="secondary"
        />

        <Button
          onClick={() => handleShowForm('showPortfolioForm')}
          size="small"
          name="edit portfolio"
          variant="secondary"
        />

        <Button
          onClick={() => handleShowForm('showResumeForm')}
          size="small"
          name="edit resume"
          variant="secondary"
        />
      </div>
    </div>
  );
};

export default Tab;
