import React, { ChangeEvent, FC } from 'react';
import styles from './EducationForms.module.scss';

import EducationForm from '../education-form/education-form.component';
import Button from '../button/button.component';
import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_USER_FIELDS } from '@/pages';
import { DEFAULT_EDUCATION_FORM_FIELDS } from '@/data';

type EducationProps = {
  education: typeof DEFAULT_USER_FIELDS.resume.education;
  user: typeof DEFAULT_USER_FIELDS;
  setUser: React.Dispatch<React.SetStateAction<typeof DEFAULT_USER_FIELDS>>;
};

const EducationForms: FC<EducationProps> = ({ education, setUser, user }) => {
  const handleAddEducation = () =>
    setUser({
      ...user,
      resume: {
        ...user.resume,
        education: [...user.resume.education, DEFAULT_EDUCATION_FORM_FIELDS],
      },
    });

  const handleRemoveEducation = (id: string) => {
    setUser({
      ...user,
      resume: {
        ...user.resume,
        education: user.resume.education.filter(
          (currentEducation) => currentEducation.id !== id
        ),
      },
    });
  };

  return (
    <div className={styles.education_section_wrapper}>
      <div className={styles.education_section}>
        <p className={styles.section_title}>Education</p>
        <div className={styles.education_history}>
          {education.map((education) => (
            <EducationForm
              key={education.id}
              {...education}
              user={user}
              setUser={setUser}
              removeEducation={handleRemoveEducation}
            />
          ))}
        </div>
      </div>
      <Button
        onClick={handleAddEducation}
        name="add education"
        variant="secondary"
        size="base"
      />
    </div>
  );
};

export default EducationForms;
