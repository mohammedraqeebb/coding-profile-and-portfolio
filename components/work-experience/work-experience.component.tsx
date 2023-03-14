import { getFormattedDate } from '@/util/format-date';
import { link } from 'fs';
import React, { FC } from 'react';
import { DEFAULT_USER_FIELDS } from '../user/user.component';
import styles from './WorkExperience.module.scss';
type WorkExperienceProps = {
  workExperience: typeof DEFAULT_USER_FIELDS.resume.workExperiences[0];
};

const WorkExperience: FC<WorkExperienceProps> = ({ workExperience }) => {
  return (
    <div className={styles.work_experience_container}>
      <div className={styles.logo}>
        {workExperience.company[0].toUpperCase()}
      </div>
      <div className={styles.work_experience_info}>
        <div className={styles.work_experince_info_basic}>
          <p className={styles.position}>{workExperience.position}</p>
          <div className={styles.address_company_and_tenure}>
            <div className={styles.address_company}>
              <p>{workExperience.state}</p>
              <p className={styles.project_info_divider_container}>
                <span className={styles.project_info_divider}></span>
              </p>
              <p>{workExperience.company}</p>
            </div>
            <p className={styles.tenure}>
              {getFormattedDate(workExperience.from)} -{' '}
              {getFormattedDate(workExperience.to)}
            </p>
          </div>
        </div>
        <p className={styles.description}>{workExperience.description}</p>
        {workExperience.responsibilities[0].point && (
          <div className={styles.responsibilities_container}>
            <p className={styles.title}>Job Responsiblities</p>
            <div className={styles.responsibilities}>
              {workExperience.responsibilities.map((currentResponsibilty) => (
                <li key={currentResponsibilty.id}>
                  {currentResponsibilty.point}
                </li>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
