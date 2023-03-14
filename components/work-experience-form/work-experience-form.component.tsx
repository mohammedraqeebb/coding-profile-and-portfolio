import { DEFAULT_WORK_EXPERIENCE_FIELDS } from '@/data';
import { DEFAULT_USER_FIELDS } from '@/pages';
import React, { ChangeEvent, FC } from 'react';
import Button from '../button/button.component';
import InputBox from '../Input/input.component';

import TextAreaBox from '../textarea/textarea.component';
import styles from './WorkExperienceForm.module.scss';

type WorkExperienceFormProps = typeof DEFAULT_WORK_EXPERIENCE_FIELDS & {
  removeWorkExperience: (index: string) => void;
  handleAddResponsibility: (workExperienceIndex: string) => void;
  handleRemoveResponsibility: (
    workExperienceIndex: string,
    responsibilityIndex: string
  ) => void;
  user: typeof DEFAULT_USER_FIELDS;
  setUser: React.Dispatch<React.SetStateAction<typeof DEFAULT_USER_FIELDS>>;
};

const WorkExperienceForm: FC<WorkExperienceFormProps> = ({
  id,
  position,
  company,
  description,
  state,
  country,
  responsibilities: resposibilities,
  removeWorkExperience: removeEducation,
  handleAddResponsibility,
  handleRemoveResponsibility,
  user,
  setUser,
  from,
  to,
}) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      resume: {
        ...user.resume,
        workExperiences: user.resume.workExperiences.map(
          (currentWorkExperience) =>
            currentWorkExperience.id === id
              ? { ...currentWorkExperience, [name]: value }
              : currentWorkExperience
        ),
      },
    });
  };
  const handleResponsibitlityChange = (
    event: ChangeEvent<HTMLInputElement>,
    responsibitityId: string
  ) => {
    setUser({
      ...user,
      resume: {
        ...user.resume,
        workExperiences: user.resume.workExperiences.map(
          (currentWorkExperience) => {
            return currentWorkExperience.id === id
              ? {
                  ...currentWorkExperience,
                  responsibilities: currentWorkExperience.responsibilities.map(
                    (currentResponsibilty) => {
                      return currentResponsibilty.id === responsibitityId
                        ? { ...currentResponsibilty, point: event.target.value }
                        : currentResponsibilty;
                    }
                  ),
                }
              : currentWorkExperience;
          }
        ),
      },
    });
  };

  return (
    <div className={styles.work_experience_container_wrapper}>
      <div className={styles.remove_work_experience_button}>
        <Button
          onClick={() => removeEducation(id)}
          name="remove work experience"
          variant="tertiary"
          size="base"
        />
      </div>

      <div className={styles.work_experience_form_container}>
        <InputBox
          label="position"
          placeholder="Senior Software Engineer"
          name="position"
          value={position}
          onChange={handleChange}
        />
        <InputBox
          label="company"
          placeholder="Google"
          name="company"
          value={company}
          onChange={handleChange}
        />
        <TextAreaBox
          label="description"
          value={description}
          name="description"
          onChange={handleChange}
        />
        <div className={styles.resposibilities_container_wrapper}>
          <p className={styles.resposibilities_container_title}>
            Responsibilities
          </p>
          <div className={styles.resposibilities_container}>
            {resposibilities.map((currentResponsibility) => (
              <div className={styles.responsibility_container}>
                <input
                  className={styles.responsibility_input}
                  onChange={(event) =>
                    handleResponsibitlityChange(event, currentResponsibility.id)
                  }
                  value={currentResponsibility.point}
                />
                <Button
                  onClick={() =>
                    handleRemoveResponsibility(id, currentResponsibility.id)
                  }
                  name="X"
                  variant="secondary"
                  size="small"
                />
              </div>
            ))}
          </div>
          <Button
            size="small"
            name="add responsiblity"
            variant="secondary"
            onClick={() => handleAddResponsibility(id)}
          />
        </div>
        <div className={styles.address}>
          <InputBox
            label="state"
            placeholder="Atlanta"
            name="state"
            value={state}
            onChange={handleChange}
          />
          <InputBox
            label="country"
            placeholder="United States"
            name="country"
            value={country}
            onChange={handleChange}
          />
        </div>
        <div className={styles.term}>
          <InputBox
            label="start"
            placeholder="DD/MM/YYYY"
            type="date"
            value={from}
            name="from"
            onChange={handleChange}
          />
          <InputBox
            label="end"
            placeholder="DD/MM/YYYY"
            type="date"
            value={to}
            name="to"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceForm;
