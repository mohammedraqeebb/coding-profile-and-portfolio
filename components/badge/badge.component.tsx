import React, { FC } from 'react';
import styles from './Badge.module.scss';

type BadgeProps = {
  variant: 'secondary' | 'accent-1';
  text: string;
};

const Badge: FC<BadgeProps> = ({ variant, text }) => {
  return (
    <span className={`${styles.badge_container} ${styles[variant]}`}>
      <span className={styles.text}>{text}</span>
    </span>
  );
};

export default Badge;
