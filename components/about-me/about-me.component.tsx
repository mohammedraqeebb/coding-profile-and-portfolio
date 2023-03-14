import React, { FC } from 'react';
import styles from './AboutMe.module.scss';

type AboutMeProps = {
  about: string;
};
const AboutMe: FC<AboutMeProps> = ({ about }) => {
  return (
    <div className={styles.about_me_section}>
      <p className={styles.title}>About Me</p>
      <p className={styles.about_container}>{about}</p>
    </div>
  );
};

export default AboutMe;
