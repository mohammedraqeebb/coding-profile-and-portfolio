import React, { FC } from 'react';
import Switch from '../switch/switch.component';
import styles from './Playground.module.scss';

type User = {
  name: string;
  profilePictureURL: string;
};

type PlaygroundType = 'HTML/CSS' | 'REACT' | 'NODE';

export type PlaygroundProps = {
  id: string;
  title: string;
  playgroundType: PlaygroundType;
  lastUsed: string;
  sharedUsers: Partial<User>[];
};

const Playground: FC<PlaygroundProps> = ({
  id,
  title,
  playgroundType,
  lastUsed,
  sharedUsers,
}) => {
  return (
    <div className={styles.playground_option_container}>
      <span className={styles.playground_logo}></span>
      <div className={styles.playground_details_container}>
        <div className={styles.playground_option_header}>
          <p className={styles.playground_title}>{title}</p>
        </div>
        <div className={styles.playground_info}>
          <p className={styles.playground_type}>{playgroundType}</p>
          <span className={styles.playground_info_divider_container}>
            <span className={styles.playground_info_divider}></span>
          </span>
          <p className={styles.last_used}>{lastUsed}</p>
        </div>
        <div className={styles.shared_users_container}>
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
          <p className={styles.shared_users}>
            shared with <strong>{sharedUsers[0].name} </strong>
            <strong>{sharedUsers[1].name}...</strong> +{sharedUsers.length} more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Playground;
