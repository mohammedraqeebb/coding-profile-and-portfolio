import React, { FC, useState } from 'react';
import styles from './User.module.scss';

import {
  BsLightningChargeFill,
  BsAwardFill,
  BsHeartPulseFill,
} from 'react-icons/bs';
import { AiTwotoneStar } from 'react-icons/ai';
import Stats from '../stats/stats.component';
import Projects from '../projects/projects.component';
import Playgrounds from '../playgrounds/playgrounds.component';
import ProfileInfo from '../profile-info/profile-info.component';
import Tab from '../tab/tab.component';
import AboutMe from '../about-me/about-me.component';
import WorkExperienceHistory from '../work-experience-history/work-experience-history.component';
import EducationHistory from '../education-history/education-history.component';
import { DEFAULT_SHOW_FORM_FIELDS, DEFAULT_USER_FIELDS } from '@/pages';

const statsData = [
  {
    heading: '2',
    subheading: 'Longest Streak',
    icon: <BsLightningChargeFill size={32} color="#6366F1" />,
  },
  {
    heading: '1200',
    subheading: 'Experience Points',
    icon: <AiTwotoneStar size={32} color="#0EA5E9" />,
  },
  {
    heading: 'Novice',
    subheading: 'Longest Streak',
    icon: <BsAwardFill size={32} color="#FE6712" />,
  },
  {
    heading: '120',
    subheading: 'Karma Points',
    icon: <BsHeartPulseFill size={32} color="#EC4899" />,
  },
];

type UserProps = {
  showForm: typeof DEFAULT_SHOW_FORM_FIELDS;
  setShowForm: React.Dispatch<
    React.SetStateAction<typeof DEFAULT_SHOW_FORM_FIELDS>
  >;
  showUserProfile: boolean;
  setShowUserProfile: React.Dispatch<React.SetStateAction<boolean>>;
  user: typeof DEFAULT_USER_FIELDS;
  setUser: React.Dispatch<React.SetStateAction<typeof DEFAULT_USER_FIELDS>>;
};
const User: FC<UserProps> = ({
  showForm,
  setShowForm,
  showUserProfile,
  setShowUserProfile,
  user,
}) => {
  const [showPortfolio, setShowPortfolio] = useState(true);
  return (
    <div className={styles.user_container}>
      <ProfileInfo socials={user.socials} profile={user.profile} />
      <Tab
        setShowPortfolio={setShowPortfolio}
        showPortfolio={showPortfolio}
        showForm={showForm}
        setShowForm={setShowForm}
        showUserProfile={showUserProfile}
        setShowUserProfile={setShowUserProfile}
      />
      {showPortfolio && (
        <div className={styles.portfolio_container}>
          <Stats stats={statsData} />
          <Projects projects={user.portfolio.projects} />
          <Playgrounds playgrounds={user.portfolio.playgrounds} />
        </div>
      )}
      {!showPortfolio && (
        <div className={styles.resume_container}>
          <AboutMe about={user.resume.aboutMe} />
          <WorkExperienceHistory
            workExperienceHistory={user.resume.workExperiences}
          />
          <EducationHistory educationHistory={user.resume.education} />
        </div>
      )}
    </div>
  );
};

export default User;
