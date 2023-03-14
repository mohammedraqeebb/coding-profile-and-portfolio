import { DEFAULT_EDUCATION_FORM_FIELDS } from '@/data';
import { DEFAULT_USER_FIELDS } from '@/pages';
import React, { ChangeEvent, FC } from 'react';
import Button from '../button/button.component';
import InputBox from '../Input/input.component';

import TextAreaBox from '../textarea/textarea.component';
import styles from './EducationForm.module.scss';

type EducationFormProps = typeof DEFAULT_EDUCATION_FORM_FIELDS & {
  removeEducation: (index: string) => void;
  user: typeof DEFAULT_USER_FIELDS;
  setUser: React.Dispatch<React.SetStateAction<typeof DEFAULT_USER_FIELDS>>;
};

const EducationForm: FC<EducationFormProps> = ({
  universityName,
  startDate,
  endDate,
  state,
  country,
  description,
  degree,
  id,
  removeEducation,
  user,
  setUser,
}) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      resume: {
        ...user.resume,
        education: user.resume.education.map((currentEducation) =>
          currentEducation.id === id
            ? { ...currentEducation, [name]: value }
            : currentEducation
        ),
      },
    });
  };
  return (
    <div className={styles.education_container_wrapper}>
      <div className={styles.remove_education_button}>
        <Button
          onClick={() => removeEducation(id)}
          name="remove education"
          variant="tertiary"
          size="base"
        />
      </div>

      <div className={styles.education_form_container}>
        <InputBox
          label="university name"
          placeholder="Oxford University"
          name="universityName"
          value={universityName}
          onChange={handleChange}
        />
        <InputBox
          label="degree"
          placeholder="Bachelors in computer science"
          name="degree"
          value={degree}
          onChange={handleChange}
        />
        <TextAreaBox
          label="description"
          name="description"
          value={description}
          onChange={handleChange}
        />
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
            name="startDate"
            value={startDate}
            onChange={handleChange}
          />
          <InputBox
            label="end"
            placeholder="DD/MM/YYYY"
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
