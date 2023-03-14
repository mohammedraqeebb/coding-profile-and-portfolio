import Lightning from '@/icons/lightning';
import React from 'react';
import SearchBox from '../search/search.component';
import styles from './Header.module.scss';
import Notification from '@/icons/notification';
import Polygon from '@/icons/polygon';

const Header = () => {
  return (
    <div className={styles.header_container}>
      <p className={styles.codedamn_logo}>codedamn</p>
      <div className={styles.header_right}>
        <SearchBox placeholder="search" />
        <div className={styles.profile_icons}>
          <span className={styles.lightning_container}>
            <Lightning />
            <span>2</span>
          </span>
          <span className={styles.notification_container}>
            <Notification />
            <span className={styles.notification_number_container}>
              <span className={styles.notification_number}>1</span>
            </span>
          </span>
          <span className={styles.profile_image_container}>
            <img
              src="../static/images/profile-picture-1.png"
              height={42}
              width={42}
              alt="profile picture"
            />
            <span className={styles.polygon_container}>
              <Polygon size={21} number={12} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
