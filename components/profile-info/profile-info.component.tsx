import Polygon from '@/icons/polygon';
import { DEFAULT_USER_FIELDS } from '@/pages';
import React, { FC } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import {
  FiCopy,
  FiEdit,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from 'react-icons/fi';
import Badge from '../badge/badge.component';
import Button from '../button/button.component';

import styles from './ProfileInfo.module.scss';

type ProfileInfoProps = {
  profile: typeof DEFAULT_USER_FIELDS.profile;
  socials: typeof DEFAULT_USER_FIELDS.socials;
};

const ProfileInfo: FC<ProfileInfoProps> = ({ profile, socials }) => {
  return (
    <div className={styles.profile_info_container}>
      <div className={styles.cover_photo_container}>
        <span className={styles.edit_button_container}>
          <Button
            name="edit cover"
            size="base"
            variant="secondary"
            iconPosition="left"
            icon={<FiEdit size={14} color="#71717A" />}
          />
        </span>
      </div>
      <div className={styles.profile_info}>
        <div className={styles.profile_photo_container}>
          <img
            src="../static/images/profile-picture-1.png"
            height={140}
            width={140}
            alt="profile photo"
          />
          <span className={styles.polygon_container}>
            <Polygon size={20} number={5} />
          </span>
        </div>
        <div className={styles.name_container}>
          <div className={styles.name_and_status}>
            <p className={styles.name}>{profile.name}</p>
            <Badge variant="accent-1" text="Pro" />
            <Badge variant="secondary" text="Looking for job" />
          </div>
          <p className={styles.about}>{profile.about}</p>
          <div className={styles.location}>
            <CiLocationOn size={16} color="#a1a1aa" />
            <p>
              {profile.state},{profile.country}
            </p>
          </div>
        </div>
        <div className={styles.skills_container}>
          {profile.skills.map((currentSkill) => (
            <span key={currentSkill.id}>{currentSkill.value}</span>
          ))}
        </div>
        <div className={styles.socials_and_buttons_container}>
          <div className={styles.socials_container}>
            {socials.linkedin && (
              <a href={socials.linkedin}>{<FiLinkedin size={20} />}</a>
            )}
            {socials.instagram && (
              <a href={socials.instagram}>{<FiInstagram size={20} />}</a>
            )}
            {socials.facebook && (
              <a href={socials.linkedin}>{<FiFacebook size={20} />}</a>
            )}
          </div>
          <div className={styles.buttons_container}>
            <Button
              variant="secondary"
              size="base"
              iconPosition="only"
              icon={<FiCopy color="#717171" />}
              name=""
            />
            <Button variant="primary" size="base" name="contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
