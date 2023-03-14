import { DEFAULT_USER_FIELDS } from '@/pages';
import React, { FC } from 'react';

import WorkExperience from '../work-experience/work-experience.component';
import styles from './WorkExperienceHistory.module.scss';

type WorkExperienceHistoryProps = {
  workExperienceHistory: typeof DEFAULT_USER_FIELDS.resume.workExperiences;
};

const WorkExperienceHistory: FC<WorkExperienceHistoryProps> = ({
  workExperienceHistory,
}) => {
  return (
    <div className={styles.work_experiences_section}>
      <p className={styles.title}>Work experience</p>
      {workExperienceHistory.map((currentWorkExperience) => (
        <WorkExperience
          key={currentWorkExperience.id}
          workExperience={currentWorkExperience}
        />
      ))}
    </div>
  );
};

export default WorkExperienceHistory;
