import React, { FC } from 'react';
import Playground, {
  PlaygroundProps,
} from '../playground/playground.component';
import styles from './Playgrounds.module.scss';

type PlaygroundsProps = {
  playgrounds: PlaygroundProps[];
};

const Playgrounds: FC<PlaygroundsProps> = ({ playgrounds }) => {
  return (
    <div className={styles.playgrounds_section}>
      <div className={styles.section_header}>
        <span className={styles.section_title}>Playgrounds</span>
        <span className={styles.section_right_heading}>
          Create new playground
        </span>
      </div>
      <div className={styles.playground_data}>
        {playgrounds.map((playground) => (
          <Playground key={playground.id} {...playground} />
        ))}
      </div>
    </div>
  );
};

export default Playgrounds;
