import { DEFAULT_SHOW_FORM_FIELDS, DEFAULT_USER_FIELDS } from '@/pages';
import React, { FC } from 'react';
import FormNavbar from '../form-navbar/form-navbar.component';
import PortfolioForm from '../portfolio-form/portfolio-form.component';
import ProfileForm from '../profile-form/profile-form.component';
import SocialForm from '../social-form/social-form.component';
import styles from './Forms.module.scss';
import ResumeForm from '../resume-form/resume-form.component';

type FormsProps = {
  user: typeof DEFAULT_USER_FIELDS;
  setUser: React.Dispatch<React.SetStateAction<typeof DEFAULT_USER_FIELDS>>;
  showForm: typeof DEFAULT_SHOW_FORM_FIELDS;
  setShowForm: React.Dispatch<
    React.SetStateAction<typeof DEFAULT_SHOW_FORM_FIELDS>
  >;
  showUserProfile: boolean;
  setShowUserProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

const Forms: FC<FormsProps> = ({
  user,
  setUser,
  showForm,
  setShowForm,
  showUserProfile,
  setShowUserProfile,
}) => {
  const { showProfileForm, showSocialForm, showResumeForm, showPortfolioForm } =
    showForm;
  const handleSubmit = () => {
    setShowUserProfile(true);
    setShowForm(DEFAULT_SHOW_FORM_FIELDS);
  };
  return (
    <div className={styles.form_section}>
      <FormNavbar setShowForm={setShowForm} showForm={showForm} />
      <div className={styles.form_container}>
        {showProfileForm && (
          <ProfileForm
            profile={user.profile}
            user={user}
            setUser={setUser}
            handleSubmit={handleSubmit}
          />
        )}
        {showPortfolioForm && (
          <PortfolioForm
            user={user}
            setUser={setUser}
            portfolio={user.portfolio}
            handleSubmit={handleSubmit}
          />
        )}
        {showResumeForm && (
          <ResumeForm
            user={user}
            setUser={setUser}
            resume={user.resume}
            handleSubmit={handleSubmit}
          />
        )}
        {showSocialForm && (
          <SocialForm
            user={user}
            socials={user.socials}
            setUser={setUser}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Forms;
