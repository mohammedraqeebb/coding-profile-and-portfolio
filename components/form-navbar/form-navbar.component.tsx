import React, { FC } from 'react';
import styles from './FormNavbar.module.scss';
import { FiChrome } from 'react-icons/fi';
import { DEFAULT_SHOW_FORM_FIELDS } from '@/pages';

type FormNavbarProps = {
  setShowForm: React.Dispatch<
    React.SetStateAction<typeof DEFAULT_SHOW_FORM_FIELDS>
  >;
  showForm: typeof DEFAULT_SHOW_FORM_FIELDS;
};

const FormNavbar: FC<FormNavbarProps> = ({ setShowForm, showForm }) => {
  const setShowProfileForm = () =>
    setShowForm({ ...DEFAULT_SHOW_FORM_FIELDS, showProfileForm: true });
  const setShowSocialForm = () =>
    setShowForm({ ...DEFAULT_SHOW_FORM_FIELDS, showSocialForm: true });
  const setShowResumeForm = () =>
    setShowForm({ ...DEFAULT_SHOW_FORM_FIELDS, showResumeForm: true });
  const setShowPortfolioForm = () =>
    setShowForm({ ...DEFAULT_SHOW_FORM_FIELDS, showPortfolioForm: true });
  const { showPortfolioForm, showProfileForm, showResumeForm, showSocialForm } =
    showForm;
  return (
    <div className={styles.form_navbar_wrapper}>
      <ul className={styles.form_navbar_container}>
        <li onClick={() => setShowProfileForm()}>
          {showProfileForm && <span className={styles.active_bar}></span>}
          <FiChrome size={20} color={showProfileForm ? '#1E1E1E' : '#a1a1aa'} />
          <span
            style={{
              color: showProfileForm ? '#1E1E1E' : '#a1a1aa',
            }}
          >
            Profile
          </span>
        </li>
        <li onClick={() => setShowSocialForm()}>
          {showSocialForm && <span className={styles.active_bar}></span>}
          <FiChrome size={20} color={showSocialForm ? '#1E1E1E' : '#a1a1aa'} />
          <span
            style={{
              color: showSocialForm ? '#1E1E1E' : '#a1a1aa',
            }}
          >
            Socials
          </span>
        </li>
        <li onClick={() => setShowPortfolioForm()}>
          {showPortfolioForm && <span className={styles.active_bar}></span>}
          <FiChrome
            size={20}
            color={showPortfolioForm ? '#1E1E1E' : '#a1a1aa'}
          />
          <span
            style={{
              color: showPortfolioForm ? '#1E1E1E' : '#a1a1aa',
            }}
          >
            Portfolio
          </span>
        </li>
        <li onClick={() => setShowResumeForm()}>
          {showResumeForm && <span className={styles.active_bar}></span>}
          <FiChrome size={20} color={showResumeForm ? '#1E1E1E' : '#a1a1aa'} />
          <span
            style={{
              color: showResumeForm ? '#1E1E1E' : '#a1a1aa',
            }}
          >
            Resume
          </span>
        </li>
      </ul>
    </div>
  );
};

export default FormNavbar;
