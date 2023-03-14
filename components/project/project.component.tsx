import React, { FC } from 'react';
import styles from './Project.module.scss';

type User = {
  name: string;
  profilePictureURL: string;
};

export type ProjectProps = {
  id: string;
  title: string;
  playgroundType: 'HTML/CSS';
  lastUsed: string;
  contributors: Partial<User>[];
};

const Project: FC<ProjectProps> = ({ title, playgroundType }) => {
  return (
    <div className={styles.project_container}>
      <div className={styles.image_container}></div>
      <div className={styles.project_header}>
        <p className={styles.project_title}>{title}</p>
      </div>
      <div className={styles.project_info}>
        <p>{playgroundType}</p>
        <span className={styles.project_info_divider_container}>
          <span className={styles.project_info_divider}></span>
        </span>
        <p>React</p>
      </div>
    </div>
  );
};

export default Project;
