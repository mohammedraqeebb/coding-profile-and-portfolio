import React, { FC } from 'react';
import styles from './Stat.module.scss';
export type Statprops = {
  heading: string;
  subheading: string;
  icon: JSX.Element;
};

const Stat: FC<Statprops> = ({ heading, subheading, icon }) => {
  return (
    <div className={styles.stat_container}>
      <span className={styles.icon_container}>{icon}</span>
      <div className={styles.stat_info}>
        <p className={styles.stat_heading}>{heading}</p>
        <p className={styles.stat_sub_heading}>{subheading}</p>
      </div>
    </div>
  );
};

export default Stat;
