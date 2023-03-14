import React, { FC, InputHTMLAttributes } from 'react';

import styles from './InputBox.module.scss';

type InputBoxProps = {
  label: string;
  showRightIcon?: boolean;
  rightIcon?: JSX.Element;
  showError?: boolean;
  errorMessage?: string;
  showHelperText?: boolean;
  helperText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputBox: FC<InputBoxProps> = ({
  label,
  showRightIcon = false,
  rightIcon,
  showError = false,
  errorMessage,
  showHelperText = false,
  helperText,
  ...otherProps
}) => {
  return (
    <div className={styles.input_box_container}>
      <p className={styles.input_label}>{label}</p>
      <input
        className={`${styles.input_box} ${showError ? styles.error : ''} ${
          showRightIcon ? styles.show_right_icon : ''
        }`}
        {...otherProps}
      />
      {showRightIcon && (
        <span className={styles.right_icon_container}>{rightIcon}</span>
      )}
      {showError && <p className={styles.error_message_text}>{errorMessage}</p>}
      {showHelperText && <p className={styles.helper_text}>{helperText}</p>}
    </div>
  );
};

export default InputBox;
