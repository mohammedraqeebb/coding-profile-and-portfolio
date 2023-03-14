import React, { FC } from 'react';
import Button from '../button/button.component';

import WorkExperienceForm from '../work-experience-form/work-experience-form.component';
import styles from './WorkExperienceForms.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_USER_FIELDS } from '@/pages';
import { DEFAULT_WORK_EXPERIENCE_FIELDS } from '@/data';

type WorkExperienceProps = {
  workExperiences: typeof DEFAULT_WORK_EXPERIENCE_FIELDS[];
  user: typeof DEFAULT_USER_FIELDS;
  setUser: React.Dispatch<React.SetStateAction<typeof DEFAULT_USER_FIELDS>>;
};

const WorkExperienceForms: FC<WorkExperienceProps> = ({
  workExperiences,
  user,
  setUser,
}) => {
  const handleAddWorkExperience = () =>
    setUser({
      ...user,
      resume: {
        ...user.resume,
        workExperiences: [
          ...user.resume.workExperiences,
          DEFAULT_WORK_EXPERIENCE_FIELDS,
        ],
      },
    });

  const handleRemoveWorkExperience = (index: string) =>
    setUser({
      ...user,
      resume: {
        ...user.resume,
        workExperiences: user.resume.workExperiences.filter(
          (currentWorkExperience) => currentWorkExperience.id !== index
        ),
      },
    });

  const handleAddResponsibility = (workExperienceIndex: string) => {
    setUser({
      ...user,
      resume: {
        ...user.resume,
        workExperiences: user.resume.workExperiences.map(
          (currentWorkExperience) =>
            currentWorkExperience.id === workExperienceIndex
              ? {
                  ...currentWorkExperience,
                  responsibilities: [
                    ...currentWorkExperience.responsibilities,
                    {
                      id: uuidv4(),
                      point: '',
                    },
                  ],
                }
              : currentWorkExperience
        ),
      },
    });
  };
  const handleRemoveResponsibility = (
    workExperienceIndex: string,
    responsibilityIndex: string
  ) => {
    setUser({
      ...user,
      resume: {
        ...user.resume,
        workExperiences: user.resume.workExperiences.map(
          (currentWorkExperience) =>
            currentWorkExperience.id === workExperienceIndex
              ? {
                  ...currentWorkExperience,
                  responsibilities:
                    currentWorkExperience.responsibilities.filter(
                      (currentResponsibilty) =>
                        currentResponsibilty.id !== responsibilityIndex
                    ),
                }
              : currentWorkExperience
        ),
      },
    });
  };
  return (
    <div className={styles.work_experience_section_wrapper}>
      <div className={styles.work_experience_section}>
        <p className={styles.section_title}>Work Experience</p>
        <div className={styles.work_experience_history}>
          {workExperiences.map((currentWorkExperience) => (
            <WorkExperienceForm
              key={currentWorkExperience.id}
              user={user}
              setUser={setUser}
              handleRemoveResponsibility={handleRemoveResponsibility}
              handleAddResponsibility={handleAddResponsibility}
              {...currentWorkExperience}
              removeWorkExperience={handleRemoveWorkExperience}
            />
          ))}
        </div>
      </div>
      <Button
        onClick={handleAddWorkExperience}
        name="add work experience"
        variant="secondary"
        size="base"
      />
    </div>
  );
};

export default WorkExperienceForms;
