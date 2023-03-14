import React, { FC, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  name: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  size: 'base' | 'large' | 'small';
  iconPosition?: 'left' | 'right' | 'only' | 'false';
  icon?: JSX.Element;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  name,
  variant,
  size,
  icon,
  iconPosition = 'false',
  ...otherProps
}) => {
  return (
    <button
      className={`${styles['container']} ${styles[variant]} ${styles[size]}`}
      {...otherProps}
    >
      <div className={styles.button_contents}>
        {iconPosition !== 'false' && (
          <span
            style={{
              alignSelf: iconPosition === 'right' ? 'flex-end' : 'flex-end',
            }}
          >
            {icon}
          </span>
        )}
        {iconPosition !== 'only' && <span>{name}</span>}
      </div>
    </button>
  );
};

export default Button;
