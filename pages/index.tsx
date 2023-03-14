import Header from '@/components/header/header.component';
import User from '@/components/user/user.component';
import React, { useState } from 'react';
import styles from '../styles/Home.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { SelectOption } from '@/components/dropdown-select/dropdown-select.component';
import {
  DEFAULT_EDUCATION_FORM_FIELDS,
  DEFAULT_WORK_EXPERIENCE_FIELDS,
  educationData,
  playgroundData,
  projectsData,
  workExperinceData,
} from '@/data';

import Forms from '@/components/forms/forms.component';
export const DEFAULT_SHOW_FORM_FIELDS = {
  showProfileForm: false,
  showSocialForm: false,
  showResumeForm: false,
  showPortfolioForm: false,
};
export const DEFAULT_USER_FIELDS = {
  profile: {
    name: 'Anna Cheng',
    about: 'Full stack dev at codedamn | Harvard22',
    skills: [
      { id: uuidv4(), label: 'react', value: 'react' },
      { id: uuidv4(), label: 'typescript', value: 'typescript' },
      { id: uuidv4(), label: 'mongo', value: 'mongo' },
      { id: uuidv4(), label: 'Nodejs', value: 'Nodejs' },
    ] as SelectOption[],
    profession: 'Software Engineer',
    dateOfBirth: '1999-10-03',
    state: 'Mumbai',
    country: 'India',
    gender: '',
    followersAndFollowing: true,
    XP: true,
    achievementsBadges: false,
  },
  socials: {
    linkedin: 'https://linkedin.com/annacheng',
    instagram: 'https://instagram.com/annacheng',
    facebook: 'https://facebook.com/annacheng',
    dribble: 'https://dribble.com/annacheng',
    behance: 'https://behance.com/annacheng',
    github: 'https://github.com/annacheng',
  },
  portfolio: {
    playgrounds: playgroundData as typeof playgroundData,
    projects: projectsData as typeof projectsData,
  },
  resume: {
    aboutMe:
      'Ullamco exercitation duis Lorem consequat aliqua mollit commodo voluptate cillum laborum id cillum est pariatur. Mollit aute in esse excepteur nisi proident velit veniam elit. Esse velit voluptate eiusmod cillum Lorem deserunt exercitation magna eu ad eu deserunt nisi. Do proident ex ex magna proident. Fugiat dolor laboris aliqua excepteur reprehenderit dolore do eu aliquip nostrud sunt velit. Enim do eiusmod duis cupidatat anim exercitation nulla aliquip qui tempor adipisicing laborum. Est velit ad ad non culpa sint labore amet tempor amet anim.',
    education: educationData as typeof DEFAULT_EDUCATION_FORM_FIELDS[],
    workExperiences:
      workExperinceData as typeof DEFAULT_WORK_EXPERIENCE_FIELDS[],
  },
};
const Home = () => {
  const [user, setUser] = useState(DEFAULT_USER_FIELDS);
  const [showForm, setShowForm] = useState(DEFAULT_SHOW_FORM_FIELDS);
  const [showUserProfile, setShowUserProfile] = useState(true);

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.page_container}>
        <Header />
        <div>
          {showUserProfile && (
            <User
              showForm={showForm}
              setShowForm={setShowForm}
              showUserProfile={showUserProfile}
              setShowUserProfile={setShowUserProfile}
              user={user}
              setUser={setUser}
            />
          )}
          {!showUserProfile && (
            <Forms
              user={user}
              setUser={setUser}
              showForm={showForm}
              setShowForm={setShowForm}
              showUserProfile={showUserProfile}
              setShowUserProfile={setShowUserProfile}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
