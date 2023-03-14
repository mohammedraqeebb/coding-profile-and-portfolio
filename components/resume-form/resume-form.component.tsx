import React, { FC, useState } from 'react';
import Button from '../button/button.component';
import EducationForms from '../education-forms/education-forms.component';

import WorkExperienceForms from '../work-experience-forms/work-experience-forms.component';
import styles from './ResumeForm.module.scss';

import { DEFAULT_USER_FIELDS } from '@/pages';

import TextAreaBox from '../textarea/textarea.component';

type ResumeFormProps = {
  user: typeof DEFAULT_USER_FIELDS;
  setUser: React.Dispatch<React.SetStateAction<typeof DEFAULT_USER_FIELDS>>;
  resume: typeof DEFAULT_USER_FIELDS.resume;
  handleSubmit: () => void;
};

const ResumeForm: FC<ResumeFormProps> = ({
  user,
  setUser,
  resume,
  handleSubmit,
}) => {
  return (
    <div className={styles.resume_form_container}>
      <TextAreaBox
        label="about me"
        onChange={(event) =>
          setUser({
            ...user,
            resume: { ...user.resume, aboutMe: event.target.value },
          })
        }
        value={user.resume.aboutMe}
      />
      <EducationForms
        education={resume.education}
        user={user}
        setUser={setUser}
      />
      <WorkExperienceForms
        workExperiences={resume.workExperiences}
        user={user}
        setUser={setUser}
      />
      <div className={styles.submit_buttons}>
        <Button
          name="cancel"
          variant="secondary"
          size="base"
          onClick={() => handleSubmit()}
        />
        <Button
          name="save changes"
          variant="primary"
          size="base"
          onClick={() => handleSubmit()}
        />
      </div>
    </div>
  );
};

export default ResumeForm;
