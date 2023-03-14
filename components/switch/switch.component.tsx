import React, { useState } from 'react';
import styles from './Switch.module.scss';

type SwitchProps = {
  type: 'toggle_switch' | 'radio_button' | 'checkbox';
  switchState: boolean;
  onClickHandler: () => void;
};

const Switch: React.FC<SwitchProps> = ({
  switchState,
  type,
  onClickHandler,
}) => {
  if (type === 'toggle_switch') {
    return (
      <div
        className={styles.toggle_switch_container}
        onClick={() => onClickHandler()}
        style={{
          backgroundColor: switchState ? '#4f46e5' : '#E4E4E7',
          justifyContent: switchState ? 'flex-end' : 'flex-start',
        }}
      >
        <div className={styles.toggle_switch}></div>
      </div>
    );
  } else if (type === 'radio_button') {
    return (
      <div
        onClick={() => onClickHandler()}
        className={styles.radio_button_container}
      >
        <div className={`${switchState ? styles.checked : ''}`}>
          <div></div>
        </div>
      </div>
    );
  }
  return null;
};

export default Switch;
