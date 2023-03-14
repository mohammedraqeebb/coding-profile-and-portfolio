import React, { FC, InputHTMLAttributes } from 'react';
import styles from './Search.module.scss';
import { FiSearch } from 'react-icons/fi';

type InputSearchProps = {
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchBox: FC<InputSearchProps> = ({ placeholder }) => {
  return (
    <div className={styles.search_container}>
      <FiSearch size={12} color="#71717A" className={styles.search_icon} />
      <input placeholder={placeholder} />
    </div>
  );
};

export default SearchBox;
