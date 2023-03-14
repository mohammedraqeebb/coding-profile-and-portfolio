import { DEFAULT_USER_FIELDS } from '@/pages';
import React, { FC } from 'react';
import styles from './ProjectSelect.module.scss';

type User = {
  name: string;
  profilePictureURL: string;
};

export type ProjectProps = {
  id: string;
  title: string;
  playgroundType: 'HTML/CSS';
  lastUsed: string;
  contributors: User[];
  user: typeof DEFAULT_USER_FIELDS;
  setUser: React.Dispatch<React.SetStateAction<typeof DEFAULT_USER_FIELDS>>;
  isProjectInPortfolio: boolean;
};

const ProjectSelect: FC<ProjectProps> = ({
  id,
  title,
  playgroundType,
  lastUsed,
  contributors,
  isProjectInPortfolio,
  user,
  setUser,
}) => {
  const onClickHandler = () => {
    if (isProjectInPortfolio) {
      setUser({
        ...user,
        portfolio: {
          ...user.portfolio,
          projects: user.portfolio.projects.filter(
            (currentProject) => currentProject.id !== id
          ),
        },
      });
      return;
    }
    setUser({
      ...user,
      portfolio: {
        ...user.portfolio,
        projects: [
          ...user.portfolio.projects,
          { id, title, playgroundType, lastUsed, contributors },
        ],
      },
    });
  };
  return (
    <div
      className={`${styles.project_container} ${
        isProjectInPortfolio ? styles.selected : ''
      }`}
      onClick={() => onClickHandler()}
    >
      <div className={styles.image_container}></div>
      <div className={styles.project_header}>
        <p className={styles.project_title}>{title}</p>
        <div className={styles.options}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
      <div className={styles.project_info}>
        <p>{playgroundType}</p>
        <span className={styles.project_info_divider_container}>
          <span className={styles.project_info_divider}></span>
        </span>
        <p>{lastUsed}</p>
      </div>
      <div className={styles.contributors_container}>
        <div className={styles.images}>
          <img
            className={styles.first_image}
            src="../../static/images/profile-picture-2.png"
            height={24}
            width={24}
          />
          <img
            src="../../static/images/profile-picture-1.png"
            height={24}
            width={24}
          />
        </div>
        <p className={styles.contributors_text}>
          {contributors.length} contributors
        </p>
      </div>
    </div>
  );
};

export default ProjectSelect;
