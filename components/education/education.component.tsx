import { DEFAULT_USER_FIELDS } from '@/pages';
import { getFormattedDate } from '@/util/format-date';
import React, { FC } from 'react';

import styles from './Education.module.scss';

type EducationProps = {
  education: typeof DEFAULT_USER_FIELDS.resume.education[0];
};

const Education: FC<EducationProps> = ({ education }) => {
  return (
    <div className={styles.education_container}>
      <div className={styles.logo}>
        {education.universityName[0].toLocaleUpperCase()}
      </div>
      <div className={styles.education_info}>
        <p className={styles.university_name}>{education.universityName}</p>
        <div className={styles.education_basic_info}>
          <div className={styles.address_and_degree}>
            <p>{education.state}</p>
            <p className={styles.info_divider_container}>
              <span className={styles.info_divider}></span>
            </p>
            <p>{education.degree}</p>
          </div>
          <div className={styles.tenure}>
            {getFormattedDate(education.startDate)} -{' '}
            {getFormattedDate(education.endDate)}
          </div>
        </div>
        <p className={styles.description}>{education.description}</p>
      </div>
    </div>
  );
};

export default Education;
