import React, { FC, TextareaHTMLAttributes } from 'react';

import styles from './TextAreaBox.module.scss';

type TextAreaBoxProps = {
  label: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextAreaBox: FC<TextAreaBoxProps> = ({
  placeholder,
  label,
  ...otherProps
}) => {
  return (
    <div className={styles.textarea_box_container}>
      <p className={styles.textarea_label}>{label}</p>
      <textarea className={styles.textarea_box} {...otherProps} />
    </div>
  );
};

export default TextAreaBox;
