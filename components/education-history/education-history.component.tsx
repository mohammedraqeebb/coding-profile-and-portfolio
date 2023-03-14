import { DEFAULT_USER_FIELDS } from '@/pages';
import React, { FC } from 'react';
import Education from '../education/education.component';

import styles from './EducationHistory.module.scss';

type EducationHistoryProps = {
  educationHistory: typeof DEFAULT_USER_FIELDS.resume.education;
};

const EducationHistory: FC<EducationHistoryProps> = ({ educationHistory }) => {
  return (
    <div className={styles.education_history_container}>
      <p className={styles.title}>Education</p>
      {educationHistory.map((currentEducation) => (
        <Education key={currentEducation.id} education={currentEducation} />
      ))}
    </div>
  );
};

export default EducationHistory;
